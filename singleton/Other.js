
const Parent = require('./Parent');
const parent = new Parent().getInstance();
class Other {

    constructor(message) {
        parent.setMessage(message)
    }




}
module.exports = Other;