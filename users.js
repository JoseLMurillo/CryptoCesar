class User {
    #key;
    #username;
    #mesaje;
    #time;
    #mensajeInter;

    constructor (username, key, time) {
        this.#username = username;
        this.#time = time;
        this.#key = key;
        this.#mesaje = [];
        this.#mensajeInter = [];
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

    set mensajeInter (value) {
        this.mensajeInter.push(value);
    }

    /* LA CLASE DEBERIA DE ENCARGARSE DE GUARDAR LOS DATOS, SE GUARDA DENTRO DE UNA LISTA LOS MENSAJES ENCRIPTADOS (ARREGLO DE ARREGLOS) Y RETORNAR EL ULTIMO ELEMENTO */
}