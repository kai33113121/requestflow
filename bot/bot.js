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

// Listo
client.on('ready', () => {
    console.log('✅ Bot conectado correctamente');
});

// MENSAJES (incluye los tuyos)
client.on('message_create', async message => {

    // Para ver qué llega
    console.log('Mensaje:', message.body);

    // Comando
    if (message.body === '!ping') {
        await message.reply('pong 🏓');
    }

    if (message.body === '!hola') {
        await message.reply('Ey 👋 soy tu bot y sí estoy vivo');
    }
});

client.initialize();
    