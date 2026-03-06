const personas = [

{
nombre: "Lina Maria Tobar Gaviria",
usuario: "ltobar80"
},

{
nombre: "Lina Mayerli Bohórquez Cifuentes",
usuario: "lbohorquez61"
},

{
nombre: "Juan Felipe Prado Yemayusa",
usuario: "jprado44"
},

{
nombre: "Alisson Yolany Acosta Gonzalez",
usuario: "aacosta7"
},

{
nombre: "Angel David Vanegas Bulla",
usuario: "Angel.B78"
}

];

let indexRecibe = -1;
let indexGestiona = 2; // empieza diferente para evitar que coincidan al inicio


function siguienteRecibe() {

indexRecibe++;

if(indexRecibe >= personas.length)
indexRecibe = 0;

return personas[indexRecibe];

}


function siguienteGestiona() {

indexGestiona++;

if(indexGestiona >= personas.length)
indexGestiona = 0;

return personas[indexGestiona];

}


module.exports = {

siguienteRecibe,
siguienteGestiona

};