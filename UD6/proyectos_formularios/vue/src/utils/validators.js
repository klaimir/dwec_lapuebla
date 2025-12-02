export default {
  nombre: v => v ? true : 'El nombre es obligatorio',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Email no válido',
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
  mayor: v => v === true ? true : 'Debe ser mayor de edad'
};
