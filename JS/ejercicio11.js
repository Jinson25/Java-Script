const enlace11 = document.getElementById("boton11");
enlace11.addEventListener('click', () => {
    /*const fecha = prompt("INGRESA LA FECHA DD/MM/AAAA");
    D = String.prototype.split(fecha,0,2);
    M = String.prototype.substring(fecha,4,5);
    A = String.prototype.substring(fecha,7,10);
    document.getElementById("dia").innerHTML = D
    document.getElementById("mes").innerHTML = M*/

    const a = Number(prompt("Ingresa un año"));
    const m = Number(prompt("Ingresa el numero del mes"));
    const d = Number(prompt("Ingresa el dia"));

    if ((a >= 1582 & a <= 3000) & (m > 0 & m <= 12) & (d > 0 & d <= 31)) {
        if ((a % 4 == 0) & (a % 100 !== 0) || (a % 400 == 0)) {
            document.getElementById("bisiesto").innerHTML = "Año bisiesto"
            b = 0
        } else {
            document.getElementById("bisiesto").innerHTML = "Año no es bisiesto"
            b = 1
        }
        if (b == 0) {
            switch (m) {
                case "1", "3", "5", "7", "8", "10", "12":
                    if (d >= 1 & d <= 31) {
                        document.getElementById("fecha").innerHTML = "Fecha correcta"
                    } else {
                        document.getElementById("fecha").innerHTML = "Fecha incorrecta"
                    }
                    break;
                case "2":
                    if (d >= 1 & d <= 29) {
                        document.getElementById("fecha").innerHTML = "Fecha correcta"
                    } else {
                        document.getElementById("fecha").innerHTML = "Fecha incorrecta"
                    }
                    break;
                case "4", "6", "9", "11":
                    if (d >= 1 & d <= 30) {
                        document.getElementById("fecha").innerHTML = "Fecha correcta"
                    } else {
                        document.getElementById("fecha").innerHTML = "Fecha incorrecta"
                    }
                    break;
            }
        } else {
            switch (m) {
                case 1, 3, 5, 7, 8, 10, 12:
                    if (d >= 1 & d <= 31) {
                        document.getElementById("fecha").innerHTML = "Fecha correcta"
                    } else {
                        document.getElementById("fecha").innerHTML = "Fecha incorrecta"
                    }
                    break;
                case 2:
                    if (d >= 1 & d <= 28) {
                        document.getElementById("fecha").innerHTML = "Fecha correcta"
                    } else {
                        document.getElementById("fecha").innerHTML = "Fecha incorrecta"
                    }
                    break;
                case 4, 6, 9, 11:
                    if (d >= 1 & d <= 30) {
                        document.getElementById("fecha").innerHTML = "Fecha correcta"
                    } else {
                        document.getElementById("fecha").innerHTML = "Fecha incorrecta"
                    }
                    break;

            }
        }
    } else {
        document.getElementById("error").innerHTML = "Error en la fecha vuelve intentar"
    }

});