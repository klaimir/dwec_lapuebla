// app.js (Código fuertemente acoplado)

const selectFuente = document.getElementById('source-select');
const contenedorResultado = document.getElementById('resultado');

selectFuente.addEventListener('change', async (event) => {
    const tipo = event.target.value;
    
    // Si vuelve a la opción por defecto, limpiamos
    if (!tipo) {
        contenedorResultado.innerHTML = 'Esperando selección...';
        return;
    }

    contenedorResultado.innerHTML = 'Cargando datos...';

    try {
        let usuarios = [];

        // ❌ MALA PRÁCTICA: Lógica de obtención de datos acoplada al evento (Viola OCP y DIP)
        if (tipo === 'API') {
            const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!respuesta.ok) throw new Error('Error en la red');
            usuarios = await respuesta.json();
            
        } else if (tipo === 'MOCK') {
            // ❌ MALA PRÁCTICA: Datos hardcodeados dentro del controlador (Viola SRP)
            usuarios = [
                { id: 1, name: "Ana García (Mock)", email: "ana@mock.com" },
                { id: 2, name: "Luis Pérez (Mock)", email: "luis@mock.com" }
            ];
        }

        // ❌ MALA PRÁCTICA: Modificación directa del DOM mezclada con la lógica (Viola SRP)
        contenedorResultado.innerHTML = ''; // Limpiamos el "Cargando..."
        
        usuarios.forEach(usuario => {
            const tarjeta = document.createElement('div');
            tarjeta.style.border = "1px solid #ccc";
            tarjeta.style.padding = "10px";
            tarjeta.style.marginBottom = "5px";
            
            tarjeta.innerHTML = `
                <strong>${usuario.name}</strong><br>
                <small>${usuario.email}</small>
            `;
            
            contenedorResultado.appendChild(tarjeta);
        });

    } catch (error) {
        console.error("Error capturado:", error);
        contenedorResultado.innerHTML = `<p style="color:red;">Error al cargar los datos.</p>`;
    }
});