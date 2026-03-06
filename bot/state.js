const fs = require('fs');

const FILE = './ultimo_id.txt';

function obtenerUltimoID() {

    if (!fs.existsSync(FILE)) return 0;

    return parseInt(fs.readFileSync(FILE, 'utf8'));
}

function guardarUltimoID(id) {

    fs.writeFileSync(FILE, id.toString());
}

module.exports = {
    obtenerUltimoID,
    guardarUltimoID
};