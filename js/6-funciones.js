//funciones declarativas
function saludar(){
    document.write(`<p>Hola mundo</p>`);
}

function nuevoSaludo(nombreIngresado, apellidoIngresado){
    document.write(`<p>Hola ${nombreIngresado}, ${apellidoIngresado} que tengas un buen día</p>`);
    // document.write("<p>Hola "+nombreIngresado+ ", "+apellidoIngresado+" que tengas un buen día</p>");
}

// function conversionAPesos(dolares){
//     const precioFinal = dolares * 1000;
//     console.log(precioFinal);
//     return precioFinal;
// }
//arrow functions
// const conversionAPesos = (dolares) =>{
//     const precioFinal = dolares * 1000;
//     console.log(precioFinal);
//     return precioFinal;
// }

const conversionAPesos = (dolares) => dolares * 1000;

//invocar a una funcion
saludar();

const nombre = prompt('Ingrese un nombre');
const apellido = prompt('Ingrese un apellido');

nuevoSaludo(nombre, apellido);

nuevoSaludo('Luciano', 'Cabello');

nuevoSaludo('Sebastian');

nuevoSaludo();

let precioProducto = conversionAPesos(35);
document.write(`<p>El precio del producto de prueba es: $${precioProducto}</p>`);
document.write(`<p>El precio del producto de prueba es: $${conversionAPesos(40)}</p>`);



