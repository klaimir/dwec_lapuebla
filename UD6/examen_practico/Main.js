const dni = document.querySelector("#dni");
const nombre = document.querySelector("#nombre");
const apellidos = document.querySelector("#apellidos");
const direccion = document.querySelector("#direccion");
const email = document.querySelector("#email");
const sexo = document.querySelector("#sexo");
const telefono = document.querySelector("#telefono");
const alta = document.querySelector("#alta");
const provincia = document.querySelector("#provincia");
const nacimiento = document.querySelector("#nacimiento");
const edad = document.querySelector("#edad");
const estadistica = document.querySelector("#estadistica");
const deportes = document.querySelector("#deportes");

const registroSocios = new RegistroSocios();

const smr = document.querySelector("#smr");

const formulario = document.querySelector("#socioGym");

dni.focus();
const mostrarSocios = document.querySelector("#socios");

const deportesAlmeria = ["Pesca", "Natacion", "Boxeo"];

const deportesGranada = ["Alpinismo", "Jiu Jitsu"];

const deportesSevilla = ["Hipica"];

nacimiento.addEventListener("change", function (event) {
  event.preventDefault();

  document.getElementById("edad").innerHTML = 0;

  let anio = nacimiento.value;

  let resultado = 2025;
});

provincia.addEventListener("change", function (event) {
  event.preventDefault();

  //limpiamos cada vez que cambia curso
  document.getElementById("deporte").innerHTML = "-Deportes-";

  if (provincia.value === "1") {
    //por cada modulo se añade un nuevo option
    deportesAlmeria.forEach((deporte) => {
      document.getElementById(
        "deporte"
      ).innerHTML += `<option value="${deporte}">${deporte}</option>`;
    });
  } else if (provincia.value === "2") {
    deportesGranada.forEach((deporte) => {
      document.getElementById(
        "deporte"
      ).innerHTML += `<option value="${deporte}">${deporte}</option>`;
    });
  } else if (provincia.value === "3") {
    deportesSevilla.forEach((deporte) => {
      document.getElementById(
        "deporte"
      ).innerHTML += `<option value="${deporte}">${deporte}</option>`;
    });
  }
});

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  /*//proceso de validacion de errores
  if (
    checkRequired(dni) &
    checkRequired(nombre) &
    checkRequired(edad) &
    checkRequired(email) &
    checkRequired(nacimiento) &
    checkRequired(deportes) &
    checkRequired(provincia) &
    checkRequired(alta) &
    checkRequired(direccion) &
    checkRequired(apellidos)
  ) {
    const json = {
      nombre: nombre.value,
      dni: dni.value,
      nacimiento: nacimiento.value,
      email: email.value,
      edad: edad.value,
      alta: alta.value,
      direccion: direccion.value,
      apellidos: apellidos.value,
    };
    
    registroSocios.insertarSocio(json);
    
    limpiarFormulario();
  } else {
    alert("No fusca");
  }
    */
  const json = {
    dni: "eeee",
    email: "otro",
    deporte: "Jiu Jitsu"
  };
  registroSocios.insertarSocio(json);
});

estadistica.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(registroSocios.estadisticas());
});

deportes.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(registroSocios.sociosByDeportes('Jiu Jitsu'));
});


