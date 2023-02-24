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

// 方法调用
var calculator = {
    operand1: 1,
    operand2: 1,
    add: function(){
        // 注意this关键字的用法，this指代当前对象
        this.result = this.operand1 + this.operand2
    }
}
calculator.add()
console.log(calculator.result)


// 比较两行代码
// rect.setSize(width, height)
// setRectSize(rect, width, height)

var o  ={
    m : function(){
        var self = this;
        console.log(this === o)
        f();
        function f(){
            console.log(this === o);
            console.log(self === o)
        }
    }
}
o.m()