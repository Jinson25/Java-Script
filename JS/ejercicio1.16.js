const enlace16 = document.getElementById("boton16");
enlace16.addEventListener('click', () => {
    pares = 0;
    impares = 0;

    const numero = Number(prompt("Ingresa un numero:"))
    for (let i = 0; i < numero; i++) {

        if (i % 2 == 0) {
            pares += i;
        } else {
            impares += i;

        }
    }
    document.getElementById("pares").innerHTML = "La suma de los pares es: " + pares
    document.getElementById("impares").innerHTML = "La suma de los impares es: " + impares
    document.getElementById("num").innerHTML = "Numero que ingresastes:  " + numero

});