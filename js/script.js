// ======================================
// PRINT.UY
// script.js
// ======================================

const contenedor = document.getElementById("contenedor-productos");

// Mostrar productos
function mostrarProductos(listaProductos) {

    contenedor.innerHTML = "";

    listaProductos.forEach(producto => {

        contenedor.innerHTML += `

        <div class="card-producto">

            <img src="${producto.colores[0].imagen}" alt="${producto.nombre}">

            <div class="info-producto">

                <h3>${producto.nombre}</h3>

                <p class="precio">$${producto.precio}</p>

                <p>${producto.descripcion}</p>

                <a href="producto.html?id=${producto.id}">

                    Ver producto

                </a>

            </div>

        </div>

        `;

    });

}

// Mostrar todos los productos
mostrarProductos(productos);


// ======================================
// FILTROS
// ======================================

const botonesFiltro = document.querySelectorAll(".filtros button");

botonesFiltro.forEach(boton => {

    boton.addEventListener("click", () => {

        botonesFiltro.forEach(btn => btn.classList.remove("activo"));

        boton.classList.add("activo");

        const categoria = boton.textContent;

        if (categoria === "Todos") {

            mostrarProductos(productos);

        } else {

            const categoriasPorFiltro = {
                "Remeras": ["Remeras"],
                "Buzos": ["Buzos"],
                "Uniforme": ["Uniforme"],
                "Tazas": ["Taza", "Tazas"],
                "Accesorios": ["Accesorio", "Accesorios", "Mate", "Regalo"]
            };

            const categoriasAceptadas = categoriasPorFiltro[categoria] || [categoria];
            const filtrados = productos.filter(producto =>
                categoriasAceptadas.includes(producto.categoria)
            );

            mostrarProductos(filtrados);

        }

    });

});