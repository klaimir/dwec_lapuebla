<script setup>
import { ref, watch } from 'vue'

const id = ref('')
// Usamos ref([]) para poder reasignar el valor fácilmente
const usuarios = ref([{ id: 1, name: "pepe"}]);

watch(id, async (nuevoId) => {
  if (nuevoId) {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users/' + nuevoId);
      if (!respuesta.ok) throw new Error('Error en la red');
      
      const datos = await respuesta.json(); // ¡Importante el await aquí!
      
      // JSONPlaceholder devuelve un OBJETO cuando pides un ID específico, 
      // pero tu v-for espera un ARRAY.
      usuarios.value.push(datos);
    } catch (error) {
      console.error("Hubo un problema:", error);
    }
  }
})
</script>
<template>
  <h2>8. Observadores (watch)</h2>
  <div class="caja">
    <input v-model="id" placeholder="Pregunta un id" />
    <h2>listado de usuarios</h2>
    <ul>
      <li v-for="(usuario, index) in usuarios" :key="usuario.id">
        {{ usuario.id }} - {{ usuario.name }}
      </li>
    </ul>
  </div>
</template>