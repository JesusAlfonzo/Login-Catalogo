const signupForm = document.querySelector('#signupForm');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtiene los valores de los campos de entrada
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Obtiene los usuarios almacenados en el almacenamiento local o crea un array vacío si no hay usuarios almacenados
    const Users = JSON.parse(localStorage.getItem('users')) || [];

    // Comprueba si el usuario ya está registrado por su dirección de correo electrónico
    const isUserRegistered = Users.find(user => user.email === email);
    if (isUserRegistered) {
        return alert('¡El usuario ya está registrado!'); // Muestra una alerta si el usuario ya está registrado
    }

    // Agrega un nuevo usuario al array de usuarios
    Users.push({ name: name, email: email, password: password });

    // Almacena el array de usuarios actualizado en el almacenamiento local
    localStorage.setItem('users', JSON.stringify(Users));

    alert('¡Registro Exitoso!'); // Muestra una alerta de registro exitoso
    window.location.href = 'login.html'; // Redirige al usuario a la página de inicio de sesión
});