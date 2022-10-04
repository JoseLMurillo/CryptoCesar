class User {
    #key;
    #username;
    #color;

    constructor (username, key, color) {
        this.#username = username;
        this.#key = key;
        this.#color = color;
    }

    get getkey () {
        return this.#key;
    }

    get getUserName () {
        return this.#username;
    }

    get getColor () {
        return this.#color;
    }
}