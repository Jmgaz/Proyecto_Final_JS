let productos = [];

let formulario;
let inputNombre;
let inputPrecioCompra;
let tabla;

class Productos {
    constructor(nombre, precioCompra) {
        this.nombre = nombre.toUpperCase();
        this.precioCompra = precioCompra;
    }
}

function inicializarElementos() {
    formulario = document.getElementById("formulario");
    inputNombre = document.getElementById("inputNombreProducto");
    inputPrecioCompra = document.getElementById("inputPrecioCompra");
    tabla = document.getElementById("tablaProductos");
}

function inicializarEventos() {
    formulario.onsubmit = (event) => validarFormulario(event);
}

function validarFormulario(event) {
    event.preventDefault();
    let nombre = inputNombre.value;
    let precioCompra = parseFloat(inputPrecioCompra.value);
    let producto = new Productos(nombre, precioCompra);
    productos.push(producto);
    formulario.reset();

    limpiarTabla();
    agregarProductosTabla();
    almacenarProductosLocalStorage();
}

function agregarProductosTabla() {
    productos.forEach((producto) => {
        let filaTabla = document.createElement("tr");
        filaTabla.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.precioCompra}</td>`;
        tabla.tBodies[0].append(filaTabla);
    });
}

function limpiarTabla() {
    while (tabla.rows.length > 1) {
        tabla.deleteRow(1);
    }
}

function almacenarProductosLocalStorage() {
    localStorage.setItem("listaProductos", JSON.stringify(productos));
}

function obtenerProductosLocalStorage() {
    let productosAlmacenados = localStorage.getItem("listaProductos");
    console.log(typeof productosAlmacenados)
    if (productosAlmacenados !== null) {
        productos = JSON.parse(productosAlmacenados);
    }
}

function agregarIngredientesRoll() {
    for (const ingredientes of productos){
        let opcion = document.createElement("div")
        opcion.id
    }

}


function main() {
    inicializarElementos();
    inicializarEventos();
    obtenerProductosLocalStorage();
    agregarProductosTabla();
}

main();