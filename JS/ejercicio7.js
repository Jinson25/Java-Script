const enlaces7 = document.getElementById("boton7");

enlaces7.addEventListener('click', () => {
    const clave = prompt("Escoja la clave hacia a donde llama:");
    const tiempo = Number(prompt("¿Cuantos minutos duro la llamada?"));
    var total;
    document.getElementById("clave").innerHTML = "La clave escogida es: " + clave;

    switch (clave) {
        case "1":
            total = (0.15 * tiempo);
            document.getElementById("totalPagar").innerHTML = "El total a pagar es de: " + total + " $" 
            break;
        case "2":
            total = (0.14 * tiempo);
            document.getElementById("totalPagar").innerHTML = "El total a pagar es de: " + total + " $" 
            break;
        case "3":
            total = (0.25 * tiempo);
            document.getElementById("totalPagar").innerHTML = "El total a pagar es de: " + total + " $" 
            break;
        case "4":
            total = (0.05 * tiempo);
            document.getElementById("totalPagar").innerHTML = "El total a pagar es de: " + total + " $"
            break;
        case "5":
            total = (0.10 * tiempo);
            document.getElementById("totalPagar").innerHTML = "El total a pagar es de: " + total + " $"
            break;
        case "6":
            total = (0.11 * tiempo);
            document.getElementById("totalPagar").innerHTML = "El total a pagar es de: " + total + " $"
            break;
        case "7":
            total = (0.12 * tiempo);
            document.getElementById("totalPagar").innerHTML = "El total a pagar es de: " + total + " $"
            break;
        case "8":
            total = (0.08 * tiempo);
            document.getElementById("totalPagar").innerHTML = "El total a pagar es de: " + total + " $"
            break;
        default:
            document.getElementById("totalPagar").innerHTML = "Elija la clave correcta"
    }

});