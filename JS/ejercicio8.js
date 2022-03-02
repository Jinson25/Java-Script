const enlace8 = document.getElementById("boton8");
enlace8.addEventListener('click', () => {
    const nombre = prompt("Ingresa el nombre del estudiante");
    const nota = parseFloat(prompt("Ingresa nota1"));
    const nota1 = parseFloat(prompt("Ingresa la nota2"));
    const r = parseFloat(nota + nota1)/2;
    document.getElementById("nombre").innerHTML = "Estudiante " + nombre
    document.getElementById("nota").innerHTML = "Tiene como nota " + r
     if (r >= 0 & r <=2) {
         document.getElementById("resultado").innerHTML = "El estudiante necesita reforzamiento :("

     } else if (r >= 3 & r <= 4){
         document.getElementById("resultado").innerHTML = "EL estudiante esta desaprobado"

     } else if (r >= 5 & r <= 7) {
         document.getElementById("resultado").innerHTML = "EL estudiante esta aprobado :D "

     } else if (r >= 8 & r <= 9 ) {
         document.getElementById("resultado").innerHTML = "EL estudiante tiene un promedio EXCELENTE"

     } else if(r == 10 ) {
         document.getElementById("resultado").innerHTML = "EL estaudiante esta BECADO"

     } else {
         document.getElementById("resultado").innerHTML = "Nota no valida vuelve a ingresar"
     }
});