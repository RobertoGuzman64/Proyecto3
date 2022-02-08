
// CLASES DE LOS SOLDADOS
class Soldado {
    constructor(nombre, edad, ataque, defensa, fotoSoldado){
        this.nombre = nombre;
        this.edad = edad;
        this.ataque = ataque;
        this.defensa = defensa;
        this.fotoSoldado = fotoSoldado;
        this.vida = 200;
    }
    atacar(){
        return this.vida -= Math.floor(Math.random() * 20);
    }
}


let soldado1 = new Soldado ("Cabo", 40, 150,100,"soldado1")
let soldado2 = new Soldado ("Sargento", 50, 151, 100,"soldado2")
let soldado3 = new Soldado ("Comandante", 45, 149, 100,"soldado3")
let soldado4 = new Soldado ("Coronel", 42, 145, 100,"soldado4")
let soldado5 = new Soldado ("Teniente", 47, 153, 100,"soldado5")
let soldado6 = new Soldado ("Zombie", 105, 148, 100,"soldado6")

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

let ganador = "";
let vida_soldado = 20;
