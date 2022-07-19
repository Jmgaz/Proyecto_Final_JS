

const listaRolls = [
    { id: 1, cantidad: 8, ingredientes: "Kani Kama, Omelette, Queso", precio: 500 },
    { id: 2, cantidad: 8, ingredientes: "Kani Kama, Palta, Queso", precio: 544 },
    { id: 3, cantidad: 8, ingredientes: "Kani Kama, Omelette, Palta, Queso", precio: 585 },
    { id: 4, cantidad: 8, ingredientes: "Salmón ahumado, Omelette, Queso", precio: 997 },
    { id: 5, cantidad: 8, ingredientes: "Salmón ahumado, Palta, Queso", precio: 1041 },
    { id: 6, cantidad: 8, ingredientes: "Salmón ahumado, Omelette, Palta, Queso", precio: 1082 },
    { id: 7, cantidad: 8, ingredientes: "Langostinos, Omelette, Queso", precio: 704 },
    { id: 8, cantidad: 8, ingredientes: "Langostinos, Palta, Queso", precio: 749 },
    { id: 9, cantidad: 8, ingredientes: "Langostinos, Omelette, Palta, Queso", precio: 789 },
    { id: 10, cantidad: 1, ingredientes: "Nigiris de Salmón ahumado", precio: 0 },

];

const listaCombos = [
    { 
        id:1,
        nombre: "10 PIEZAS",
        rolls: listaRolls[0].cantidad/2 + " piezas de " + listaRolls[0].ingredientes + " - " + listaRolls[7].cantidad/2 + " piezas de " + listaRolls[7].ingredientes + " - " + listaRolls[9].cantidad*2 + " " + listaRolls[9].ingredientes,
        precio: 1000,
        img: "Combo_10"
    },
    { 
        id:2,
        nombre: "15 PIEZAS",
        rolls: listaRolls[0].cantidad/2 + " piezas de " + listaRolls[0].ingredientes + " - " + listaRolls[7].cantidad/2 + " piezas de " + listaRolls[7].ingredientes + " - " + listaRolls[3].cantidad/2 + " piezas de " + listaRolls[3].ingredientes + " - " + listaRolls[9].cantidad*3 + " " + listaRolls[9].ingredientes,
        precio: 1500,
        img: "Combo_15"
    },
    { 
        id:3,
        nombre: "20 PIEZAS",
        rolls: listaRolls[0].cantidad/2 + " piezas de " + listaRolls[0].ingredientes + " - " + listaRolls[7].cantidad/2 + " piezas de " + listaRolls[7].ingredientes + " - " + listaRolls[3].cantidad/2 + " piezas de " + listaRolls[3].ingredientes + " - "+ listaRolls[2].cantidad/2 + " piezas de " + listaRolls[2].ingredientes + " - " + listaRolls[9].cantidad*4 + " " + listaRolls[9].ingredientes,
        precio: 2000,
        img: "Combo_20"
    },
    { 
        id:4,
        nombre: "30 PIEZAS",
        rolls: listaRolls[0].cantidad/2 + " piezas de " + listaRolls[0].ingredientes + " - " + listaRolls[7].cantidad/2 + " piezas de " + listaRolls[7].ingredientes + " - " +listaRolls[3].cantidad/2 + " piezas de " + listaRolls[3].ingredientes + " - " + listaRolls[2].cantidad/2 + " piezas de " + listaRolls[2].ingredientes + " - " + listaRolls[8].cantidad/2 + " piezas de " + listaRolls[8].ingredientes + " - " + listaRolls[4].cantidad/2 + " piezas de " + listaRolls[4].ingredientes + " - " + listaRolls[9].cantidad*6 + " " + listaRolls[9].ingredientes,
        precio: 3000,
        img: "Combo_30"
    },
    { 
        id:5,
        nombre: "40 PIEZAS",
        rolls: listaRolls[0].cantidad + " piezas de " + listaRolls[0].ingredientes + " - " +
        listaRolls[7].cantidad + " piezas de " + listaRolls[7].ingredientes + " - " +
        listaRolls[3].cantidad/2 + " piezas de " + listaRolls[3].ingredientes + " - " +
        listaRolls[2].cantidad/2 + " piezas de " + listaRolls[2].ingredientes + " - " +
        listaRolls[8].cantidad/2 + " piezas de " + listaRolls[8].ingredientes + " - " + listaRolls[4].cantidad/2 + " piezas de " + listaRolls[4].ingredientes + " - " +
        listaRolls[9].cantidad*8 + " " + listaRolls[9].ingredientes,
        precio: 4000,
        img: "Combo_40"
    }
]

let contenedorCombos = document.getElementById("contenedor-combos")

for(const combo of listaCombos){
    let columna = document.createElement("div");
    columna.className = "col-lg-4 col-md-6 pb-4"
    columna.id = `columna-${combo.id}`
    columna.innerHTML = `
        <div class="card ">
            <img src="../img/${combo.img}.jpg" class="card-img-top" alt="${combo.img}_piezas">
            <div class="card-body text-center">
                <h5 class="card-title fw-bold">${combo.nombre}</h5>
                <p class="card-text">${combo.rolls}</p>
            </div>
        </div>`
    
contenedorCombos.append(columna)
}

