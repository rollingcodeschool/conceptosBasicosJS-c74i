/* while(condicion logica){
    todo el codigo que quiero repetir
    cambiar la condicion logica
} 
*/

// while(contador <= 10){
//     // document.write('<p>Este es el renglon número '+ contador+ '</p>');
//     document.write(`<p>Este es el renglon número ${contador} </p>`);
//     contador = contador + 1;
// }

/*
    do{
        todo el codigo que quiero repetir
        cambiar la condicion logica
    }while(condicion logica)
    */

let contador = 1;

// do {
//   document.write(`<p>Este es el renglon número ${contador} </p>`);
//   contador = contador + 1;
// } while (contador <= 10);

/*
for(inicializo una variable; condicion logica; modifico la condicion){
    todo el codigo que quiero ejecutar varias veces
}
*/

// contador-- es igual (contador = contador -1)
for (let contador = 10; contador >= 1; contador--) {
  document.write(`Renglon numero ${contador} <br>`);
}
