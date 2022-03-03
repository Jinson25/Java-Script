const boton14 = document.getElementById("boton14");
boton14.addEventListener('click', () => {
    const categoria1 = Number(prompt("Ingresa su categoria correspondiente con numero"));
    const sueldo1 = Number(prompt("Ingrese su sueldo"));

    switch (categoria1) {
        case 1:
            const bonificacion = (sueldo1 * 0.10);
            const sueldoTotal = (sueldo1 + bonificacion);
            document.getElementById("bonificacion").innerHTML = "Su sueldo con bonificacion es de: " + sueldoTotal
            
            break;
        case 2:
            const bonificacion2 = sueldo1 * 0.20;
            const sueldoTotal2 = sueldo1 + bonificacion2;
            document.getElementById("bonificacion").innerHTML = "Su sueldo con bonificacion es de: " + sueldoTotal2
            break;
        case 3:
            const bonificacion3 = sueldo1 * 0.30;
            const sueldoTotal3 = sueldo1 + bonificacion3;
            document.getElementById("bonificacion").innerHTML = "Su sueldo con bonificacion es de: " + sueldoTotal3
            break;
        case 4:
            const bonificacion4 = sueldo1 * 0.50;
            const sueldoTotal4 = sueldo1 + bonificacion4;
            document.getElementById("bonificacion").innerHTML = "Su sueldo con bonificacion es de: " + sueldoTotal4
            break;
        default:
            document.getElementById("bonificacion").innerHTML = "Ingresa una opciona correcta"
    
    }


    document.getElementById("sueldo1").innerHTML = "EL sueldo es: " + sueldo1
    
    
});