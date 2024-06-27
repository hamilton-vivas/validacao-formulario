const formulario = document.querySelector('form');
const inputs = document.querySelectorAll('.input');
const campoObrigatorio = document.querySelectorAll('.campo-obrigatorio');

function validarInput(input, index) {
    if (input.value.trim() === '') {
        campoObrigatorio[index].classList.remove('esconder');
        input.classList.remove('preenchido');
        input.classList.add('vazio');
        return false;
    } else {
        campoObrigatorio[index].classList.add('esconder');
        input.classList.remove('vazio');
        input.classList.add('preenchido');
        return true;
    }
}

inputs.forEach(function (input, index) {
    input.addEventListener('input', function () {
        validarInput(input, index);
    });
});

formulario.addEventListener('submit', function (naoEnviarFormulario) {
    let formularioValido = true;

    inputs.forEach(function (input, index) {
        if (!validarInput(input, index)) {
            formularioValido = false;
        }
    });

    if (!formularioValido) {
        naoEnviarFormulario.preventDefault();
    }
});



