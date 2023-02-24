var  o = require('./08_02').o
function getPropertyNames(o, a){
    if(a === undefined) a = [];
    for(var property in 0) a.push(property)
    return a;
}
var a = getPropertyNames(o)
// getPropertyNames(o,a)

function f(x,y,z){
    if(arguments.length !== 3){
        throw new Error('funtion f called with' + arguments.length + 'arguments, but it expect 3 arguments.' )
    }
    // 在执行函数其他逻辑……
}
f(2,3)