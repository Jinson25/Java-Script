const enlace20 = document.getElementById("boton20");
enlace20.addEventListener('click', () => {
    const n1 = prompt("Ingresa un numero");
    b = n1.length;
    a = 1;
    x = 0;
    if (n1.length == 3) {
        while (a < b) {
            if (String(n1, a, a) !== String(n1, b, b)) {
                x += 1;
            }
            a += 1;
            b -= 1;
        }
        if (x===0) {
            document.getElementById("polindromo").innerHTML = "EL numero " + n1 + " es polindromo"
        } else {
            document.getElementById("polindromo").innerHTML = "EL numero " + n1 + " no es polindromo"
        }
    }else {
        document.getElementById("error").innerHTML = "EL numero " + n1 + " no es valido solo debe ser de tres cifra"
    }


});