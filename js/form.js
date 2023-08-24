let formulario = document.getElementById('formulario');

let campoUsuario = document.getElementById('usuario');
let campoContraseña = document.getElementById('contraseña');

campoUsuario.oninput = () => {
    if (campoUsuario.value.length < 4) {
        console.log('Nombre de menos de 4 letras');
        campoUsuario.style.color = 'red';
        campoUsuario.setCustomValidity('El nombre debe tener al menos 4 letras');
    } else {
        campoUsuario.style.color = 'black';
        campoUsuario.setCustomValidity('');
    }
};

campoContraseña.addEventListener('input', () => {
    var password = campoContraseña.value;
    var regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regex.test(password)) {
        document.getElementById('mensaje').innerText = "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número 🚨";
    } else {
        document.getElementById('mensaje').innerText = "";
    }
});

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    console.log("usuario:", usuario);
    console.log("contraseña:", contraseña);


});

formulario.addEventListener('submit', (ev) => {
    var usuario = campoUsuario.value;
    var contraseña = campoContraseña.value;

    if (usuario.length < 4 || !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}/.test(contraseña)) {
        ev.preventDefault();
        alert('El nombre debe tener al menos 4 letras y la contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.');
    } else {
        alert('Formulario válido. Registro exitoso.');
    }
});