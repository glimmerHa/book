// 闭包
// 使用：
// 1. 命名空间使用


// javascript 采用词法作用域； 函数的执行依赖于变量作用域，作用域是在函数定义时决定的。而不是函数调用时决定的。
// javascript 函数对象的内部状态 不仅包含函数的代码逻辑，嗨必须引用 当前的作用域连。

// 理解闭包 首先了解 嵌套函数的词法作用域规则；

var scope = 'global scope'
function checkscope(){
    var scope = 'local scope';
    function f(){return scope}
    return f()
}
checkscope()