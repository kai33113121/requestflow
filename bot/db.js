const mysql = require('mysql2/promise');

async function testConnection() {
    try {
        const connection = await mysql.createConnection({
            host: '172.17.9.87',
            user: 'learn_angelvanegas',
            password: 'AQUI_TU_PASSWORD',
            database: 'crm2',
            port: 3306
        });

        console.log('✅ Conectado a la base de datos');

        const [rows] = await connection.execute('SHOW TABLES');
        console.log(rows);

        await connection.end();

    } catch (error) {
        console.error('❌ Error de conexión:', error.message);
    }
}

testConnection();
