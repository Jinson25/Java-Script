const enlace17 = document.getElementById("boton17");
enlace17.addEventListener('click', () => {
    promedio = 0;

    const numNotas = Number(prompt("Ingresa el numero de notas a promediar:"))
    for (let i = 1; i <= numNotas; i++) {

        const nota = Number(prompt("Ingresa la nota :" + i));
        promedio += nota
    }
    promedio /= numNotas;
    document.getElementById("notas").innerHTML = "Cantidad de notas a promediar es de: " + numNotas
    document.getElementById("promedio").innerHTML = "EL promedio de las, " + numNotas + " notas es de: " + promedio

});