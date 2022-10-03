document.getElementById('sendUsers').addEventListener('click', main);

function main() {
    let user1, user2, key;
    let today = new Date();

    getUserName();

    //TOMA LOS NOMBRES DE LOS USUARIOS
    function getUserName() {
        user1 = document.getElementById('User1').value;
        user2 = document.getElementById('User2').value;

        key = Math.floor(Math.random() * 100)

        //VALIDA CAMPOS
        if(user1 != undefined && user2 != undefined){
            user1 = new User(user1, key);
            user2 = new User(user2, key);
        }
        else {
            alert('Debe de ingresar los dos usuario');
        }
    }

    function gettimeNow() {
        let now = today.toLocaleString();
        return now;
    }

    function modulo2(value) {
        let listaDeCodificada = [];
        for (let i = 0; i < value.length; i++) {
        if (value[i] < 0) {

            let expresion = 0;
            let observador = true;
            let contador = 0;

            if (value[i] == -27) {
                value[i] = 0;
                observador = false;
            }

            while (observador == true) {

                contador += 1;

                expresion = value[i] - contador;

                if (expresion % 27 == 0) {
                    console.log(`${expresion} % ${27}`);
                    console.log(contador);
                    value[i] = contador;
                    observador = false;
                }
            }
        }
    }

    let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];

    for (let i = 0; i < value.length; i++) {
        valor = abc[value[i]];
        console.log(valor);
        listaDeCodificada.push(valor);
    }


    console.log(listaDeCodificada);

    return listaDeCodificada;
    }

    function modulo(value) {
        for (let i = 0; i < value.length; i++) {
            if (value[i] > 0) {
                guardia = value[i];
                value[i] = parseInt(value[i]);
                value[i] = value[i] / 27;
                value[i] = parseInt(value[i]);
                value[i] = guardia - (value[i] * 27);
            }
        }

        return value;
    }

    function codificar(mesaje) {
        mesaje = mesaje.toLowerCase();
        let listaMensaje = [];
        let listaCodificada = [];
        let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];

        for (let i = 0; i < mesaje.length; i++) {
            if (abc.includes(mesaje[i])) {
                listaMensaje.push(abc.indexOf(mesaje[i]));
            }
        }

        console.log(listaMensaje);

        for (let i = 0; i < listaMensaje.length; i++) {
            listaMensaje[i] = listaMensaje[i] + user1.getkey;
        }

        console.log(listaMensaje);

        listaCodificada = modulo(listaMensaje);

        /* VACANO PODER IDENTIFICAR SI ES MAYUSCULA O NO Y COLOCARLA EN EL TEXTO SIN AGERGAR UNA NUEVA LISTA DE MAYUSCULAS */
        return listaCodificada;

    }

    function descodificar(mesajeK) {
        console.log(mesajeK);
        let valor;

        for (let i = 0; i < mesajeK.length; i++) {
            mesajeK[i] = mesajeK[i] - user1.getkey;
        }
        //console.log("mensje " + mesajeK);
        mesajeK = modulo2(mesajeK);

        mesajeK = desListar(mesajeK);

        return mesajeK;
    }

    function addMessage(user, mesajeK) {
        let j = document.createElement('p');
        let messageContainer = document.getElementById('messageContainer');

        j.textContent = `${user}: ${descodificar(mesajeK)}`;
        messageContainer.appendChild(j);
    }

    function desListar(value) {
        let elemento = '';
        for(i=0; i< value.length; i++){
            elemento += value[i];
        }

        return elemento;
    }

    document.getElementById('sendMesaje1').addEventListener('click', sendMesaje1);

    function sendMesaje1() {
        mensaje1 = document.getElementById('Mesaje1');
        if (mensaje1.value == '') {
            alert('Por favor ingrese un mensaje');
        } else {
            addMessage(user1.getUserName, codificar(mensaje1.value));
        }
    }

    document.getElementById('sendMesaje2').addEventListener('click', sendMesaje2);

    function sendMesaje2() {
        mensaje2 = document.getElementById('Mesaje2');
        if (mensaje2.value == '') {
            alert('Por favor ingrese un mensaje');
        } else {
            addMessage(user2.getUserName, codificar(mensaje2.value));
        }
    }
}
