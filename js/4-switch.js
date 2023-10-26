// pedir al usuario seleccionar una estacion del año y ofrecer un menu con las opciones de plato principal, bebida, postre.

const opcion = prompt(
  "Seleccione una opción: 1-Verano, 2-Otoño, 3-Invierno, 4-Primavera"
);

// if(opcion === '1'){
//     document.write(`<ul>
//     <li>Plato principal: Asado</li>
//     <li>Bebida: Vino</li>
//     <li>Postre: Helado</li>
//     </ul>`)
// }else if(opcion ==='2'){
//     document.write(`<ul>
//     <li>Plato principal: Locro</li>
//     <li>Bebida: Vino</li>
//     <li>Postre: Flan</li>
//     </ul>`)
// }else if(opcion ==='3'){
//     document.write(`<ul>
//     <li>Plato principal: ñoquis</li>
//     <li>Bebida: gaseosa </li>
//     <li>Postre: Chocotorta</li>
//     </ul>`)
// }else if(opcion ==='4'){
//     document.write(`<ul>
//     <li>Plato principal: Sandwich de milanesa</li>
//     <li>Bebida: Mirinda manzana</li>
//     <li>Postre: Ensalada de frutas</li>
//     </ul>`)
// }else{
//     document.write(`Ingreso una opción invalida`)
// }

switch (opcion) {
  case "verano":
  case "1":
    document.write(`<ul>
    <li>Plato principal: Asado</li>
    <li>Bebida: Vino</li>
    <li>Postre: Helado</li>
    </ul>`);
    break;
  case "2":
    document.write(`<ul>
    <li>Plato principal: Locro</li>
    <li>Bebida: Vino</li>
    <li>Postre: Flan</li>
    </ul>`);
    break;
  case "3":
    document.write(`<ul>
        <li>Plato principal: ñoquis</li>
        <li>Bebida: gaseosa </li>
        <li>Postre: Chocotorta</li>
        </ul>`);
    break;
  case "4":
    document.write(`<ul>
        <li>Plato principal: Sandwich de milanesa</li>
        <li>Bebida: Mirinda manzana</li>
        <li>Postre: Ensalada de frutas</li>
        </ul>`);
    break;
  default:
    document.write(`Ingreso una opción invalida`);
}
