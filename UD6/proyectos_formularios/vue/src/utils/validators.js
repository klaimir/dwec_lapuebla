export default {
  nombre:v=>v?true:'El nombre es obligatorio',
  email:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)||'Email no válido',
  dni:v=>{/^\d{8}[A-Za-z]$/.test(v)
      && 'TRWAGMYFPDXBNJZSQVHLCKE'[v.substring(0,8)%23]===v[8].toUpperCase()
      || 'DNI inválido'},
  curso:v=>v?true:'Seleccione curso',
  mayor:v=>v===true?true:'Debe ser mayor de edad'
};
