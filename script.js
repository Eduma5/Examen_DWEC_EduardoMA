// ============================================
// DECLARACIÓN DE VARIABLES DE DISTINTOS TIPOS
// ============================================

// String - Cadena de texto
const mensajeBienvenida = "Bienvenido al generador de usuarios";

// Number - Número
let contadorUsuarios = 0;

// Boolean - Valor verdadero/falso
let hayUsuarios = false;

// Array - Listas de datos
const nombres = ["Ana", "Carlos", "María", "Juan", "Laura", "Pedro", "Sofía", "Diego"];
const apellidos = ["García", "Rodríguez", "Martínez", "López", "González", "Pérez"];

// Object - Objeto con configuración
const config = {
    edadMin: 18,
    edadMax: 60
};

// Array que guardará los usuarios
let usuarios = [];

// ============================================
// CLASE USUARIO
// ============================================

// Clase que define un usuario con sus atributos y métodos
class Usuario {
    constructor(nombre, apellido, edad, email, activo, fechaCreacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.activo = activo;
        this.fechaCreacion = fechaCreacion; // Fecha de creación usando Date
        this.id = ++contadorUsuarios; // Operador de incremento
    }

    // Método que retorna una presentación del usuario
    presentar() {
        return "Hola, soy " + this.nombre + " " + this.apellido;
    }

    // Método que retorna el nombre completo
    getNombreCompleto() {
        return this.nombre + " " + this.apellido;
    }
}

// ============================================
// FUNCIONES
// ============================================

// Función que genera un número aleatorio entre min y max
// Usa el objeto Math
function numeroAleatorio(min, max) {
    // Operadores aritméticos: *, +, -
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función que genera un email
// Usa el objeto String y sus métodos
function generarEmail(nombre, apellido) {
    // Método toLowerCase() del objeto String
    let nombreMin = nombre.toLowerCase();
    let apellidoMin = apellido.toLowerCase();
    // Concatenación de strings
    return nombreMin + "." + apellidoMin + "@gmail.com";
}

// Función principal que genera usuarios
// Usa bucles y estructuras condicionales
function generarUsuarios(cantidad) {
    // Estructura condicional if
    if (cantidad <= 0 || cantidad > 20) {
        alert("Introduce un número entre 1 y 20");
        return;
    }

    // Limpiar array anterior
    usuarios = [];
    contadorUsuarios = 0;

    // BUCLE FOR - Generar la cantidad de usuarios solicitada
    for (let i = 0; i < cantidad; i++) {
        // Seleccionar nombre aleatorio del array
        let nombre = nombres[numeroAleatorio(0, nombres.length - 1)];
        let apellido = apellidos[numeroAleatorio(0, apellidos.length - 1)];
        
        // Generar edad aleatoria usando el objeto config
        let edad = numeroAleatorio(config.edadMin, config.edadMax);
        
        // Generar email
        let email = generarEmail(nombre, apellido);
        
        // Generar estado activo/inactivo aleatorio
        // Operador de comparación: > retorna true o false
        let activo = Math.random() > 0.5;
        
        // Crear fecha de creación usando el objeto Date
        let fechaCreacion = new Date();
        
        // Crear nuevo usuario y añadirlo al array
        let nuevoUsuario = new Usuario(nombre, apellido, edad, email, activo, fechaCreacion);
        usuarios.push(nuevoUsuario);
    }

    // Cambiar variable booleana
    hayUsuarios = true;

    // Mostrar las tarjetas
    mostrarTarjetas();
}

// Función que muestra las tarjetas en el DOM
// Genera dinámicamente HTML y modifica propiedades del DOM
function mostrarTarjetas() {
    // Obtener el contenedor usando document
    const contenedor = document.getElementById("contenedor-tarjetas");
    
    // Limpiar contenido anterior
    // Modificación de innerHTML
    contenedor.innerHTML = "";

    // Variable para el bucle while
    let i = 0;

    // BUCLE WHILE - Recorrer el array de usuarios
    while (i < usuarios.length) {
        let usuario = usuarios[i];
        
        // Crear elemento div para la tarjeta
        // Usa document para crear elementos del DOM
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";

        // Variable para el texto de estado activo
        let textoActivo;
        
        // ESTRUCTURA SWITCH - Determinar Si o No según estado
        switch (usuario.activo) {
            case true:
                textoActivo = "Sí";
                break;
            case false:
                textoActivo = "No";
                break;
            default:
                textoActivo = "Desconocido";
        }

        // Formatear la fecha de creación usando métodos del objeto Date
        // Uso de toLocaleDateString para formato español
        let fechaFormateada = usuario.fechaCreacion.toLocaleDateString("es-ES");

        // Construir el HTML de la tarjeta
        // Modificación de innerHTML
        tarjeta.innerHTML = `
            <h2>Usuario ${usuario.id}</h2>
            <p><strong>Edad:</strong> ${usuario.edad} años</p>
            <p><strong>Email:</strong> ${usuario.email}</p>
            <p><strong>Activo:</strong> ${textoActivo}</p>
            <p><strong>Fecha de creación:</strong> ${fechaFormateada}</p>
        `;

        // Añadir tarjeta al contenedor
        contenedor.appendChild(tarjeta);

        // Incrementar contador (operador aritmético)
        i = i + 1;
    }

    // Mostrar información adicional en consola usando forEach
    mostrarInfoConsola();
}

// Función que muestra información en consola
// Usa BUCLE forEach
function mostrarInfoConsola() {
    console.log("=== Usuarios generados ===");
    
    // BUCLE forEach - Recorrer array
    usuarios.forEach(function(usuario, index) {
        // Operador aritmético: suma
        console.log("Usuario " + (index + 1) + ": " + usuario.getNombreCompleto());
    });
    
    // Operador lógico OR (||)
    console.log("Total: " + (usuarios.length || 0) + " usuarios");
}

// ============================================
// DEMOSTRACIÓN DE OPERADORES
// ============================================

// Función que demuestra el uso de operadores
function demostrarOperadores() {
    let a = 10;
    let b = 5;
    
    // Operadores aritméticos
    console.log("Suma: " + (a + b));           // 15
    console.log("Resta: " + (a - b));          // 5
    console.log("Multiplicación: " + (a * b)); // 50
    console.log("División: " + (a / b));       // 2
    console.log("Módulo: " + (a % b));         // 0
    
    // Operadores de comparación
    console.log("a > b: " + (a > b));    // true
    console.log("a < b: " + (a < b));    // false
    console.log("a == b: " + (a == b));  // false
    console.log("a != b: " + (a != b));  // true
    
    // Operadores lógicos
    let x = true;
    let y = false;
    console.log("x && y: " + (x && y)); // false (AND)
    console.log("x || y: " + (x || y)); // true (OR)
    console.log("!x: " + (!x));         // false (NOT)
}

// ============================================
// EVENTOS
// ============================================

// Esperar a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
    console.log(mensajeBienvenida);
    
    // Obtener el botón usando document
    const boton = document.getElementById("generar-btn");
    
    // Añadir evento click al botón
    boton.addEventListener("click", function() {
        // Pedir cantidad con prompt (objeto window)
        let cantidad = prompt("¿Cuántos usuarios quieres generar? (1-20)");
        
        // Convertir string a número
        cantidad = parseInt(cantidad);
        
        // Validación con operador lógico NOT (!)
        if (!cantidad) {
            alert("No has introducido un número válido");
            return;
        }
        
        // Generar usuarios
        generarUsuarios(cantidad);
    });
    
    console.log("Sistema listo. Haz clic en el botón para generar usuarios.");
});
