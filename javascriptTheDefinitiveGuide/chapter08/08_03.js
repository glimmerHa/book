// var  o = require('./08_02').o
function getPropertyNames(o, a){
    if(a === undefined) a = [];
    for(var property in 0) a.push(property)
    return a;
}
// var a = getPropertyNames(o)
// getPropertyNames(o,a)

// 可变长的实参列表
function f(x,y,z){
    if(arguments.length !== 3){
        throw new Error('funtion f called with' + arguments.length + 'arguments, but it expect 3 arguments.' )
    }
    // 在执行函数其他逻辑……
}
// f(2,3)

function max(/* ……*/){
    var max = Number.NEGATIVE_INFINITY;
    for(var i = 0; i< arguments.length; i++){
        if(arguments[i] > max) max = arguments[i]
    }
    return max;
}
var largest = max(1,10,2,3,1000,4,5,10000,6)
console.log(largest)

function f1(x){
    console.log(x)
    arguments[0] = null
    console.log(x)
    // arguments[索引]与 形参 值都是一起的
}

var factorial = function(x){
    if(x<= 1)return 1;
    return x*arguments.callee(x-1)
    // callee 匿名函数中，调用自身
}
console.log(factorial(5))

// 对象属性用做实参
