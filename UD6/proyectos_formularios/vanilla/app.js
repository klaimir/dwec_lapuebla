// Campos (y los ids son sus valores)
const campos = ['nombre', 'dni', 'email', 'curso', 'mayor'];

// Funciones auxiliares
function getValue(id) {
  const el = document.getElementById(id);
  if (el.type === 'checkbox') return el.checked;
  return el.value.trim();
}

function showError(id, msg) {
  document.getElementById(id).classList.add('error');
  document.getElementById('error-' + id).textContent = msg;
}

function clearError(id) {
  document.getElementById(id).classList.remove('error');
  document.getElementById('error-' + id).textContent = '';
}

// Validadores modulares
const validators = {
  nombre: v => v ? true : 'El nombre es obligatorio',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? true : 'Email no válido',
  dni: v => {
    if (!v.trim()) {
      return 'DNI es obligatorio';
    } else if (!/^\d{8}[A-Za-z]$/.test(v)) {
      return 'DNI formato inválido';
    } else if (!('TRWAGMYFPDXBNJZSQVHLCKE'[v.substring(0, 8) % 23] === v[8].toUpperCase())) {
      return 'Letra incorrecta';
    }
    return true;
  },
  curso: v => v ? true : 'Seleccione curso',
  mayor: v => v === true ? true : 'Debe confirmar la mayoría de edad'
};

// Validación de un campo genérico
function validateField(id) {
  const val = getValue(id);
  clearError(id);
  // La validación sólo devuelve true en caso afirmativo o una cadena de caracteres
  // con el mensaje de error en caso contrario. Así podemos tener mensajes personalizados
  // para cada situación
  const result = validators[id](val);
  if (result !== true) { showError(id, result); return false; }
  return true;
}

// Manejo de eventos para validar al perder el foco
campos.forEach(id => {
  document.getElementById(id).addEventListener('blur', () => validateField(id));
});

// Manejo de eventos para validar formulario
document.getElementById('formulario').addEventListener('submit', e => {
  e.preventDefault();
  // Validaciones 
  for (const c of campos) {
    if (!validateField(c)) return;
  }
  // Empaquetamiento genérico de resultados
  const data = {};
  campos.forEach(c => data[c] = getValue(c));
  console.log(JSON.stringify(data, null, 2));
  alert('Enviado: ' + JSON.stringify(data));
  // A partir de aquí hacemos lo que queramos con los datos...

});
