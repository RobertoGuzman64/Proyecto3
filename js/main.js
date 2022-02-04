

// PANTALLAS
const cambiaPantalla = (siguiente) => {
    let pantallaDeseada = "screen" + siguiente;
    let arrayPantallas = ["screen1","screen2","screen3","screen4"];
    arrayPantallas = arrayPantallas.filter(Valor => !pantallaDeseada.includes(Valor));
    document.getElementById(pantallaDeseada).style.display = "block";
    for (let pantalla of arrayPantallas){
        document.getElementById(pantalla).style.display = "none";
    }
}



const selectSoldado = (nSoldado) => {
    
    if(equipo1 == ""){
        equipo1 = todosSoldados[nSoldado];
        let soldadoPrimero = document.getElementById(nSoldado);
        let datosSoldado = document.getElementById("data"+ 1);
        //una vez he escogido el coche, invalido el img para que nadie haga onclick sobre él
        soldadoPrimero.onclick = "";
        soldadoPrimero.classList.add("soldadoSeleccionado");
        datosSoldado.innerHTML = `${equipo1.marca}`;
       
    } else if (equipo2 == ""){
        equipo2 = todosSoldados[nSoldado];
        let soldadoSegundo = document.getElementById(nSoldado);
        soldadoSegundo.onclick = "";
        soldadoSegundo.classList.add("soldadoSeleccionado");
        //una vez he escogido los dos coches.........
        setTimeout(()=>{
            cambiaPantalla(3);
            // displayGame();
        },500);
    }
}
