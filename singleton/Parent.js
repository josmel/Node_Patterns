
class Parents {

    constructor() {
        console.log(`first conect parent`);
        this.conect = [];
    }

    getConunt() {
        return `${this.conect.length} messages`;
    }

    setMessage(msg) {
        this.conect.push(msg);
        console.log(msg);
    }
}

class Singleton {

    constructor() {
        if (!Singleton.instance) {
            console.log(`first conect singleton`);
            Singleton.instance = new Parents();
        }
    }

    getInstance() {
        return Singleton.instance;
    }

}
module.exports = Singleton;