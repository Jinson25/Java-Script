const enlace4 = document.getElementById("boton4");

enlace4.addEventListener('click', () => {
    const base = Number(prompt("Cual es la base del rectangulo"));
    const altura = Number(prompt("Cual es la altura del rectangulo"));
    const area = (base * altura);
    const perimetro = (2 * base) + (2 * altura)

    document.getElementById("base").innerHTML = base
    document.getElementById("altura").innerHTML = altura
    document.getElementById("area").innerHTML = "El area del rectagulo es de: " + area
    document.getElementById("perimetro").innerHTML = "EL perimetro del rectangulo es: " + perimetro
    
});