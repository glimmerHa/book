// 函数属性， 方法和构造函数

// length属性： 
// arguments.length 是实际传入的实参个数；
// arguments.callee.length 是期望传入 的实参个数；
console.log('---exp===1---');
(function(){
    function check(args){
        var actual = args.length;
        var expected = args.callee.length;
        if(actual !== expected){
            throw Error('Expected ' + expected + ' args; got ' + actual)
        }
    }
    function f(x,y,z){
        check(arguments);
        return x+y + z
    }
    console.log(f(1,2,3))
    // f(1,2,3,4)
})();

// prototype属性

// call 方法
// apply方法
// (
//     f.call(o)
//     f.apply(0)
//     // 等价
//     o.m= f
//     o.m()
//     delete o.m
// )()
console.log('---exp===2---');
(function(){
    var obj = {
        f: function(x,y,z){
            return x+y + z
        }
    }
    function trace(o, m){
        var original = o[m];
        o[m] =  function(){
            console.log(new Date(), 'entering:', m);
            var result = original.apply(this, arguments)
            console.log(new Date(), 'exiting:', m);
            return result
        };
        return o[m]
    }
    console.log(trace(obj, 'f')(1,2,3))
})()

// bind()方法
// 这个方法的主要作用就是将函数绑定到某个对象。返回一个新的函数。
// 调用新的函数 将会 把原始的函数 f() 当作o的方法来调用。
console.log('---exp===3---');
(function(){
    function f(y){return this.x +y}
    var o = {x: 1};
    var g = f.bind(o)
    console.log(g(2) )
}());

// 实现这种绑定
function bind(f,o){
    if(f.bind) return f.bind(o)
    else return function(){
        return f.apply(o, arguments)
    }
}


// bind附带了一些其他应用； 常见的函数式编程技术，有时候也被称为“柯里化”
console.log('---exp===4---');
(function(){
    var sum = function(x, y){
        return x+y;
    }
    
    var succ = sum.bind(null, 1)
    console.log(succ(2))
    
    function f(y,z){
        return this.x+y+z
    }
    var g = f.bind({x:1}, 2);
    
    console.log(g(3))
})()

// toString

// Function 构造函数 创建一个匿名函数
console.log('---exp===5---');
var ff = new Function("x", "y", "return x+y")
console.log(ff)
// Function构造函数创建的函数 不是使用词法作用域的， 函数体代码在顶层函数执行；
// 浏览器内运行
{
    var scope = 'global'
function constructFunction(){
    var scope = 'local';
    return new Function("return scope")
}
console.log(constructFunction()())
}

