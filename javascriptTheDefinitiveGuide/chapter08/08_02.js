var utils0801  = require('./08_01.js')
// 函数调用

utils0801.printProps({x:1})
const total = utils0801.distance(0,0,2,1) +  utils0801.distance(2,1,3,4)
console.log(total)

let probal = utils0801.factorial(13)/utils0801.factorial(5)
console.log(probal)

var strict = (function(){
    return !this;
}())
console.log(strict)