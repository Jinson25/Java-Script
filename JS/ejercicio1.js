//Hacer un programa para calcular el promedio de 3 notas, si el
//promedio es menor a 6.95 se lo considera REPROBADO caso contrario Aprobado.

const nota1 = Number(prompt("Ingrese la nota1"));
const nota2 = Number(prompt("Ingrese la nota2"));
const nota3 = Number(prompt("Ingrese la nota3"));
const promedio = (nota1 + nota2 + nota3)/3;

document.getElementById("n1").innerHTML = nota1
document.getElementById("n2").innerHTML = nota2
document.getElementById("n3").innerHTML = nota3
document.getElementById("p").innerHTML = promedio

if (promedio >= 6.95) {
    document.getElementById("salida").innerHTML = "APROBADO";
} else {
    document.getElementById("salida").innerHTML = "REPROBADO";
}
