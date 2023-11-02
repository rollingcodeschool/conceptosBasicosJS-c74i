//funciones declarativas
function saludar(){
    document.write(`<p>Hola mundo</p>`);
}

function nuevoSaludo(nombreIngresado, apellidoIngresado){
    document.write(`<p>Hola ${nombreIngresado}, ${apellidoIngresado} que tengas un buen día</p>`);
    // document.write("<p>Hola "+nombreIngresado+ ", "+apellidoIngresado+" que tengas un buen día</p>");
}

//invocar a una funcion
saludar();

const nombre = prompt('Ingrese un nombre');
const apellido = prompt('Ingrese un apellido');

nuevoSaludo(nombre, apellido);

nuevoSaludo('Luciano', 'Cabello');

nuevoSaludo('Sebastian');

nuevoSaludo();
