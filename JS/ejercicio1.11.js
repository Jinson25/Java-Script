const boton11 = document.getElementById("boton11");
boton11.addEventListener('click', () => {
    const aprobados = Number(prompt("Ingresa el numero total de estudiantes aprobados"));
    const reprobados = Number(prompt("Ingresa el numero total de estudiantes reprobados"));
    const total = parseFloat(aprobados + reprobados)
    const a1 = (aprobados * 100) / total;
    const r1 = (reprobados * 100) / total;
    document.getElementById("total").innerHTML = "Total de estudiantes es: " + total
    document.getElementById("aprobados").innerHTML = "EL porcentaje de aprobados es de: " + a1 + "%"
    document.getElementById("reprobados").innerHTML = "EL porcentaje de reprobados es de: " + r1 + "%"
});