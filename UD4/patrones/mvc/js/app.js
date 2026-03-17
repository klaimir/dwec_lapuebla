// app.js - CAPA DE COORDINACIÓN (CONTROLADOR)

import { UserView } from './UserView.js';
import { UserModel } from './UserModel.js';

// Función orquestadora
async function handleUserRegistration() {
    // 1. Pedir el dato a la Vista
    const email = UserView.getEmail();
    
    try {
        // 2. Validar con el Modelo
        UserModel.validateEmail(email);
        
        // 3. Enviar al servidor con el Modelo
        await UserModel.registerUser(email);
        
        // 4. Si todo va bien, ordenar a la Vista que muestre éxito
        UserView.hideError();
        UserView.showSuccess();
        
    } catch (error) {
        // 5. Si algo falla (validación o red), ordenar a la Vista mostrar error
        UserView.showError(error.message);
    }
}

// Inicializar la aplicación uniendo el evento de la vista con la función orquestadora
UserView.bindSubmitEvent(handleUserRegistration);