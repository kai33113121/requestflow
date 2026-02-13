const mysql = require('mysql2/promise');

async function main() {
  try {
    const connection = await mysql.createConnection({
      host: '172.17.9.87',
      user: 'learn_angelvanegas',
      password: '',
      database: 'crm2',
      port: 3306
    });

    console.log("✅ Conectado correctamente a CRM2");

    const [tables] = await connection.execute("SHOW TABLES");
    console.log("📋 Tablas en crm2:");
    console.log(tables);

    await connection.end();

  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

main();
