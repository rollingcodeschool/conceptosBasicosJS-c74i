// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

// pedir al usuario una frase

//Hola mundo, tengo que recorrer letra por letra la frase y si encuentro una vocal la muestro por pantalla

// palabra.length = cantidad de caracteres
// palabra.charAt(0)

let frase = prompt("Ingrese una frase de hasta 5 caracteres");
// console.log(frase.charAt(0));
// frase.toLowerCase() pasa la frase a minuscula
// frase.toUpperCase() pasa la frase a mayuscula
console.log(frase.toLowerCase());
frase = frase.toLowerCase();

console.log(frase.length);
if( frase.length <= 5){
    if (
        frase.charAt(0) === "a" ||
        frase.charAt(0) === "e" ||
        frase.charAt(0) === "i" ||
        frase.charAt(0) === "o" ||
        frase.charAt(0) === "u"
      ) {
        document.write(frase.charAt(0));
      }
      
      if (
        frase.charAt(1) === "a" ||
        frase.charAt(1) === "e" ||
        frase.charAt(1) === "i" ||
        frase.charAt(1) === "o" ||
        frase.charAt(1) === "u"
      ) {
        document.write(frase.charAt(1));
      }
      
      if (
        frase.charAt(2) === "a" ||
        frase.charAt(2) === "e" ||
        frase.charAt(2) === "i" ||
        frase.charAt(2) === "o" ||
        frase.charAt(2) === "u"
      ) {
        document.write(frase.charAt(2));
      }
      if (
        frase.charAt(3) === "a" ||
        frase.charAt(3) === "e" ||
        frase.charAt(3) === "i" ||
        frase.charAt(3) === "o" ||
        frase.charAt(3) === "u"
      ) {
        document.write(frase.charAt(3));
      }
      if (
        frase.charAt(4) === "a" ||
        frase.charAt(4) === "e" ||
        frase.charAt(4) === "i" ||
        frase.charAt(4) === "o" ||
        frase.charAt(4) === "u"
      ) {
        document.write(frase.charAt(4));
      }      
}else{
    alert('Ingrese una frase de hasta 5 caracteres')
}

