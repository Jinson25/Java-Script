const boton20 = document.getElementById("boton20");
boton20.addEventListener('click', () => {
    var num, c, num1;
    num = prompt("Ingrese un número de 3 dijitos");
    num1 = num;
    c = 0;


    if (num.length == 3) {
        do {
            c = (c * 10) + (num % 10);
            num = Math.trunc(num / 10);
        } while (num > 0);
        document.getElementById('numeror').innerHTML = "El número invertido es: " + c
        if (c == num1) {
            document.getElementById('polindromo').innerHTML = "Si es un número Palíndromo"
        } else {
            document.getElementById('nopolindromo').innerHTML = "No es un número Palíndromo"
        }

        
    } else {

        document.getElementById("error").innerHTML = "EL numero " + num + " no es valido solo debe ser de 3 cifras"
    }
});