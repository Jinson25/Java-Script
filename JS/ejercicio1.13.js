const boton13 = document.getElementById("boton13");
boton13.addEventListener('click', () => {
    const num0 = Number(prompt("Ingresa el primer numero"));
    const num1 = Number(prompt("Ingresa el segundo numero"));
    const num2 = Number(prompt("Ingresa el tercer numero"));

    if (num0 > num1) {
        if (num0 > num2) {
            document.getElementById("numeromayor").innerHTML = "El numero " + num0 + " es mayor de los tres"
        } else {
            document.getElementById("numeromayor").innerHTML = "El numero " + num2 + " es mayor de los tres"
        }

    } else if (num1 > num0) {
        if (num1 > num2) {
            document.getElementById("numeromayor").innerHTML = "El numero " + num1 + " es mayor de los tres"
        } else {
            document.getElementById("numeromayor").innerHTML = "El numero " + num2 + " es mayor de los tres"
        }

    } else if (num2 > num1) {
        if (num2 > num0) {
            document.getElementById("numeromayor").innerHTML = "El numero " + num2 + " es mayor de los tres"
        } else {
            document.getElementById("numeromayor").innerHTML = "El numero " + num0 + " es mayor de los tres"
        }
    }


    document.getElementById("numero1").innerHTML = "Numero 1:  " + num0
    document.getElementById("numero2").innerHTML = "Numero 2:  " + num1
    document.getElementById("numero3").innerHTML = "Numero 3:  " + num2



});