let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678';

function generar() {

    let numeroDigitado = parseInt(cantidad.value);


    if (numeroDigitado < 8) {
        alert("Debe ingresar un número mayor o igual a 8");
    }

    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];

        password+=caracterAleatorio;
    }

    contrasena.value = password;

}










