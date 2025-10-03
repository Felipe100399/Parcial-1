document.getElementById("btnCalcular").addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const sexo = document.getElementById("sexo").value;

  const resultado = document.getElementById("resultado2");
  const error = document.getElementById("error2");

  // limpiar mensajes previos
  resultado.textContent = "";
  error.textContent = "";

  // validaciones
  if (!nombre || isNaN(edad) || isNaN(peso) || isNaN(altura) || edad <= 0 || peso <= 0 || altura <= 0) {
    error.textContent = "⚠️ Todos los campos deben estar completos y válidos.";
    return;
  }

  let tmb;

  if (sexo === "hombre") {
    tmb = 10 * peso + 6.25 * altura - 5 * edad + 5;
  } else {
    tmb = 10 * peso + 6.25 * altura - 5 * edad - 161;
  }

  resultado.textContent = `👋 Hola ${nombre}, tu TMB es ${tmb.toFixed(2)} calorías/día.`;
});