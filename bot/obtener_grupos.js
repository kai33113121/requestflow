const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth({
        clientId: "consulta-grupos"
    }),
    puppeteer: {
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', qr => {
    console.log('📲 Escanea el QR');
    qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {

    console.log('✅ Conectado. Obteniendo grupos...\n');

    const chats = await client.getChats();

    const grupos = chats.filter(chat => chat.isGroup);

    grupos.forEach(grupo => {

        console.log('-----------------------------');
        console.log('Nombre:', grupo.name);
        console.log('ID:', grupo.id._serialized);
        console.log('-----------------------------\n');

    });

});

client.initialize();