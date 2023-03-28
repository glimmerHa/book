var F= function(){}; // 一个函数对象
var  p = F.prototype // F相关联的原型对象
var c = p.constructor // 原型对象的constructor属性
console.log(c === F)

var o = new F() // 创建类F的一个对象；
o.constructor === F // true
console.log(o.constructor === F)

// constructor属性是一个指针，指向关联到原型对象的构造函数； 是prototype属性的一个属性

function Range(from, to){
    this.from = from;
    this.to = to;
}
// 重写覆盖了，可以显示添加constructor属性
Range.prototype = {
    constructor:Range,
    includes:function(x){
        return this.from <= x && x <= this.to;
    },
    foreach:function(f){
        for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
    },
    toString:function(){
        return "(" + this.from + "..." + this.to + ")";
    }
}

var r = new Range(1,3);
r.includes(2);
r.foreach(console.log);
console.log(r);
