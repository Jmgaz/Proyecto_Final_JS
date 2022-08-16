
let contenedorCombos = document.getElementById("contenedor-combos")




async function obtenerCombos(){
    let response = await fetch("https://62e7262f0e5d74566aef7f19.mockapi.io/listaCombos");
    let listaCombos = await response.json()
    listaCombos.forEach(combo => {
        let columna = document.createElement("div");
        columna.className = "col-lg-4 col-md-6 pb-4"
        columna.id = `columna-${combo.id}`
        columna.innerHTML = `
            <div class="card ">
                <img src="../img/${combo.img}.jpg" class="card-img-top" alt="${combo.img}_piezas">
                <div class="card-body text-center">
                    <h5 class="card-title fw-bold">${combo.nombre}</h5>
                    <button class="btn btn-success boton" id="btnCombo${combo.id}"> INGREDIENTES </button>
                </div>
            </div>`
        contenedorCombos.append(columna)
        
    });
    

const idBoton1 = document.querySelector("#btnCombo1");
idBoton1.addEventListener("click", () => {
    Swal.fire({
        title: 'Combo 10',
        imageUrl: '../img/Combo_10.jpg',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Combo 10',
        text: listaCombos[0].ingredientes,
        color: '#48887A',
        background: '#F1F1F1 url(../img/logoBG2.svg)',
        confirmButtonColor: '#48887aad',
    });

})
const idBoton2 = document.querySelector("#btnCombo2");
idBoton2.addEventListener("click", () => {
    Swal.fire({
        title: 'Combo 15',
        imageUrl: '../img/Combo_15.jpg',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Combo 15',
        text: listaCombos[1].ingredientes,
        color: '#48887A',
        background: '#F1F1F1 url(../img/logoBG2.svg)',
        confirmButtonColor: '#48887aad',
    });

})
const idBoton3 = document.querySelector("#btnCombo3");
idBoton3.addEventListener("click", () => {
    Swal.fire({
        title: 'Combo 20',
        imageUrl: '../img/Combo_20.jpg',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Combo 20',
        text: listaCombos[2].ingredientes,
        color: '#48887A',
        background: '#F1F1F1 url(../img/logoBG2.svg)',
        confirmButtonColor: '#48887aad',
    });

})
const idBoton4 = document.querySelector("#btnCombo4");
idBoton4.addEventListener("click", () => {
    Swal.fire({
        title: 'Combo 30',
        imageUrl: '../img/Combo_30.jpg',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Combo 30',
        text: listaCombos[3].ingredientes,
        color: '#48887A',
        background: '#F1F1F1 url(../img/logoBG2.svg)',
        confirmButtonColor: '#48887aad',
    });

})
const idBoton5 = document.querySelector("#btnCombo5");
idBoton5.addEventListener("click", () => {
    Swal.fire({
        title: 'Combo 40',
        imageUrl: '../img/Combo_40.jpg',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Combo 40',
        text: listaCombos[4].ingredientes,
        color: '#48887A',
        background: '#F1F1F1 url(../img/logoBG2.svg)',
        confirmButtonColor: '#48887aad',
    });

})
}
obtenerCombos();


