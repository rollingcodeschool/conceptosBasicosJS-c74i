//declaremos un array vacio
let colores = [];

const peliculas = ['dr strange','rambo','La saga de Transformer','Five nights at freedy', true, 2023 ];

//cantidad de elementos en un array
console.log(peliculas.length);
console.log(peliculas.length - 1);

//mostrar por pantalla un array
document.write(peliculas);
document.write(`<p>El primer elemento del array es: ${peliculas[0]}</p>`);
document.write(`<p>El ultimo elemento del array es: ${peliculas[peliculas.length-1]}</p>`);
document.write(`<p>Un elemento inexistente del array es: ${peliculas[10]}</p>`);

document.write(`<h2>Lista de peliculas</h2>`);
document.write(`<ul>`);
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

//agregar elementos en el array
peliculas.unshift('Ironman 1','Ironman 2');
document.write(`<h2>Lista de peliculas + ironman</h2>`);
document.write(`<ul>`);
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

peliculas.splice(2,0,'Thor');
document.write(`<h2>Lista de peliculas + thor</h2>`);
document.write(`<ul>`);
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

peliculas.push('Batman');
document.write(`<h2>Lista de peliculas + Batman</h2>`);
document.write(`<ul>`);
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

//modificar elementos en el array
peliculas[3] = 'Dr. Strange: multiverse of madness'
console.log(peliculas)
document.write(`<h2>Lista de peliculas + Dr. strange modificado (${peliculas.length})</h2>`);
document.write(`<ul>`);
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

//borrar elementos del array
peliculas.shift();
document.write(`<h2>Lista de peliculas menos el primer elemento (${peliculas.length})</h2>`);
document.write(`<ul>`);
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

// peliculas.splice(6,1);
peliculas.splice(6,2);
// peliculas.splice(6);
document.write(`<h2>Lista de peliculas menos un elemento particular (${peliculas.length})</h2>`);
document.write(`<ul>`);
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

peliculas.pop();
document.write(`<h2>Lista de peliculas menos el ultimo elemento (${peliculas.length})</h2>`);
document.write(`<ul>`);
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);