// app.js

let who = ["Mi perro", "Mi hermana", "Mi vecino", "Mi jefe", "El cartero"];
let action = ["se comió", "rompió", "perdió", "tiró", "olvidó"];
let what = ["mi tarea", "mi llave", "mi teléfono", "mis deberes", "mi informe"];
let when = [
  "ayer por la noche",
  "esta mañana",
  "justo antes de salir",
  "mientras dormía",
  "mientras estaba de vacaciones"
];

function generarExcusa() {
  let quien = who[Math.floor(Math.random() * who.length)];
  let accion = action[Math.floor(Math.random() * action.length)];
  let que = what[Math.floor(Math.random() * what.length)];
  let cuando = when[Math.floor(Math.random() * when.length)];

  return `${quien} ${accion} ${que} ${cuando}.`;
}

window.onload = function() {
  let generateButton = document.getElementById("generateButton");
  let excuseElement = document.getElementById("excuse");

  generateButton.addEventListener("click", function() {
    let excusaGenerada = generarExcusa();
    excuseElement.textContent = excusaGenerada;
  });
};
