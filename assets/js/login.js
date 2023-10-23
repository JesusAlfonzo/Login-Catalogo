// Seleccionamos el formulario de inicio de sesión
const loginForm = document.querySelector('#loginForm');

// Agregamos un evento de escucha al formulario cuando se envía
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitamos que el formulario se envíe de forma predeterminada

    // Obtenemos los valores de email y contraseña ingresados por el usuario
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Obtenemos la lista de usuarios almacenada en el LocalStorage o una lista vacía si no existe
    const Users = JSON.parse(localStorage.getItem('users')) || [];

    // Buscamos un usuario válido que coincida con el email y la contraseña ingresados
    const validUser = Users.find(user => user.email === email && user.password === password);

    // Si no se encuentra un usuario válido, mostramos una alerta de usuario y/o contraseña incorrectos
    if (!validUser) {
        return alert('Usuario y/o contraseña incorrectos!');
    }

    // Si se encuentra un usuario válido, mostramos un mensaje de bienvenida con el nombre del usuario
    alert(`Bienvenido ${validUser.name}`);

    // Almacenamos los datos del usuario en el LocalStorage con la clave 'login_success'
    localStorage.setItem('login_success', JSON.stringify(validUser));

    // Redireccionamos al usuario a la página 'index.html'
    window.location.href = 'index.html';
});