function calcularDescuento(precio, descuento) {
    return precio - (precio * descuento);
}


function mostrarProducto(nombre, precio) {                                                                    // Función para mostrar el producto y el precio con descuento
    let descuento = 0.30; // 30% de descuento
    let precioConDescuento = calcularDescuento(precio, descuento);

    
    if (precioConDescuento >= 1000) {                                                                          // if para verificar si el precio con descuento es mayor o igual a 1000
        console.log(`El producto ${nombre} tiene un precio mayor o igual a $1000 con descuento.`);
    } else {
        console.log(`El producto ${nombre} tiene un precio menor a $1000 con descuento.`);
    }

    
    console.log(`Producto: ${nombre}`);                                                                        // Muestra en la consola el nombre del producto y su precio original y con descuento
    console.log(`Precio original: $${precio}`);
    console.log(`Precio con 30% de descuento: $${precioConDescuento.toFixed(2)}`);
}


function elegirProducto(producto, precio) {                                                                     // Función para elegir el producto usando un switch
    switch (producto) {
        case 1:
            return mostrarProducto("Producto A", precio);
        case 2:
            return mostrarProducto("Producto B", precio);
        case 3:
            return mostrarProducto("Producto C", precio);
        default:
            return console.log("Producto no encontrado");
    }
}


let productoSeleccionado = parseInt(prompt("Ingresa el número de producto (1, 2 o 3):"));                       // Se pide el numero  de producto al usuario  y su precio usando prompt
let precioIngresado = parseFloat(prompt("Ingresa el precio del producto:"));


elegirProducto(productoSeleccionado, precioIngresado);                                                          // Se llama a la función para mostrar el producto con el precio ingresado por el usuario


//Lo hice simple para poder aplicar lo visto en si mi objetivo enrealidad es hacer una pagina ecommerce