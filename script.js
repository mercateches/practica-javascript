// Ejercicio 1

// Valor que no va a cambiar → const
const nombreUsuario = "Ana";

// Valor que empieza en 0 y se va a modificar → let
let contadorMensajes = 0;

// Precio de un producto: lo trato como fijo → const
const precioProducto = 249.99;

// Puntaje que puede aumentar → let
let puntajeJuego = 0;

console.log("Nombre de usuario:", nombreUsuario);
console.log("Contador de mensajes:", contadorMensajes);
console.log("Precio del producto:", precioProducto);
console.log("Puntaje del juego:", puntajeJuego);

// Ejercicio 2

// Función que recibe un nombre y retorna un saludo
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

console.log(saludar("Ana"));
console.log(saludar("Luis"));
console.log(saludar("Sofía"));

// Función que recibe un número y retorna su doble
function calcularDoble(numero) {
  return numero * 2;
}

console.log("El doble de 5 es:", calcularDoble(5));
console.log("El doble de -3 es:", calcularDoble(-3));
console.log("El doble de 12.5 es:", calcularDoble(12.5));

// Ejercicio 3

// Array con tres tareas
const tareas0 = ["Estudiar JavaScript", "Hacer ejercicio", "Comprar víveres"];

// Mostrar el array completo
console.log("Tareas:", tareas0);

// Mostrar cuántas tareas hay
console.log("Cantidad de tareas:", tareas0.length);

// Primera y última tarea por índice
console.log("Primera tarea:", tareas0[0]);
console.log("Última tarea:", tareas0[tareas0.length - 1]);

// Agregar una tarea nueva y mostrar el array de nuevo
tareas0.push("Llamar al dentista");
console.log("Tareas después de agregar una:", tareas0);
console.log("Cantidad de tareas ahora:", tareas0.length);

// Ejercicio 4

// Versión con if / else
function clasificarNota(nota) {
  if (nota >= 60) {
    return "Aprobado";
  } else {
    return "Desaprobado";
  }
}

console.log("Nota 85:", clasificarNota(85));
console.log("Nota 60:", clasificarNota(60));
console.log("Nota 59:", clasificarNota(59));
console.log("Nota 0:", clasificarNota(0));
console.log("Nota 100:", clasificarNota(100));

// Versión con operador ternario
const clasificarNotaTernario = (nota) => (nota >= 60 ? "Aprobado" : "Desaprobado");

console.log("Ternario, nota 85:", clasificarNotaTernario(85));
console.log("Ternario, nota 60:", clasificarNotaTernario(60));
console.log("Ternario, nota 59:", clasificarNotaTernario(59));
console.log("Ternario, nota 0:", clasificarNotaTernario(0));

// Ejercicio 5

// Array del Ejercicio 3 (ya con la tarea agregada con push)
const tareas = [
  "Estudiar JavaScript",
  "Hacer ejercicio",
  "Comprar víveres",
  "Llamar al dentista",
];

// 1. Recorrido con bucle for: tenemos acceso al índice
console.log("--- Con for ---");
for (let i = 0; i < tareas.length; i++) {
  console.log(`Tarea ${i}:`, tareas[i]);
}

// 2. Recorrido con forEach: recibimos directamente cada elemento
console.log("--- Con forEach ---");
tareas.forEach((tarea) => {
  console.log(tarea);
});

// Ejercicio 6

// Array del Ejercicio 3 (con la tarea agregada con push)
const tareas2 = [
  "Estudiar JavaScript",
  "Hacer ejercicio",
  "Comprar víveres",
  "Llamar al dentista",
];

// Índice aleatorio entre 0 y tareas.length - 1
const indiceAleatorio = Math.floor(Math.random() * tareas2.length);

console.log("Índice generado:", indiceAleatorio);
console.log("Tarea seleccionada:", tareas2[indiceAleatorio]);