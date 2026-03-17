// UserModel.js - CAPA DE LÓGICA Y SERVICIOS (MODELO)

export const UserModel = {
    // Lógica pura de validación
    validateEmail(email) {
        if (!email.includes('@') || email.length < 10) {
            throw new Error('El formato del email es incorrecto');
        }
        return true;
    },
    
    // Capa de Red (Asincronía)
    async registerUser(email) {
        try {
            const response = await fetch('https://api.empresa.com/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email })
            });

            if (!response.ok) {
                throw new Error('Error de conexión con el servidor');
            }
            
            return await response.json();
            
        } catch (error) {
            // Repropagamos el error para que el Controlador decida qué hacer
            throw new Error(error.message || 'Error de red'); 
        }
    }
};