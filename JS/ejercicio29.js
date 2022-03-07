var acumulador = new String();
var cont = new Number();
var i = new Number();
var j = new Number();
var k = new Number();
var m = new Number();

const num = Number(prompt("Ingrese un numero"));
if (num < 3) {
    alert("No se puede ejecutar con números menores a 3 por favor vuelva a ingresar un número");
}
acumulador = "";
cont = num;
i = 0;
j = 0;
for (i = 1; i <= 4; i++) {
    acumulador = " ";
    for (j = 1; j <= cont; j++) {
        acumulador = acumulador + " * ";
    }
    cont = cont - 1;
    document.write(acumulador, '<BR/>');
}
cont = cont + 1;
for (k = 1; k <= 3; k++) {
    acumulador = " ";
    cont = cont + 1;
    for (m = 1; m <= cont; m++) {
        acumulador = acumulador + " * ";
    }
    document.write(acumulador, '<BR/>');
}