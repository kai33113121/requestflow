const mysql = require('mysql2/promise');

async function checkNew() {

    const connection = await mysql.createConnection({
        host: '172.17.9.87',
        user: 'learn_angelvanegas',
        password: 'NsIDEFULAsWa',
        database: 'miosv2_crm2'
    });

    const [rows] = await connection.query(`
    SELECT 
      id,
      form_id,
      created_at
    FROM form_answers
    WHERE form_id = 362
    ORDER BY id DESC
    LIMIT 10
  `);

    console.log(rows);

}

checkNew();