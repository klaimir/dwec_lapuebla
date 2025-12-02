import { validateField } from './validaciones.js';
import { getValue } from './funciones.js';

// Campos (y los ids son sus valores)
const campos = ['nombre', 'dni', 'email', 'curso', 'mayor'];

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
