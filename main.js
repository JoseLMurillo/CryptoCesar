document.getElementById('sendUsers').addEventListener('click', main);

function main() {
    let user1, user2;
    let key = Math.floor(Math.random() * 100);
    let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];

    getUserName();

    //TOMA LOS NOMBRES DE LOS USUARIOS
    function getUserName() {
        user1 = document.getElementById('User1').value;
        user2 = document.getElementById('User2').value;

        //VALIDA CAMPOS
        if (user1 != undefined && user2 != undefined) {
            user1 = new User(user1, key, '#0655ff');
            user2 = new User(user2, key, '#01dd55');
        } else {
            alert('Debe de ingresar los dos usuario');
        }
    }

    //FUNCION QUE TOMA LA HORA ACTUAL
    function gettimeNow() {
        let today = new Date();
        let now = today.toLocaleTimeString();
        return now;
    }

    //ENCARGA DE ENCOTRAR EL b DE a CONG b mod n
    function modulo(num, mensajeKey) {

        //ENCUENTRA EL b DE a CONG b mod n CON A POSITIVO
        if (num == 0) {
            for (let i = 0; i < mensajeKey.length; i++) {
                if (mensajeKey[i] > 0) {
                    guardia = mensajeKey[i];
                    mensajeKey[i] = parseInt(mensajeKey[i]);
                    mensajeKey[i] = mensajeKey[i] / 27;
                    mensajeKey[i] = parseInt(mensajeKey[i]);
                    mensajeKey[i] = guardia - (mensajeKey[i] * 27);
                }
            }
            return mensajeKey;
        }

        //ENCARGADA DE ENCOTRAR EL b DE a CONG b mod n CON A NEGATIVO
        if (num == 1) {
            console.log("m "+mensajeKey);
            let listaDeCodificada = [];

            for (let i = 0; i < mensajeKey.length; i++) {
                if (mensajeKey[i] < 0) {

                    let expresion = 0;
                    let observador = true;
                    let contador = 0;

                    if (mensajeKey[i] == -27) {
                        mensajeKey[i] = 0;
                        observador = false;
                    }

                    if(mensajeKey[i] != -27) {
                        while (observador == true) {

                            expresion = mensajeKey[i] - contador;
                            
                            if (expresion % 27 == 0) {
                                console.log(`${expresion} % ${27}`);
                                console.log(contador);
                                mensajeKey[i] = contador;
                                observador = false;
                            }

                            contador += 1;
                        }
                    }
                }
            }

            for (let i = 0; i < mensajeKey.length; i++) {
                valor = abc[mensajeKey[i]];
                console.log(valor);
                listaDeCodificada.push(valor);
            }

            console.log(listaDeCodificada);

            return listaDeCodificada;
        }
    }

    //COVERT LIST TO STRING
    function desListar(value) {
        let elemento = '';
        for (i = 0; i < value.length; i++) {
            elemento += value[i];
        }

        return elemento;
    }

    //DECOFICAR
    function descodificar(mensajeK) {
        console.log(mensajeK);

        //REST KEY
        for (let i = 0; i < mensajeK.length; i++) {
            mensajeK[i] = mensajeK[i] - user1.getkey;
        }

        //RETURN LETRAS
        mensajeK = modulo(1, mensajeK);

        //RETURN STRING FROM A LIST
        mensajeK = desListar(mensajeK);

        return mensajeK;
    }

    //AGREGAR MENSAJE EN PANTALLA
    function addMessage(user, mensajeK) {

        let j = document.createElement('p');
        //CONTENEDOR 
        let messageContainer = document.getElementById('messageContainer');
        //TEXTCONTENT
        j.textContent = `${user.getUserName}: ${descodificar(mensajeK)} [${gettimeNow()}]`;

        j.className = 'parrafo';
        /* 
         * CODICIONAR SI ES EL USUARIO 1 QUE COLOR SE USARA PARA SU CHAT
         */
        j.style.backgroundColor = user.getColor;
        messageContainer.appendChild(j);
    }

    //CODIFICAR
    function codificar(user, mensaje) {
        let listaMensaje = [];
        let listaCodificada = [];

        //MINUSCULAS
        mensaje = mensaje.toLowerCase();
        
        //INDEX TO ABC
        for (let i = 0; i < mensaje.length; i++) {
            if (abc.includes(mensaje[i])) {
                listaMensaje.push(abc.indexOf(mensaje[i]));
            }
        }

        console.log('Index: '+ listaMensaje);

        //SUM KEY
        for (let i = 0; i < listaMensaje.length; i++) {
            listaMensaje[i] = listaMensaje[i] + user.getkey;
        }

        console.log('+Key: '+listaMensaje);

        listaCodificada = modulo(0, listaMensaje);

        /* VACANO PODER IDENTIFICAR SI ES MAYUSCULA O NO Y COLOCARLA EN EL TEXTO SIN AGERGAR UNA NUEVA LISTA DE MAYUSCULAS */
        return listaCodificada;
    }

    document.getElementById('sendMesaje1').addEventListener('click', sendMesaje1);

    function sendMesaje1() {
        mensaje1 = document.getElementById('Mesaje1');
        if (mensaje1.value == '') {
            alert('Por favor ingrese un mensaje');
        } else {
            addMessage(user1, codificar(user1, mensaje1.value));
        }
    }

    document.getElementById('sendMesaje2').addEventListener('click', sendMesaje2);

    function sendMesaje2() {
        mensaje2 = document.getElementById('Mesaje2');
        if (mensaje2.value == '') {
            alert('Por favor ingrese un mensaje');
        } else {
            addMessage(user2, codificar(user2, mensaje2.value));
        }
    }
}