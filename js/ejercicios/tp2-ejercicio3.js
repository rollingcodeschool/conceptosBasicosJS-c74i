// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

//pedir al usuario una frase

//preguntar si quiere ingresar otra frase
let fraseCompleta = "";
do {
  const primeraFrase = prompt("Ingrese una frase");
  //preguntar si es la primera frase
  if (fraseCompleta.length === 0) {
    fraseCompleta += primeraFrase;
  } else {
    fraseCompleta += "-" + primeraFrase;
  }
} while (confirm("¿Desea ingresar otra frase?"));

document.write(`<p>La frase completa es: ${fraseCompleta}</p>`)
// agregar un código para verificar si fraseCompleta es null que muestre otro cartel al usuario