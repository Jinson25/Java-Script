const enlace21 = document.getElementById("boton21");
enlace21.addEventListener('click', () => {
    const n1 = prompt("Ingresa un numero");
    b = n1.length;
    a = 1;
    x = 0;
    var y = "";
    if ((n1.length == 4) || (n1.length == 5)) {
        while (a < b) {
            if (y.substring(n1, a, a) !== y.substring(n1, b, b)) {
                x += 1;
            }
            a += 1;
            b -= 1;
        }
        if (x===0) {
            document.getElementById("polindromo1").innerHTML = "EL numero " + n1 + " es polindromo"
        } else {
            document.getElementById("polindromo1").innerHTML = "EL numero " + n1 + " no es polindromo"
        }
    }else {
        document.getElementById("error1").innerHTML = "EL numero " + n1 + " no es valido solo debe ser de 4 o 5 cifra"
    }

});