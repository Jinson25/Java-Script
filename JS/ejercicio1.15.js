const enlace15 = document.getElementById("boton15");
enlace15.addEventListener('click', () => {
    pares = 0;
    impares = 0;
    for (let i = 1; i < 11; i++) {
        const num = Number(prompt("Ingresa numero: " + i));

        if (num % 2 == 0) {
            pares += 1;
        } else {
            impares += 1;

        }
    }
    document.getElementById("pares").innerHTML = "Numeros pares de los 10 numeros son: " + pares
    document.getElementById("impares").innerHTML = "Numero impares de los 10 numeros son: " + impares

});