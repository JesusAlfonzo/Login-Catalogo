const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtiene los valores de los campos de entrada
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Obtiene los usuarios almacenados en el almacenamiento local o crea un array vacío si no hay usuarios almacenados
    const Users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica si el usuario y la contraseña son válidos buscando coincidencias en el array de usuarios
    const validUser = Users.find(user => user.email === email && user.password === password);
    if (!validUser) {
        return alert('¡Usuario y/o contraseña incorrectos!'); // Muestra una alerta si el usuario y/o contraseña son incorrectos
    }

    alert(`Bienvenido ${validUser.name}`); // Muestra una alerta de bienvenida con el nombre del usuario válido
    localStorage.setItem('login_success', JSON.stringify(validUser)); // Almacena la información del usuario en el almacenamiento local
    window.location.href = 'index.html'; // Redirige al usuario a la página principal
});