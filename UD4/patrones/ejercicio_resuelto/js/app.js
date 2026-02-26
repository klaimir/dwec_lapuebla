// app.js (Código fuertemente acoplado)
import { UsersFactory } from "./UsersFactory.js";

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

        // Factoría
        const users = UsersFactory.crear(tipo);
        // Llamada al objeto devuelto por la factoría
        usuarios = await users.consultar();

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