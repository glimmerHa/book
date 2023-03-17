// 闭包
// 使用：
// 1. 命名空间使用


// javascript 采用词法作用域； 函数的执行依赖于变量作用域，作用域是在函数定义时决定的。而不是函数调用时决定的。
// javascript 函数对象的内部状态 不仅包含函数的代码逻辑，嗨必须引用 当前的作用域连。

// 理解闭包 首先了解 嵌套函数的词法作用域规则；
// 函数的执行 用到了作用域链，这个作用域链 在函数定义的时候创建的。

(function(){
    console.log('---exp===1---')
    var scope = 'global scope'
    function checkscope(){
        var scope = 'local scope';
        function f(){return scope}
        return f()
    }
    console.log(checkscope())
})();

(function(){
    console.log('---exp===2---')
    var scope = 'global scope'
    function checkscope(){
        var scope = 'local scope';
        function f(){ return scope}
        return f
    }
    console.log(checkscope()())
})();


// 重写
(function(){
    console.log('---exp===3---')
    var uniqueInterger = (function(){
        var counter = 0;
        return function(){
            return counter++
        }
    }())
    console.log(uniqueInterger())
    console.log(uniqueInterger())

    function counter(){
        var n = 0;
        return {
            count: function(){return n++},
            reset: function(){n =0 }
        }
    }
    var c = counter();
    var d = counter();
    //  c d 生成了两个新的对象， 局部变量也是新生成的。是互不干扰的两个变量
    console.log('---split line---')
    console.log(c.count())
    console.log(d.count())
    c.reset()
    console.log(c.count())
    console.log(d.count())
})();

(function(){
    console.log('---exp===4---')
    function counter(n){
        return {
            get count(){
                return n++
            },
            set count(m){
                if(m >n){
                    n = m;
                }else throw Error('count  can only be set to a larger value');
            }
        }
    }
    var c = counter(100)
    console.log(c.count)
    console.log(c.count)
    c.count = 2000
    console.log(c.count)
    // c.count  = 2000
})();

// 同一个作用域链中定义两个必包； 这两个必包共享同样的私有变量或变量。
console.log('---exp===5---')
function constfunc(v){
    return function(){
        return v;
    }
}

var funcs = []
for(var i = 0; i < 10; i++){
    funcs[i] = constfunc(i)
}
console.log(funcs[5]())

function constFuncs(){
    var funcs = []
    for(var i = 0; i < 10; i++){
        funcs[i] = function(){
            return i;
        }
    }
    return funcs
}
var funcs = constFuncs()
console.log(funcs[5]())