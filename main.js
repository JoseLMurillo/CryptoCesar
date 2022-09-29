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
}