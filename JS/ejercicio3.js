const enlace3 = document.getElementById("boton3");

enlace3.addEventListener('click', () => {
    const nombreProductos = prompt("¿Nombre del producto?");
    const costoUnitario = Number(prompt("Costo unitario"));
    const unidades = Number(prompt("Cuantas Unidades"));
    const subtotal = (costoUnitario * unidades);
    const descuento = (subtotal * 0.1)
    const total = (subtotal - descuento)

    document.getElementById("nombreProducto").innerHTML = nombreProductos
    document.getElementById("costoUnitario").innerHTML = costoUnitario
    document.getElementById("unidades").innerHTML = unidades
    document.getElementById("subTotal").innerHTML = "El subtotal es de: " + subtotal
    document.getElementById("descuento").innerHTML = "Su descuento es de: " + descuento
    document.getElementById("total").innerHTML = "EL total de su factura es: " + total
    
});