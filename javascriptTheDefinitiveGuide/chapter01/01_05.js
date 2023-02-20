// 面向对象的语言
// 如何在javascript 语言内定义一个类

// 定义一个构造函数，初始化一个point对象
function Point(x, y){
    this.x = x;
    this.y = y;
}
var  p = new Point(1,1);

Point.prototype.r = function(){
    return Math.sqrt(this.x*this.x + this.y+this.y)
}
console.log(p.r())