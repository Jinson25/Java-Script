const boton6 = document.getElementById("boton6");
boton6.addEventListener('click', () => {
    var promedio = new Number();
    const nnotas = Number(prompt("Ingrese las notas a promediar"));
    var i = 1;
    var sumnotas = 0;
    while (i <= nnotas) {
        const notas = Number(prompt("Ingrese la nota número: " + i));
        sumnotas = sumnotas + notas;
        i = i + 1;
    }
    promedio = sumnotas / nnotas;
    document.getElementById("promedio").innerHTML = "El promedio es: " + promedio
    
})