const enlace19 = document.getElementById("boton19");
enlace19.addEventListener('click', () => {
    const numero1 = prompt("Ingresa un numero a ordenar:");
    const numero2 = prompt("Ingresa el segundo numero:");
    const numero3 = prompt("Ingresa el tercer numero");

    if (numero1 > numero2) {

        if (numero1 > numero3) {
            const  nmayor1 = "Numero 1 es mayor" + numero1
        } else if ( numero2 > numero3) {
            const nmayor2 = "Numero 2 es mayor a numero 3" + numero2
        }
        document.getElementById("descendente").innerHTML = "La secuencia decendete es: " + numero1 +">"+ numero2 +">"+ numero3

    } 

    
});