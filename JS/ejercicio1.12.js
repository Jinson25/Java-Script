const boton12 = document.getElementById("boton12");
boton12.addEventListener('click', () => {
    const radio = prompt("Ingresa el radio del circulo");
    const perimetro = (2 * 3.1415) * radio;
    const area = 3.1415 * (radio * radio);

    document.getElementById("radio").innerHTML = radio
    document.getElementById("perimetro").innerHTML = "El perimetro del circulo es: " + perimetro
    document.getElementById("area").innerHTML = "EL area del circulo es: " + area
});