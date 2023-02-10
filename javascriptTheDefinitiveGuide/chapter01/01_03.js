// 函数简单示例
function plus1(x){
    return x+1;
}
var y = 2;
plus1(y)

var square = function(x){
    return x*x
}
console.log(square(plus1(y)))

// 函数和对象 合在一起时，函数是对象的方法
var a = [];
a.push(1,2,3)
a.reverse()
console.log(a)

// 定义自己的方法，this关键字
var points = [
    {x:0, y:0},
    {x:4, y:3}
]
points.dist = function(){
    var p1 = this[0]
    var p2 = this[1]
    var a = p2.x- p1.x
    var b = p2.y - p1.y
    return Math.sqrt(square(a) + square(b))
}
console.log(points.dist())