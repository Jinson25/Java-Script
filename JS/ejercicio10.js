const enlace10 = document.getElementById("boton10");
enlace10.addEventListener('click', () => {
    const num = Number(prompt("Ingresa un numero limite"));
    cont = 0;
    suma = 0;
    do {
        cont += 1;
        suma += cont;
    } while (cont < num);

    document.getElementById("sumaN10").innerHTML = "La suma de los numero es:" + suma
    document.getElementById("numero10").innerHTML = "EL numero limite es: " + num
});