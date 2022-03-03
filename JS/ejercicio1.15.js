const enlace15 = document.getElementById("boton15");
enlace15.addEventListener('click', () => {
    for (let i = 1; i < 11; i++) {
        const num = Number(prompt("Ingresa numero: " + i));

        if (num % 2 == 0) {
            pares += 1;
        } else {
            impares += 1;
            
        }
    }
    document.getElementById("pares").innerHTML = pares
    document.getElementById("impares").innerHTML = impares
    

});