document.getElementById('sendUsers').addEventListener('click', main);

function main(){
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

    document.getElementById('sendMesaje1').addEventListener('click', sendMesaje1);

    function sendMesaje1() {
        user1.setTime = gettimeNow();
        user1.setMesaje = document.getElementById('').value;

    }

    document.getElementById('sendMesaje2').addEventListener('click', sendMesaje2);

    function sendMesaje1() {
        user1 = document.getElementById('User1').value;
    }
 
    


    
 

    console.log(usuario1.getUserName);
    console.log(usuario1.getkey);

    function encryptar () {
        lista = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

        //como saber la posicion del elemento x
    }

}
