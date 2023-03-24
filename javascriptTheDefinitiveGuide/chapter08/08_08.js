// 函数式编程


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
console.log('---exp===2---');
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
})();