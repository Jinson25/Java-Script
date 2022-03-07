const boton3 = document.getElementById("boton3");
boton3.addEventListener('click', () => {
    var numero = new Number();
	document.write("Numeros  multiplos de dos y tres",'<BR/>');
	for (numero=1;numero<=100;numero++) {
		if (numero%2==0 || numero%3==0) {
			document.write(numero,'<BR/>');
		}
	}
    document.write("Refresca la pagina para continuar");
});