function limpiarFormulario() {
  const formulario = document.getElementById("socioGym");
  formulario.reset();
  formulario.style = "";

  document.getElementById("dni").focus();
}
