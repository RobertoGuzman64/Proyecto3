
const cambiaPantalla = (siguiente) => {
    let pantallaDeseada = "screen" + siguiente;

    let arrayPantallas = ["screen1","screen2","screen3","screen4"];

    arrayPantallas = arrayPantallas.filter(Valor => !pantallaDeseada.includes(Valor));

    document.getElementById(pantallaDeseada).style.display = "block";

    for (let pantalla of arrayPantallas){

        document.getElementById(pantalla).style.display = "none";
    }
}
