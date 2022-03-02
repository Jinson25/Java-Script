//– Ingrese dos números y realice una suma con los mismos
const enlace = document.getElementById("boton1");

enlace.addEventListener('click', () => {
    const n1 = Number(prompt("Ingresa un numero"));
    const n2 = Number(prompt("Ingrese otro numero"));
    const suma = (n1 + n2);

    document.getElementById("n1").innerHTML = n1
    document.getElementById("n2").innerHTML = n2
    document.getElementById("sum").innerHTML = suma
});