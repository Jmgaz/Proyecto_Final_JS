//Acceder a elementos HTML posteriores.
let tablaProductos = document.getElementById("tablaProductos")
let preciosCombos = document.getElementById("preciosCombos")

//Obtener datos de mis productos desde mi Mockapi, y creación de tabla con nombres y precio de cada producto.
async function obtenerCombosTabla(){
    let response = await fetch("https://62e7262f0e5d74566aef7f19.mockapi.io/Productos");
    let listaProductos = await response.json()
    listaProductos.forEach(producto => {
        let filaTabla = document.createElement("tr");
        filaTabla.id = `columna-${producto.id}`
        filaTabla.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>
            <input class="form-check-input" type="checkbox"  name="producto" value="${producto.precio}" id="${producto.nombre}">
            <label class="form-check-label"></label>
        </td>
        `
        tablaProductos.append(filaTabla)
    })
    

    
}
//Función para obtener los precios de los rolls, dependiendo de los ingredientes elegidos, mediante checkbox. La suma no comienza desde 0 ya que cada roll tiene un costo fijo de $105.
function sumarProd(){
    const sumarProductos = document.querySelector('#sumarProductos');
    sumarProductos.addEventListener("click", () => {
        let checkProductos = document.querySelectorAll('input[name ="producto"]:checked');
        let precioTotal = [];
        let nombresProductos = [];
        checkProductos.forEach((checkbox) => {
            precioTotal.push(checkbox.value);
            nombresProductos.push(checkbox.id);
        });
        parseInt(precioTotal);
        let suma = 105;
        for (let i = 0; i < precioTotal.length; i++){
            suma += parseInt(precioTotal[i]);
            
        };
        
        let sumaNombres = ""
        for (let i = 0; i < nombresProductos.length; i++){
            sumaNombres += nombresProductos[i];
        }
        
        Swal.fire({
            title: sumaNombres,
            text: suma,
            color: '#48887A',
            background: '#F1F1F1 url(../img/logoBG2.svg)',
            confirmButtonColor: '#48887aad'
            
        });
        
        //Agregar, mediante innerText, los ingredientes elegidos, y el precio total del roll.
        let comboNuevo = document.createElement("h2")
        comboNuevo.innerText = sumaNombres
        let precioNuevo = document.createElement("h3")
        precioNuevo.innerText = suma
        preciosCombos.append(comboNuevo);
        preciosCombos.append(precioNuevo);


    });

}

function main(){
    obtenerCombosTabla();
    sumarProd();
}

main();