const enlace18 = document.getElementById("boton18");
enlace18.addEventListener('click', () => {
    numeroMayor = 0;

    for (let i = 1; i <= 10; i++) {
        const numero = Number(prompt("Ingresa el numero :" + i));
        if (numero > numeroMayor) {
            numeroMayor = numero
        }
    }
    document.getElementById("nmayor").innerHTML = "EL numero mayor es:  " + numeroMayor

});