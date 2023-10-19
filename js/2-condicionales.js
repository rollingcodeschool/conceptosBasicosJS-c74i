// condicional simple

/* if(condicion logica){
    el codigo que ejecuto si se cumple la condicion
}
*/

let numeroSeleccionado = parseInt(prompt('Ingrese un numero del 1 al 10'));
console.log(numeroSeleccionado);

if(numeroSeleccionado === 5){
    console.log('El numero que ingresaste fue el 5')
}else{
    console.log('No adivine el numero')
}
