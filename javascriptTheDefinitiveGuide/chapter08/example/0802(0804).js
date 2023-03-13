// 将函数用作值
//  +
function add(x, y){
    return x + y
}
// -
function subtract(x, y){
    return x - y;
}
// *
function multiply(x, y){
    return x * y
}
// /
function devide(x ,y){
    return x / y
}

function operate(operate, operand1, operand2){
    return operate(operand1, operand2)
}
var i1 = operate(multiply, operate(add, 2,3),operate(multiply, 4,5))
console.log(i1)

// 重复实现一个简单的函数，在对象中查找这个运算符；

var operates = {
    add: function (x, y){
        return x + y
    },
    subtract:function (x, y){
        return x - y;
    },
    multiply: function (x, y){
        return x * y
    },
    devide:function (x ,y){
        return x / y
    },
    pow: Math.pow,
}
function operate2(operation, operand1, operand2){
    if(typeof operates[operation] === 'function'){
        return operates[operation](operand1, operand2)
    }else{
        throw 'unkown operator'
    }
}
var i2 = operate2('add', operate2('add', 'hello', ''), operate2('add', '-', 'world!'))
console.log(i2)
var i3 = operate2('pow', 10, 2)
console.log(i3)