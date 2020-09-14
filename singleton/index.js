const Parent = require('./Parent');
const More = require('./More');
const Other = require('./Other');

const parent = new Parent().getInstance();
parent.setMessage("first message");
var more = new More("second message");
var other = new Other("three message");

comsole.log("data dummie");
console.log(parent.getConunt())
