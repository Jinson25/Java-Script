const enlace2 = document.getElementById("boton2");

enlace2.addEventListener('click', () => {
    const nombre = prompt("¿Nombre del Trabajdor?");
    const horasTrabajadas = Number(prompt("Ingrese las horas trabajadas"));
    const valorHora = Number(prompt("Ingrese el valor de la hora"));
    const r2 = (horasTrabajadas * valorHora);

    document.getElementById("nombre").innerHTML = nombre
    document.getElementById("horasTrabajadas").innerHTML = horasTrabajadas
    document.getElementById("valorHora").innerHTML = valorHora
    document.getElementById("resultado2").innerHTML = "El trabajador " + nombre + " Debe recibir una remuneracion de : " + r2 + " $ de sueldo ";
});