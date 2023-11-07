const productos = [
    "Hidratante facial",
    "Tonico exfoliante",
    "Protector solar factor 50",
    "Protector solar factor 50",
    "Protector solar toque seco factor 50",
    "Protector solar con color factor 50",
    "Gel de limpieza facial",
    "Tonico hidratante",
    "Sérum hidratante",
    "Exfoliante de azúcar cherry",
    "Pads de hidrogel para contorno de ojos",
    "Mascarilla facial",
    "Sérum facial con PHA",
    "Agua micellar",
    "Mascara de hidratación y reparación",
    "Protector solar en barra",
    "Crema contorno de ojos",
    "Bálsamo labial",
  ];

  const mostrarProductos = (arregloNuevo, titulo)=>{
    document.write(`<h2>${titulo}</h2>`);
    document.write(`<ul>`);
    arregloNuevo.map( producto => document.write(`<li>${producto}</li>`) );
    document.write(`</ul>`);
    // for (let i = 0; i < productos.length; i++) {
    //   document.write(`<li>${productos[i]}</li>`);
    // }
  }

  mostrarProductos(productos, 'Lista de Productos');

  //filtrar Protectores solares
//   const protectoresSolares = productos.filter((producto) =>  producto === "Protector solar factor 50" )
  const protectoresSolares = productos.filter((producto) => producto.includes('Protector') )
  console.log(protectoresSolares);

  console.log(productos[0].includes("Protector"))

  mostrarProductos(protectoresSolares, 'Protectores solares')

 //quiero buscar un serum
 const buscarProducto = productos.find((item)=> item.includes('Sérum'));
 const buscarProducto2 = productos.find((item)=> item.includes('Sombras'));
//  const buscarProducto = productos.find((item)=> item === "Tonico hidratante 2");
 
 document.write(`<p>Producto buscado: ${buscarProducto}</p>`)
//(condicion logica) ? aqui escribo el codigo si se cumple la condicion : aqui el codigo si no se cumple la condicion
 const respuesta = (buscarProducto2 !== undefined) ? buscarProducto2 : 'No se encontró el producto buscado' 
 document.write(`<p>Producto buscado (Sombras): ${respuesta}</p>`)