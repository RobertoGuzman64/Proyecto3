

class Soldado {
    constructor(nombre, edad, ataque, defensa){
        this.nombre = nombre;
        this.edad = edad;
        this.ataque = ataque;
        this.defensa = defensa;
    }
    atacar(){
        return this.ataque += 10;
    }
    defender(){
        return this.defensa += 5;
    }

}

let soldado1 = new Soldado ("Cabo", 40, 150,100)
let soldado2 = new Soldado ("Sargento", 50, 151, 100)
let soldado3 = new Soldado ("Comandante", 45, 149, 100)
let soldado4 = new Soldado ("Coronel", 42, 145, 100)
let soldado5 = new Soldado ("Teniente", 47, 153, 100)
let soldado6 = new Soldado ("Alférez", 46, 148, 100)

let todosSoldados = {
    1 : soldado1,
    2 : soldado2,
    3 : soldado3,
    4 : soldado4,
    5 : soldado5,
    6 : soldado6,
}

let equipo1 = "";
let equipo2 = "";