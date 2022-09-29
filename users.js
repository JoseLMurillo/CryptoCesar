class User {
    #key;
    #username;
    #mesaje;
    #time;

    constructor (username, time ,key) {
        this.#username = username;
        this.#time = time;
        this.#key = key || Math.floor(Math.random() * 100);;
        this.#mesaje = [];
    }

    get getkey () {
        return this.#key;
    }

    get getUserName () {
        return this.#username;
    }

    set mesaje (value){
        this.mesaje.push(value);
    } 

    get mesaje () {
        return this.#mesaje;
    }

    
}