// URL de la API (Tienda Virtual)
const API_URL = 'https://fakestoreapi.com/products?limit=10';
const contenedor = document.getElementById('contenedor-productos');

// Función asíncrona para obtener los datos
async function cargarProductos() {
    try {
        const respuesta = await fetch(API_URL);

        // Verificamos si la respuesta es correcta
        if (!respuesta.ok) throw new Error("Error en la red");

        const datos = await respuesta.json();

        // IMPORTANTE: Este es el objeto que debes capturar para tu PDF
        console.log("Objeto JSON recibido:", datos);

        // Limpiamos el cargando y dibujamos las tarjetas
        contenedor.innerHTML = '';
        dibujarTarjetas(datos);

    } catch (error) {
        console.error("Hubo un error al cargar la API:", error);
        contenedor.innerHTML = `<p>Error al cargar los datos. Revisa la consola.</p>`;
    }
}

// Función para manipular el DOM y generar las tarjetas
function dibujarTarjetas(productos) {
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');

        div.innerHTML = `
            <img src="${producto.image}" alt="${producto.title}">
            <h3>${producto.title}</h3>
            <p>$${producto.price}</p>
        `;

        contenedor.appendChild(div);
    });
}

// Ejecutar la función al cargar la página
cargarProductos();