const boton2 = document.getElementById("boton2");
boton2.addEventListener('click', () => {
    var numero = Number(prompt("Ingresa un numero"));
    var suma = 0;
    var cont = 0;
    var final = 0;
    var n1 = 10;
    // secuencia dependiendo el numero  
    if ((numero % 2 == 0)) {
        for  (cont = 0; cont <= n1 - 1; cont += 2) {
            final = numero + 1 + cont;
            document.write(final, " + ");
        }
    } else {
        for  (cont = 0; cont <= n1 - 1; cont += 2) {
            final = numero + 1 + cont;
            document.write(final, " + ");
        }
    }
 cont = 0;
    // suma la secuencia1
    while ( (cont < 5)) {
        if (numero % 2 == 0) {
            suma = numero + suma;
         cont = cont + 1;
        }
        numero = numero + 1;
    }
    document.write("Resultado de la suma es: ", suma, '<BR/>');
    document.write("Refrescar la pagina para seguir con los ejercicios");
});
