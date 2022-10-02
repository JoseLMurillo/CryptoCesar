document.getElementById('sendUsers').addEventListener('click', main);

function main() {
    let user1, user2;
    let today = new Date();

    getUserName();

    function getUserName() {
        user1 = new User(document.getElementById('User1').value);
        user2 = new User(document.getElementById('User2').value);
    }

    function gettimeNow() {
        let now = today.toLocaleString();
        return now;
    }

    function codificar(mesaje) {
        mesaje = mesaje.toLowerCase();
        let listaMensaje = [];
        let listaMensajeNumeros = [];
        let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p','q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];

        //VACANO PODER IDENTIFICAR SI ES MAYUSCULA O NO Y COLOCARLA EN EL TEXTO SIN AGERGAR UNA NUEVA LISTA DE MAYUSCULAS
        
        for(let i = 0; i < mesaje.length; i++) {
            console.log(mesaje[i]);
            if(abc.includes(mesaje[i])) {
                listaMensaje.push(abc.indexOf(mesaje[i]));
            }
        }

        console.log(listaMensaje);

        
/* 
        mesaje.forEach(e => {
            
        let l = abc.length; */
        return mesaje;
    }

    function descodificar(mesajeK) {
        return mesajeK;
    }

    function addMessage(user, mesajeK) {
        let j = document.createElement('p');
        j.textContent = `${user}: ${descodificar(mesajeK)}`;;
        let messageContainer = document.getElementById('messageContainer');
        messageContainer.appendChild(j);
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

    console.log(user1.getUserName);
    console.log(user1.getkey);
    //hola
}