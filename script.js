// Clase Producto
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Clase Carrito
class Carrito {
    constructor() {
        this.productos = []; // Arreglo para almacenar productos
    }

    agregarProducto(producto) {
        this.productos.push(producto);
        console.log(`${producto.nombre} agregado al carrito.`);
    }

    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }

    mostrarDetalles() {
        if (this.productos.length === 0) {
            console.log("El carrito está vacío.");
            return "El carrito está vacío.";
        }
        let detalles = "Productos en el carrito:\n";
        this.productos.forEach((prod, index) => {
            detalles += `${index + 1}. ${prod.nombre} - $${prod.precio}\n`;
        });
        detalles += `Total: $${this.calcularTotal()}`;
        console.log(detalles);
        return detalles;
    }

    finalizarCompra() {
        console.log("Compra finalizada.");
        console.log(`Total pagado: $${this.calcularTotal()}`);
        this.productos = []; // Vaciar el carrito
    }
}

// Productos disponibles (actualización con 10 productos)
const productosDisponibles = [
    new Producto("Manzana", 10),
    new Producto("Pan", 20),
    new Producto("Leche", 15),
    new Producto("Huevos", 25),
    new Producto("Arroz", 18),
    new Producto("Frijoles", 22),
    new Producto("Carne", 50),
    new Producto("Pollo", 45),
    new Producto("Pescado", 60),
    new Producto("Zanahoria", 8)
];

// Mostrar productos disponibles
function mostrarProductos() {
    const contenedor = document.getElementById("productosDisponibles");
    contenedor.innerHTML = "<h2>Productos Disponibles:</h2>";
    productosDisponibles.forEach((producto, index) => {
        contenedor.innerHTML += `
            <div style="margin-bottom: 10px;">
                <p>${index + 1}. ${producto.nombre} - $${producto.precio}</p>
                <button onclick="agregarAlCarrito(${index})">Agregar</button>
            </div>
        `;
    });
}

// Carrito del usuario
const miCarrito = new Carrito();

// Función para agregar productos al carrito
function agregarAlCarrito(index) {
    const productoSeleccionado = productosDisponibles[index];
    miCarrito.agregarProducto(productoSeleccionado);
}

// Mostrar detalles del carrito
function mostrarDetalles() {
    const detalles = miCarrito.mostrarDetalles();
    document.getElementById("detallesCarrito").innerText = detalles;
}

// Inicia mostrando los productos
mostrarProductos();
