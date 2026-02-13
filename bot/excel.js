const xlsx = require('xlsx');
const path = require('path');

// Ruta del archivo Excel
const filePath = path.join(__dirname, 'Asignacion.xlsm');

// Leer el archivo
const workbook = xlsx.readFile(filePath);

// Tomar la primera hoja
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Convertir a JSON
const data = xlsx.utils.sheet_to_json(sheet);

// Mostrar resultado
console.log('📊 Datos leídos del Excel:');
console.log(data);

module.exports = data;
// Filtrar solo solicitudes activas
const activas = data.filter(row =>
    row.Estado === 'En curso' || row.Estado === 'En espera'
);

// Contar por practicante
const carga = {};

activas.forEach(row => {
    const nombre = row.Practicante;

    if (!carga[nombre]) {
        carga[nombre] = 0;
    }

    carga[nombre]++;
});

console.log('\n📊 Carga actual por practicante:');
console.log(carga);
