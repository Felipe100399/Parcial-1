document.getElementById("btnConvertir").addEventListener("click", function() {
  const temp = parseFloat(document.getElementById("temp").value);
  const tipo = document.getElementById("tipo").value;
  const resultado = document.getElementById("resultado1");
  const error = document.getElementById("error1");

  resultado.textContent = "";
  error.textContent = "";

  if (isNaN(temp)) {
    error.textContent = "Por favor ingrese un número válido.";
    return;
  }

  let converted;

  if (tipo === "f") {
    converted = (temp * 9/5) + 32;
    resultado.textContent = `${temp} °C = ${converted.toFixed(2)} °F`;
  } else {
    converted = (temp - 32) * 5/9;
    resultado.textContent = `${temp} °F = ${converted.toFixed(2)} °C`;
  }
});