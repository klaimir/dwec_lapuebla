// UserView.js - CAPA DE PRESENTACIÓN (VISTA)

// 1. Selección de nodos (Privado para este módulo)
const form = document.getElementById('register-form');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');

// 2. Exportamos un objeto con las acciones visuales
export const UserView = {
    getEmail() {
        return emailInput.value;
    },
    showError(message) {
        errorMsg.textContent = message;
        errorMsg.style.display = 'block';
    },
    hideError() {
        errorMsg.style.display = 'none';
    },
    showSuccess() {
        form.reset();
        alert('¡Usuario registrado con éxito!');
    },
    // El controlador inyectará aquí qué debe pasar al hacer submit
    bindSubmitEvent(handler) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            handler(); // Llama a la función del controlador
        });
    }
};