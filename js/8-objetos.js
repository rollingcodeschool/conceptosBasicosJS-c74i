//objetos con notacion literal

let pelicula = {
    //propiedades -> clave:valor
    titulo:'theBatman',
    duracionEnHoras: 3,
    estado:true,
    descripcion: 'Batman explora la corrupción existente en la ciudad de Gotham y el vínculo de esta con su propia familia. Además, entra en conflicto con un asesino en serie conocido como "el Acertijo"',
    reparto: ['Robert Pattinson','zoe kravitz'],
    //metodos
    play: function (){
        console.log(this);
        document.write(`<p>...Comenzo la pelicula ${this.titulo} 🍿 </p>`)
    },
    pausa: () =>{
        console.log(this);
        document.write(`<p>Peli en pausa</p>`)
    }
};

console.log(pelicula);
// document.write(pelicula);
document.write(`<h2>Pelicula: ${pelicula.titulo}</h2>`)
document.write(`<p>Descripción: ${pelicula.descripcion}</p>`)
document.write(`<p>Duración: ${pelicula['duracionEnHoras']}</p>`)

//metodo del objeto Object 
console.log(pelicula.hasOwnProperty('reparto'));
console.log(pelicula.hasOwnProperty('precio'));

//agregar mas propiedades
pelicula.precio = 650;
console.log(pelicula);
document.write(`<p>Precio: $${pelicula.precio}</p>`)
//modificar una propiedad
pelicula.precio = 850;
document.write(`<p>Precio actualizado: $${pelicula.precio}</p>`)
document.write(`<p>Fecha de estreno: ${pelicula.estreno}</p>`)

//borrar propiedad de un objeto
delete pelicula.reparto;
console.log(pelicula);

pelicula.play();
pelicula.pausa();