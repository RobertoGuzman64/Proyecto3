

// PANTALLAS DEL JUEGO

const cambiaPantalla = (siguiente) => {
    let pantallaDeseada = "screen" + siguiente;
    let arrayPantallas = ["screen1","screen2","screen3","screen4"];
    arrayPantallas = arrayPantallas.filter(Valor => !pantallaDeseada.includes(Valor));
    document.getElementById(pantallaDeseada).style.display = "block";
    for (let pantalla of arrayPantallas){
        document.getElementById(pantalla).style.display = "none";
    }
}


// PANTALLA 2 DEL JUEGO

const seleccionarSoldado = (nSoldado) => {
    
    if(equipo1 == ""){
        equipo1 = todosSoldados[nSoldado];
        let soldadoPrimero = document.getElementById(nSoldado);
        let datosSoldado = document.getElementById("data"+ 1);

        //una vez he escogido el coche, invalido el img para que nadie haga onclick sobre él

        soldadoPrimero.onclick = "";
        soldadoPrimero.classList.add("soldadoSeleccionado");

        // datosSoldado.innerHTML = `${equipo1.ataque}`;

    } else if (equipo2 == ""){
        equipo2 = todosSoldados[nSoldado];
        let soldadoSegundo = document.getElementById(nSoldado);
        soldadoSegundo.onclick = "";
        soldadoSegundo.classList.add("soldadoSeleccionado");
        
        //una vez he escogido los dos soldados.........

        setTimeout(()=>{
            cambiaPantalla(3);

            verJuego();

        },500);
    }
}

// PANTALLA 3 DEL JUEGO (LA BATALLA)

// console.log(equipo1,equipo2,"el ganador es....",ganador);

const verJuego = () => {
    console.log(equipo1,equipo2);

    verEquipo1.innerHTML = `<img class="foto" style="width:15em;height:25em" src="img/${equipo1.fotoSoldado}.jpg" alt="primer_soldado"/>`;
    console.log(equipo1);

    // statsTeam1.innerHTML = `<div>${team1.marca}<br>${team1.modelo}<br>${team1.combustible}</div>`;

    verEquipo2.innerHTML = `<img class="foto" style="width:15;height:25em" src="img/${equipo2.fotoSoldado}.jpg" alt"segundo_soldado"/>`;
}














let verEquipo1 = document.getElementById("verSoldado1");
let verEquipo2 = document.getElementById("verSoldado2");