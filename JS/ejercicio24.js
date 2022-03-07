const boton4 = document.getElementById("boton4");
boton4.addEventListener('click', () => {
    const n1 = Number(prompt("Ingrese primer número"));
    const n2 = Number(prompt("Ingrese sgundo número"));
    const n3 = Number(prompt("Ingrese tercer número"));
    if ((n1 != n2 && n1 != n3 && n2 != n3)) {
        if ((n1 > n2 && n1 < n3 || n1 > n3 && n1 < n2)) {
            document.getElementById("mitad").innerHTML = "En la mitad esta el número: " + n1
        } else {
            if ((n2 > n1 && n2 < n3 || n2 > n1 && n2 < n3)) {
                document.getElementById("mitad").innerHTML = "En la mitad esta el número: " + n2
            } else {
                document.getElementById("mitad").innerHTML = "En la mitad esta el número: " + n3
            }
        }
    } else {
        alert("Inserte numeros que sean diferentes");
        document.getElementById("mitad").innerHTML = "Ingresa numeros que sean diferentes"
    }
    document.getElementById("n1").innerHTML = n1
    document.getElementById("n2").innerHTML = n2
    document.getElementById("n3").innerHTML = n3
});