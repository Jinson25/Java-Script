const enlace21 = document.getElementById("boton21"); 
boton21.addEventListener('click', () => {
    var num, c, num1;
    num = prompt("Ingrese un número de 3 dijitos");
    num1 = num;
    c = 0;


    if (num.length == 4 || num.length == 5) {
        do {
            c = (c * 10) + (num % 10);
            num = Math.trunc(num / 10);
        } while (num > 0);
        document.getElementById('numa').innerHTML = "El número invertido es: " + c
        if (c == num1) {
            document.getElementById('polindromo1').innerHTML = "Si es un número Palíndromo"
        } else {
            document.getElementById('polindromo1').innerHTML = "No es un número Palíndromo"
        }

        
    } else {

        document.getElementById("error1").innerHTML = "EL numero " + num + " no es valido solo debe ser de 4 y 5 cifras"
    }

});