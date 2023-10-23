// Seleccionamos el formulario de registro
const signupForm = document.querySelector('#signupForm');

// Agregamos un evento de escucha al formulario cuando se envía
signupForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitamos que el formulario se envíe de forma predeterminada

    // Obtenemos los valores de nombre, email y contraseña ingresados por el usuario
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Obtenemos la lista de usuarios almacenada en el LocalStorage o una lista vacía si no existe
    const Users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificamos si el usuario ya está registrado buscando su email en la lista de usuarios
    const isUserRegistered = Users.find(user => user.email === email);

    // Si el usuario ya está registrado, mostramos una alerta indicando que el usuario ya existe
    if (isUserRegistered) {
        return alert('El usuario ya está registrado!');
    }

    // Si el usuario no está registrado, agregamos los datos del usuario a la lista de usuarios
    Users.push({ name: name, email: email, password: password });

    // Almacenamos la lista actualizada de usuarios en el LocalStorage
    localStorage.setItem('users', JSON.stringify(Users));

    // Mostramos una alerta indicando que el registro fue exitoso
    alert('¡Registro exitoso!');

    // Redireccionamos al usuario a la página de inicio de sesión (login.html)
    window.location.href = 'login.html';
});