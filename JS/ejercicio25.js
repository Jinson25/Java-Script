const boton5 = document.getElementById("boton5");
boton5.addEventListener('click', () => {
    var totalLLamadas, tiempoLlamadas, clave;

    clave = Number(prompt("Escoja la clave de la zona a realizar la llamada"));
    tiempoLlamadas = Number(prompt("Ingrese el tiempo que duro la llamada"));

    switch (clave) {
        case 1:
            totalLLamadas = 0.25 * tiempoLlamadas
            document.getElementById('costo').innerHTML = "El costo por Minuto es 0.25 ctvs"
            document.getElementById('zona').innerHTML = "Usted llamo a Estados Unidos"
            break;
        case 2:

            totalLLamadas = 0.15 * tiempoLlamadas
            document.getElementById('costo').innerHTML = "El costo por Minuto es 0.15 ctvs"
            document.getElementById('zona').innerHTML = "Usted llamo a Canada"
            break;
        case 3:

            totalLLamadas = 0.10 * tiempoLlamadas
            document.getElementById('costo').innerHTML = "El costo por Minuto es 0.10 ctvs"
            document.getElementById('zona').innerHTML = "Usted llamo a America del Sur"

            break;
        case 4:

            totalLLamadas = 0.09 * tiempoLlamadas
            document.getElementById('costo').innerHTML = "El costo por Minuto es 0.09 ctvs"
            document.getElementById('zona').innerHTML = "Usted llamo a America central"

            break;
        case 5:

            totalLLamadas = 0.17 * tiempoLlamadas
            document.getElementById('costo').innerHTML = "El costo por Minuto es 0.17 ctvs"
            document.getElementById('zona').innerHTML = "Usted llamo a Mexico"

            break;
        case 6:

            totalLLamadas = 0.55 * tiempoLlamadas
            document.getElementById('costo').innerHTML = "El costo por Minuto es 0.55 ctvs"
            document.getElementById('zona').innerHTML = "Usted llamo a Europa"

            break;
        case 7:

            totalLLamadas = 0.35 * tiempoLlamadas
            document.getElementById('costo').innerHTML = "El costo por Minuto es 0.35 ctvs"
            document.getElementById('zona').innerHTML = "Usted llamo a asia"

            break;
        case 8:

            totalLLamadas = 0.10 * tiempoLlamadas
            document.getElementById('costo').innerHTML = "El costo por Minuto es 0.10 ctvs"
            document.getElementById('zona').innerHTML = "Usted llamo a Africa"
            break;
        case 9:

            totalLLamadas = 0.13 * tiempoLlamadas
            document.getElementById('costo').innerHTML = "El costo por Minuto es 0.13 ctvs"
            document.getElementById('zona').innerHTML = "Usted llamo a Oceania"
            break;
        default:
            document.getElementById('tiempo').innerHTML = "Ingresastes una clave que no existe vuelve a intentarlo"
            break;
    }
    document.getElementById('tiempo').innerHTML = "Tiempo de la llamada fue " + tiempoLlamadas + " minutos"
    document.getElementById('total').innerHTML = "El costo total de la llamada es: $ " + totalLLamadas + " dolares"
})