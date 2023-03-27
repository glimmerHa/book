// 函数式编程
// 使用函数处理数组
// 高阶函数： 操作函数的函数，它接受一(多)个函数作为参数，并返回一个新函数。
// 不完全函数： 一个函数的实参不全，返回一个新函数，新函数接受剩余的实参，然后调用原函数
    // 将 不完全调用 和其他高阶函数 整合在一起的时候，就可以实现一些非常有用的功能。
// 记忆函数： 一个函数的返回值是由它的参数决定的，如果参数相同，返回值也相同，那么就可以记住这个返回值，下次调用时，直接返回记住的值，而不是重新计算。




console.log('---exp===1---');
//使用函数处理数组

// 例： 数组，计算这些元素的平均值和标准差
// 非函数编程风格
(function(){
    var data = [1,1,3,5,5]
    var total = 0;
    for(var i = 0; i < data.length; i++){
        total+= data[i]
    }
    var mean = total/data.length;

    total = 0;
    for(var i = 0; i < data.length; i++){
        var deviation = data[i] - mean
        total+= deviation*deviation
    }
    var stddev = Math.sqrt(total / (data.length-1))
    console.log(stddev)
})();

//es5
(function(){
    // 定义两个简单计算函数
    var sum = function(x,y){return x+y};
    var square = function(x){return x*x};
    var data = [1,1,3,5,5]
    var mean = data.reduce(sum)/data.length
    var deviations = data.map(function(x){ return x-mean})
    var stddev = Math.sqrt(deviations.map(square).reduce(sum)/(data.length-1))
    console.log(stddev)
})();

// es3
// 自定义 map reducer 简单实现
var map = function(a,f){
    var result = [];
    for(var i = 0; i < a.length; i++){
        if(i in a) result[i] = f.call(null,a[i], i ,a)
    }
    return result
 }
 var reduce = function(a,f, initial){
    var acc ;
    var i = 0;
    if(arguments.length >2){
        acc = initial
    }else{
        i = 1;
        acc = a[0]
    }
    for(; i < a.length; i++){
        acc = f.call(null, acc,a[i], i,a)
    }
    return acc
 }

;(function(){
    
     
     var data = [1,1,3,5,5]
     var sum = function(x,y){return x+y};
     var square = function(x){return x*x};
     var mean = reduce(data,sum)/data.length
     var deviations = map(data,function(x){return x-mean})
     var stddev = Math.sqrt(reduce(map(deviations, square), sum)/(data.length-1))
    console.log('a1', stddev)
    // window.map = map
    // module.exports = {
    //     map,
    // } 
    
})();


// 高阶函数： 操作函数的函数，它接受一(多)个函数作为参数，并返回一个新函数。
// 通俗： 参数是函数，返回还是函数
console.log('---exp===2---');
(function(){
    function not(f){
        return function(){
            var result = f.apply(this,arguments)
            return !result;
        }
    }
    var even  = function(x){
        return x %2 === 0
    }
    var odd = not(even);
    console.log([1,1,3,5,5].every(odd))

    function mapper(f){
        return function(a) {return map(a,f)}
    }
    var increment = function(x){
        return x +1;
    }
    var incrementer = mapper(increment)
    console.log(incrementer([1,2,3]))
})();

(function(){
    // 接收 f,g 计算f(g())
    function compose (f,g){
        return function(){
            return f.call(this, g.apply(this,arguments))
        }
    }
    var sum = function(x,y){return x+y};
     var square = function(x){return x*x};
     var squarefsum = compose(square, sum)
     console.log(squarefsum(2,3))
})();

// 不完全函数
console.log('---exp===3---');
(function(){
    // 类数组对象转换成真正的数组
    function array(a, n){
        return Array.prototype.slice.call(a,n || 0)
    }
    // 这个函数的实参 传递至左侧
    function partialLeft(f /*, ...*/){
        var args = arguments;
        return function(){
            var a = array(args, 1);
            a =a.concat(array(arguments));
            return f.apply(this,a)
        }
    }
    // 这个函数的实参 传递至右侧
    function partialRight(f /*, ...*/){
        var args = arguments;
        return function(){
            var a = array(arguments);
            a = a.concat(array(args, 1));
            return f.apply(this,a)
        }
    }
    // 这个函数的实参中 有 undefined 都被填充
    function partial(f){
        var args = arguments;
        return function(){
            var a = array(args, 1);
            var i = 0, j = 0;
            for(; i < a.length; i++){
                if(a[i] === undefined) a[i] = arguments[j++]
            }
            a = a.concat(array(arguments,j))
            return f.apply(this,a)
        }
    }

    var f = function(x,y,z){
        return x*(y-z)
    }
    console.log(partialLeft(f,2)(3,4))
    console.log(partialRight(f,2)(3,4))
    console.log(partial(f,undefined,2)(3,4))
})();

// 利用已有的函数 来定义一些新的函数
// var increment = partialRight(sum,1);
// var cuberoot = partialRight(Math.pow, 1/3)
// String.prototype.first = partial(String.prototype.charAt, 0)
// String.prototype.last = partial(String.prototype.substr, -1, 1)


// 记忆
console.log('---exp===4---');
// 高阶函数： memorize() 接收一个函数作为参数，并返回一个带有记忆能力新函数
function memorize(f){
    var cache = {}
    return function(){
        // 转化为字符串
        var key = arguments.length + Array.prototype.join.call(arguments, ',');
        if(key in cache) return cache[key];
        else return cache[key] = f.apply(this,arguments)
    }
}
// 使用memoize()
/**
 * 返回两个整数的最大公约数；使用欧几里得算法
 * @param {*} a 
 * @param {*} b 
 */
function gcd(a,b){
    var t;
    if(a < b){
        t = b;
        b = a;
        a = t;
    }
    while(b != 0){
        t = b;
        b = a % b;
        a = t;
    }
    return a;
}
var gcdmemo = memorize(gcd);
console.log(gcdmemo(85,187))

var updateFactorial = memorize(function(n){
    return n <= 1 ? 1 : n * updateFactorial(n-1)
})

console.log(updateFactorial(5))