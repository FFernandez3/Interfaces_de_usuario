
btn=document.querySelector('#signUp-btn').addEventListener("click", register)

function register() {
    // Simula un registro exitoso
    // En un caso real, aquí tendrías tu lógica de registro y validaciones
    const overlay=document.querySelector('#overlay');
      const successMessage = document.getElementById('successMessage');
      successMessage.classList.remove('hidden');
      overlay.classList.remove('hidden');

      // Agrega el temporizador
      const timer = setInterval(() => {
        successMessage.classList.add('hidden');
        overlay.classList.add('hidden');
        clearInterval(timer);
      }, 3000);
    
  }
