// Función para validar la contraseña y los requisitos
function validarContrasena() {
    const contrasena = document.getElementById('contrasena').value;
    const confirmarContrasena = document.getElementById('confirmar-contrasena').value;

    // Requisitos
    const requisito1 = document.getElementById('requisito1');
    const requisito2 = document.getElementById('requisito2');
    const requisito3 = document.getElementById('requisito3');
    const requisito4 = document.getElementById('requisito4');
    const requisito5 = document.getElementById('requisito5');

    // Círculos para cada requisito
    const circulo1 = document.getElementById('circulo1');
    const circulo2 = document.getElementById('circulo2');
    const circulo3 = document.getElementById('circulo3');
    const circulo4 = document.getElementById('circulo4');
    const circulo5 = document.getElementById('circulo5');

    // Validaciones
    circulo1.style.backgroundColor = contrasena.length >= 8 ? 'green' : 'red';
    circulo2.style.backgroundColor = /[A-Z]/.test(contrasena) && /[a-z]/.test(contrasena) ? 'green' : 'red';
    circulo3.style.backgroundColor = /\d/.test(contrasena) ? 'green' : 'red';
    circulo4.style.backgroundColor = /[!@#$%^&*(),.?":{}|<>]/.test(contrasena) ? 'green' : 'red';
    circulo5.style.backgroundColor = contrasena === confirmarContrasena ? 'green' : 'red';

    // Verifica si se cumplen todos los requisitos
    if (
        contrasena.length >= 8 &&
        /[A-Z]/.test(contrasena) &&
        /[a-z]/.test(contrasena) &&
        /\d/.test(contrasena) &&
        /[!@#$%^&*(),.?":{}|<>]/.test(contrasena) &&
        contrasena === confirmarContrasena
    ) {
        return true; // Todos los requisitos son cumplidos
    }
}

document.getElementById('btn-login').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contraseña').value;
    const mensaje = document.getElementById('mensaje');

    // Simulación de la verificación de usuario y contraseña
    // Cambia esto según tu lógica real
    if (usuario === 'usuarioIncorrecto' || contrasena === 'contrasenaIncorrecta') {
        mensaje.textContent = 'Usuario o contraseña incorrectos'; // Mensaje de error
        mensaje.style.display = 'block'; // Muestra el mensaje
    } else {
        mensaje.style.display = 'none'; // Oculta el mensaje si las credenciales son correctas
        // Aquí va la lógica para redirigir al usuario a la página principal
        window.location.href = 'index.html'; // Cambia esto según tu lógica
    }
});