const boton7= document.getElementById("boton7");
boton7.addEventListener('click', () => {
    var num, c, num1;
    num = Number(prompt("Ingrese un número"));
    num1 = num;
    c = 0;

    do {
        c = (c * 10) + (num % 10);
        num = Math.trunc(num / 10);
    } while (num > 0);
    document.getElementById('invertido').innerHTML = "El número invertido es: " + c
    if (c == num1) {
        document.getElementById('polindromo').innerHTML = "Si es un número Palíndromo"
    } else {
        document.getElementById('polindromo').innerHTML = "No es un número Palíndromo"
    }
    
});