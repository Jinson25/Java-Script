const enlaces6 = document.getElementById("boton6");

enlaces6.addEventListener('click', () => {
    const letra = prompt("Ingresa una letra");
    document.getElementById("letra").innerHTML = letra;
    switch (letra) {
        case "a", "A":
            document.getElementById("resultado6").innerHTML = "Es vocal"
            break;
        case "e", "E":
            document.getElementById("resultado6").innerHTML = "Es vocal"
            break;
        case "i", "I":
            document.getElementById("resultado6").innerHTML = "Es vocal"
            break;
        case "o", "U":
            document.getElementById("resultado6").innerHTML = "Es vocal"
            break;
        case "u", "U":
            document.getElementById("resultado6").innerHTML = "Es vocal"
            break;
        default:
            document.getElementById("resultado6").innerHTML = "ES CONCONANTE"
    }

});