class Pokemon{
    //el constructor se ejecuta automaticamente cada vez que creo o instancio un objeto
    constructor(nombreParam, tipoParam, naturalezaParam, numeroParam, pesoParam){
        // clave
        this.nombre = nombreParam;
        this.tipo = tipoParam;
        this.naturaleza = naturalezaParam;
        this.numPokeDex = numeroParam;
        this.peso = pesoParam; 
    }
}

const pikachu = new Pokemon('pikachu','Electrico','timido', 25,  6);
console.log(pikachu);