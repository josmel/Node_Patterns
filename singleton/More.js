
const Parent = require('./Parent');
const parent = new Parent().getInstance();
class More {

    constructor(message) {
        parent.setMessage(message)
    }




}
module.exports = More;