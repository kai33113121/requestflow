process.on('uncaughtException', err => {
    console.log('❌ Error crítico:', err.message);
});

process.on('unhandledRejection', err => {
    console.log('❌ Promesa rechazada:', err);
});

const { obtenerSolicitudesNuevas, obtenerUltimoIDReal } = require('./crm_reader');
const { obtenerUltimoID, guardarUltimoID } = require('./state');

const GRUPO_IMPLEMENTACION = '120363030261537597@g.us';

const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});


// QR
client.on('qr', qr => {
    console.log('📲 Escanea el QR con WhatsApp');
    qrcode.generate(qr, { small: true });
});


// BOT LISTO
client.on('ready', async () => {

    console.log('✅ Bot conectado correctamente');

    const info = client.info;
    console.log('📱 Número del bot:', info.wid.user);
    console.log('🆔 ID del bot:', info.wid._serialized);

    let ultimoID = obtenerUltimoID();

    if (!ultimoID) {

        try {
            const ultimoReal = await obtenerUltimoIDReal();
            guardarUltimoID(ultimoReal);
            ultimoID = ultimoReal;

            console.log('🧠 Primera inicialización desde ID real:', ultimoReal);

        } catch (error) {
            console.log('⚠️ No se pudo consultar la base al iniciar:', error.message);
            ultimoID = 0;
        }

    }

    console.log('📌 Iniciando monitoreo desde ID:', ultimoID);

    // LOOP PRINCIPAL
    setInterval(async () => {

        try {

            const ultimoIDActual = obtenerUltimoID();

            const nuevas = await obtenerSolicitudesNuevas(ultimoIDActual);

            if (nuevas.length === 0) return;

            const grupo = await client.getChatById(GRUPO_IMPLEMENTACION);

            for (const solicitud of nuevas) {

                const mensaje = `📨 *Nueva solicitud asignada*

Radicado: ${solicitud.radicado}
Campaña: ${solicitud.campana}
Tipo: ${solicitud.tipo}
Subtipo: ${solicitud.subtipo}

👤 Solicitante: ${solicitud.solicitante}
📧 Correo: ${solicitud.correo}
📱 Teléfono: ${solicitud.telefono}`;

                await grupo.sendMessage(mensaje);

                guardarUltimoID(solicitud.id);
                console.log('🧠 Nuevo último ID guardado:', solicitud.id);
                console.log('✅ Solicitud enviada:', solicitud.id);
            }

        } catch (error) {

            console.log('❌ Error en monitoreo:', error.message);

        }

    }, 10000); // cada 10 segundos

});


client.initialize();


// Reconexión automática
client.on('disconnected', (reason) => {

    console.log('❌ Bot desconectado:', reason);
    console.log('🔄 Reconectando en 5 segundos...');

    setTimeout(() => {
        client.initialize();
    }, 5000);

});


client.on('auth_failure', msg => {
    console.log('❌ Error de autenticación:', msg);
});