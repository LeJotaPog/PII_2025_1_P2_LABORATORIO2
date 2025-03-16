let productos = [];

function agregarProducto() {
    let id = document.getElementById("productoId").value;
    let nombre = document.getElementById("productoNombre").value;
    let precio = parseFloat(document.getElementById("productoPrecio").value);
    let cantidad = parseInt(document.getElementById("productoCantidad").value);

    if (!id || !nombre || isNaN(precio) || isNaN(cantidad)) {
        alert("Por favor, llena todos los campos.");
        return;
    }

    let subtotal = precio * cantidad;
    productos.push({ id, nombre, precio, cantidad, subtotal });

    actualizarTabla();
    actualizarTotales();
}

function actualizarTabla() {
    let tabla = document.getElementById("tablaProductos");
    tabla.innerHTML = "";
    
    productos.forEach((producto, index) => {
        let fila = `<tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio.toFixed(2)}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.subtotal.toFixed(2)}</td>
        </tr>`;
        tabla.innerHTML += fila;
    });
}

function actualizarTotales() {
    let subtotal = productos.reduce((sum, prod) => sum + prod.subtotal, 0);
    let descuento = subtotal * 0.10;
    let isv = subtotal * 0.15;
    let totalPagar = subtotal - descuento + isv;

    document.getElementById("subtotal").innerText = subtotal.toFixed(2);
    document.getElementById("descuento").innerText = descuento.toFixed(2);
    document.getElementById("isv").innerText = isv.toFixed(2);
    document.getElementById("totalPagar").innerText = totalPagar.toFixed(2);
}
