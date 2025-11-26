<template>
  <form @submit.prevent="enviar">
    <div><label>Nombre</label><input v-model="form.nombre"/><p>{{errores.nombre}}</p></div>
    <div><label>DNI</label><input v-model="form.dni"/><p>{{errores.dni}}</p></div>
    <div><label>Email</label><input v-model="form.email"/><p>{{errores.email}}</p></div>
    <div>
      <label>Curso</label>
      <select v-model="form.curso">
        <option value="">Seleccione</option>
        <option value="DAW">DAW</option>
        <option value="DAM">DAM</option>
      </select>
      <p>{{errores.curso}}</p>
    </div>
    <div><label><input type='checkbox' v-model="form.mayor"/> Mayor</label><p>{{errores.mayor}}</p></div>
    <button>Enviar</button>
  </form>
</template>

<script setup>
import {reactive} from 'vue'
import validators from './utils/validators'

const form=reactive({nombre:'',dni:'',email:'',curso:'',mayor:false})
const errores=reactive({})

const validar=(campo)=>{
  errores[campo]=''
  const r=validators[campo](form[campo])
  if(r!==true) errores[campo]=r
  return r===true
}

const enviar=()=>{
  const campos=Object.keys(form)
  for(const c of campos) if(!validar(c)) return
  console.log(JSON.stringify(form,null,2))
  alert('Enviado: '+JSON.stringify(form))
}
</script>
