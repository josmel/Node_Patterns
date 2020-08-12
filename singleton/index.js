const parent = require('./Parent');
const More = require('./More');
const Other = require('./Other');

parent.setMessage("sssss");
var more = new More("sssss");
var other = new Other("wwww");


console.log(parent.getConunt())