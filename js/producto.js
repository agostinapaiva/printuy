// ==========================================
// PRODUCTO.JS
// PRINT.UY
// ==========================================

// Obtener el id desde la URL
const parametros = new URLSearchParams(window.location.search);
const idProducto = Number(parametros.get("id"));

// Buscar el producto
const producto = productos.find(p => p.id === idProducto);

// Si no existe
if (!producto) {

    document.querySelector(".producto").innerHTML = "<h2>Producto no encontrado.</h2>";

} else {

    // Nombre
    document.getElementById("nombreProducto").textContent = producto.nombre;

    // Categoría
    document.getElementById("categoria").textContent = producto.categoria;

    // Precio
    document.getElementById("precioProducto").textContent = `$${producto.precio}`;

    // Descripción
    document.getElementById("descripcionProducto").textContent = producto.descripcion;

    // =========================
    // IMAGEN
    // =========================

    const imagenPrincipal = document.getElementById("imagenPrincipal");

    imagenPrincipal.src = producto.colores[0].imagen;

    // =========================
    // COLORES
    // =========================

    const contenedorColores = document.querySelector(".colores");

    contenedorColores.innerHTML = "";

    producto.colores.forEach((color, index) => {

        const boton = document.createElement("span");

        boton.textContent = color.nombre;

        if(index === 0){
            boton.classList.add("activo");
        }

        boton.addEventListener("click", () => {

            imagenPrincipal.src = color.imagen;

            document.querySelectorAll(".colores span").forEach(span=>{
                span.classList.remove("activo");
            });

            boton.classList.add("activo");

        });

        contenedorColores.appendChild(boton);

    });

    // =========================
    // TALLES
    // =========================

    const contenedorTalles = document.querySelector(".talles");

    contenedorTalles.innerHTML = "";

    if(producto.talles.length > 0){

        producto.talles.forEach(talle=>{

            contenedorTalles.innerHTML += `
                <span>${talle}</span>
            `;

        });

    }else{

        document.querySelector(".talles").style.display="none";

    }

    // =========================
    // TABLA
    // =========================

    const tabla = document.querySelector(".tabla-medidas");

    if(producto.tabla !== ""){

        tabla.innerHTML = `
            <h3>Tabla de medidas</h3>
            <img src="${producto.tabla}" alt="Tabla de medidas">
        `;

    }else{

        tabla.style.display="none";

    }

    // =========================
    // WHATSAPP
    // =========================

    const mensaje = encodeURIComponent(
        `Hola 😊 Quiero consultar por ${producto.nombre}.`
    );

    document.getElementById("botonWhatsapp").href =
        `https://wa.me/59892263435?text=${mensaje}`;

}