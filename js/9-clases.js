class Pokemon{
    #tipo;//propiedad privada
    #naturaleza;
    #numPokeDex;
    //el constructor se ejecuta automaticamente cada vez que creo o instancio un objeto
    constructor(nombreParam, tipoParam, naturalezaParam, numeroParam, pesoParam){
        // clave
        this.nombre = nombreParam; //propiedad publica
        this.#tipo = tipoParam; //propiedad privada
        this.#naturaleza = naturalezaParam;
        this.#numPokeDex = numeroParam;
        this.peso = pesoParam; 
    }
    //propiedades computadas get / set
    get tipo(){
        return this.#tipo;
    }

    set tipo(nuevoTipo){
        this.#tipo = nuevoTipo;
    }
    get naturaleza(){
        return this.#naturaleza;
    }

    set naturaleza(nuevoNaturaleza){
        if(nuevoNaturaleza.length >= 3){
            this.#naturaleza = nuevoNaturaleza;
        }else{
            alert('No puedes agregar una naturaleza menor a 3 caracteres')
        }
    }
    get numPokeDex(){
        return this.#numPokeDex;
    }

    set numPokeDex(nuevoNumPokeDex){
        this.#numPokeDex = nuevoNumPokeDex;
    }
    //agregar metodos
    mostrarDatos(){
     document.write(`<h2>Pokemon: ${this.nombre}</h2>
     <ul>
        <li>Num Pokedex: ${this.numPokeDex}</li>
        <li>Tipo: ${this.tipo}</li>
        <li>Naturaleza: ${this.naturaleza}</li>
        <li>Peso: ${this.peso} kg</li>
     </ul>`)   
    }
}




//crear un objeto o instanciar
const pikachu = new Pokemon('pikachu','Electrico','timido', 25,  6);
console.log(pikachu);

document.write(`<p>Pokemon: ${pikachu.nombre}</p>`)
document.write(`<p>Tipo: ${pikachu.tipo}</p>`)
//modificar una propiedad del objeto
pikachu.tipo = 'Electrico 2';
document.write(`<p>Tipo: ${pikachu.tipo}</p>`)

pikachu.naturaleza = 'miedoso';
console.log(pikachu);

pikachu.mostrarDatos();

const bulbasaur = new Pokemon('bulbasaur','Planta', 'alegre', 1, 5 );

bulbasaur.mostrarDatos();

