// 定义javascript函数
function printProps(o){
    for(var p in o){
        console.log(p + ':' + o[p] + '\n');
    }
}

function distance(x1, y1, x2, y2){
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy)
}

function factorial(x){
    if(x<= 1)return 1;
    return x * factorial(x-1)
}

// 函数表达式 定义了一个函数用来求传入参数的平方
var square = function(x){
    return x*x;
}

// 函数表达式 可以包含名称，在递归时很有用
var f = function fact(x){
    if(x<=1)return 1;
    else return x*fact(x-1)
}
let data = [1,2,3,2,1]
// 函数表达式 可以作为参数传递给其他函数
data.sort(function(a,b){return a-b})

// 函数表达式 定义后立即调用
var tensquared = (function(x){return x*x}(10));

// 改为 可外接的形式
exports.printProps = printProps
exports.distance = distance
exports.factorial = factorial
exports.square = square