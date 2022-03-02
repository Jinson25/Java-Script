//Problema 9 – La suma de n números naturales, donde n es el numero limite que ingresa el usuario. EJEMPLOMIENTRAS
const enlace9 = document.getElementById("boton9");
enlace9.addEventListener('click', () => {
    const n = Number(prompt("Ingresa un numero limite"));
    cont = 0;
    suma = 0;
    while (cont < n) {
        cont += 1;
        suma += cont;
    }
    document.getElementById("sumaN").innerHTML = "La suma de los numero es:" + suma
    document.getElementById("numero").innerHTML = "EL numero limite es: " + n
});