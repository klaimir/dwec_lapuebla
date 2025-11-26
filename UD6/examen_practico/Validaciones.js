function checkRequired(objeto) {
  const error = document.querySelector("#error-" + objeto.id);
  if (!objeto.value.trim()) {
    objeto.style = "border: 2px solid red";
    error.innerHTML = `El campo ${objeto.name} es obligatorio`;
    return false;
  } else {
    let validado;
    let id = objeto.id;
    //posible switch para elegir que metodo usar para validar directamente si es correcto o no
    switch (id) {
      case "dni":
        validado = validarDni();
        if (!validado) {
          error.innerHTML = `El campo ${objeto.name} no esta bien formateado`;
          objeto.style = "border: 2px solid red";
        } else {
          objeto.style = "";
          error.innerHTML = "";
        }

        break;

      case "email":
        validado = validateEmail(objeto);
        if (!validado) {
          error.innerHTML = `El campo ${objeto.name} no esta bien formateado`;
          objeto.style = "border: 2px solid red";
        } else {
          objeto.style = "";
          error.innerHTML = "";
        }
        break;

      case "telefono":
        validado = validateNumero(objeto);
        if (!validado) {
          error.innerHTML = `El campo ${objeto.name} no esta bien formateado`;
          objeto.style = "border: 2px solid red";
        } else {
          objeto.style = "";
          error.innerHTML = "";
        }
        break;
        default:
            error.innerHTML ="";
            objeto.style="";
    }
    return true;
  }
}

function validateNumero(numero) {
  const expresionTelefono = /^\({1}\+{1}\d{2}\){1}\-{1}\d{9}$/;
  let numeroValidar = numero.value;

  if (expresionTelefono.exec(numeroValidar)) {
    return true;
  }
  return false;
}

function validateEmail(email) {
  const expresionEmail = /^[a-zA-Z\d]{1,}\@{1}[a-zA-Z]{1,}\.[a-zA-Z]{2,3}$/;
  let emailValidar = email.value;

  if (expresionEmail.exec(emailValidar)) {
    return true;
  }
  return false;
}

function validarDni() {
  //en validar antes que nada llamaremos a checkRequired(this) y comprobamos si no esta vacio.
  //una vez comprobado eso pues ya podemos comprobar con la expresion regular.
  //si esta completo pues se vera un mensajito que dira DNI validado
  //tras comprobar con la expresion regular, podemos hacer la operacion si no esta completo.
  //parte dificil es la de añadir ademas una letra al final.
  //podria añadir la letra a un string y setearlo como value de dni.
  let errores = false;

  const dni = document.querySelector("#dni");

  //expresion para validarlo completo.
  const expresionCompleta = /^[0-9]{8}\-{1}[A-HJ-NP-TV-Z]{1}$/;
  //expresion para validarlo sin letra.
  const expresionSinLetra = /^[0-9]{8}\-{1}$/;

  //dependiendo del length del string se pasara por una validacion u otra.
  let contenido = dni.value;

  if (contenido.length <= 8 || contenido.length > 10) {
    const error = document.querySelector("#error-dni");
    error.innerHTML = `Introduzca el formato indicado: 12345678-X`;
    const validado = document.querySelector("#respuesta");
    validado.innerHTML = "";
    return false;
  } else if (contenido.length === 9) {
    if (expresionSinLetra.exec(contenido)) {
      //sacar el guion del string
      let numeros = contenido.replace(/-/g, "");

      let resto = numeros % 23;
      let letra;
      switch (resto) {
        case 0:
          letra = "T";
          break;
        case 1:
          letra = "R";
          break;
        case 2:
          letra = "W";
          break;
        case 3:
          letra = "A";
          break;
        case 4:
          letra = "G";
          break;
        case 5:
          letra = "M";
          break;
        case 6:
          letra = "Y";
          break;
        case 7:
          letra = "F";
          break;
        case 8:
          letra = "P";
          break;
        case 9:
          letra = "D";
          break;
        case 10:
          letra = "X";
          break;
        case 11:
          letra = "B";
          break;
        case 12:
          letra = "N";
          break;
        case 13:
          letra = "J";
          break;
        case 14:
          letra = "Z";
          break;
        case 15:
          letra = "S";
          break;
        case 16:
          letra = "Q";
          break;
        case 17:
          letra = "V";
          break;
        case 18:
          letra = "H";
          break;
        case 19:
          letra = "L";
          break;
        case 20:
          letra = "C";
          break;
        case 21:
          letra = "K";
          break;
        case 22:
          letra = "E";
          break;
      }
      const dni = document.querySelector("#dni");
      dni.value = contenido + letra;
      return true;
    }
    const validado = document.querySelector("#error-dni");
    validado.innerHTML = `Introduzca el formato correcto: 12345678-X`;
    return false;
    //validamos solo numeros y guion.
  } else if (contenido.length === 10) {
    //validamos el dni entero.
    if (expresionCompleta.exec(contenido)) {
      let numeros = contenido.replace(/[-A-HJ-NP-TV-Z]/g, "");
      let resto = numeros % 23;
      let letra;
      switch (resto) {
        case 0:
          letra = "T";
          break;
        case 1:
          letra = "R";
          break;
        case 2:
          letra = "W";
          break;
        case 3:
          letra = "A";
          break;
        case 4:
          letra = "G";
          break;
        case 5:
          letra = "M";
          break;
        case 6:
          letra = "Y";
          break;
        case 7:
          letra = "F";
          break;
        case 8:
          letra = "P";
          break;
        case 9:
          letra = "D";
          break;
        case 10:
          letra = "X";
          break;
        case 11:
          letra = "B";
          break;
        case 12:
          letra = "N";
          break;
        case 13:
          letra = "J";
          break;
        case 14:
          letra = "Z";
          break;
        case 15:
          letra = "S";
          break;
        case 16:
          letra = "Q";
          break;
        case 17:
          letra = "V";
          break;
        case 18:
          letra = "H";
          break;
        case 19:
          letra = "L";
          break;
        case 20:
          letra = "C";
          break;
        case 21:
          letra = "K";
          break;
        case 22:
          letra = "E";
          break;
      }

      const validado = document.querySelector("#respuesta");
      let dniValidar = numeros + "-" + letra;

      if (dniValidar === contenido) {
        validado.innerHTML = `El dni es correcto.`;
        return true;
      } else {
        validado.innerHTML = `El dni es incorrecto.`;
      }

      return false;
    }
    const validado = document.querySelector("#respuesta");
    validado.innerHTML = "";
    const error = document.querySelector("#error-dni");
    error.innerHTML = `Introduce el formato correcto: 12345678-X`;
    return false;
  }
}
