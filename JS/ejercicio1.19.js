const enlace19 = document.getElementById("boton19"); 
enlace19.addEventListener('click', () => {
var a = new Number();
	var i = new Number();
	var j = new Number();
	var k = new Number();
	var n = new Number();
	var p = new Number();
	var caja = new Number();
	var numdim = new Number();
	numdim = Number(prompt("Escribir en numero de datos a ordenar"));
	var a = new Array(30);
	p = 1;
	for (p=1;p<=numdim;p++) {
		a[p] = Number(prompt("Ingrese el numero " + p));
	}
	for (k=1;k<=numdim;k++) {
		for (j=1;j<=numdim-1;j++) {
			if ((a[j]>a[j+1])) {
				caja = a[j];
				a[j] = a[j+1];
				a[j+1] = caja;
			}
		}
	}
	document.write("Los números en orden ascendente son:",'<BR/>');
	for (i=1;i<=numdim;i++) {
		document.write(a[i],'<BR/>');
	}
	for (k=1;k<=numdim;k++) {
		for (j=1;j<=numdim-1;j++) {
			if ((a[j]<a[j+1])) {
				caja = a[j];
				a[j] = a[j+1];
				a[j+1] = caja;
			}
		}
	}
	document.write("Los números en orden Descendente son:",'<BR/>');
	for (i=1;i<=numdim;i++) {
		document.write(a[i],'<BR/>');
	}
});