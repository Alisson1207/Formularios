document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); //No permite que el formulario se envie

    let formIsValid = true;
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const edad = document.getElementById('edad');
    const email = document.getElementById('email');
    const aceptarTerminos = document.getElementById('aceptarTerminos');

    // Reiniciar mensajes de error
    document.getElementById('errorNombre').textContent = '';
    document.getElementById('errorApellido').textContent = '';
    document.getElementById('errorEdad').textContent = '';
    document.getElementById('errorEmail').textContent = '';
    document.getElementById('errorTerminos').textContent = '';

    // Validación de campos vacíos
    if (nombre.value.trim() === '') { //.trim: elimina los espacion en blanco al inicio o fin de la cadena
        nombre.classList.add('is-invalid'); //estilo de css que hace que el campo sea invalido
        document.getElementById('errorNombre').textContent = 'El nombre es obligatorio'; //mensaje de error
        formIsValid = false;
    } else {
        nombre.classList.remove('is-invalid'); //quita lo que es el campo vacio en caso de que ya se envie
    }

    if (apellido.value.trim() === '') {
        apellido.classList.add('is-invalid');
        document.getElementById('errorApellido').textContent = 'El apellido es obligatorio';
        formIsValid = false;
    } else {
        apellido.classList.remove('is-invalid');
    }

    if (edad.value.trim() === '') {
        edad.classList.add('is-invalid');
        document.getElementById('errorEdad').textContent = 'La edad es obligatoria';
        formIsValid = false;
    } else {
        edad.classList.remove('is-invalid');

        // Validar si la edad es menor a 18 años
        if (parseInt(edad.value) < 18) {
            alert('La edad ingresada es menor a 18 años.');
        } else {
            edad.classList.remove('is-invalid');
        }
    }

    if (email.value.trim() === '') {
        email.classList.add('is-invalid');
        document.getElementById('errorEmail').textContent = 'El correo electrónico es obligatorio';
        formIsValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    if (!aceptarTerminos.checked) {
        aceptarTerminos.classList.add('is-invalid');
        document.getElementById('errorTerminos').textContent = 'Debe aceptar los términos y condiciones';
        formIsValid = false;
    } else {
        aceptarTerminos.classList.remove('is-invalid');
    }


    // Mostrar nombres y apellidos si el formulario es válido
    if (formIsValid) {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = `Nombre y Apellido: ${nombre.value} ${apellido.value}`;
        resultadoDiv.classList.add('alert', 'alert-success');

        // Limpiar los campos del formulario
        document.getElementById('registroForm').reset();

        // Eliminar las clases 'is-invalid' de los campos del formulario
        nombre.classList.remove('is-invalid');
        apellido.classList.remove('is-invalid');
        edad.classList.remove('is-invalid');
        email.classList.remove('is-invalid');
        aceptarTerminos.classList.remove('is-invalid');
    }
});