// “值的范围”的类定义了原型对象
// 定义了 一个 “工厂”函数，创建并出示话类的实例

function inherit(p) {
    if (p == null) throw TypeError();
    if (Object.create)
        return Object.create(p);
    var t = typeof p;
    if (t !== "object" && t !== "function") throw TypeError();
    function f() {};
    f.prototype = p;
    return new f();
}
// Range.js
function range(from, to) {
    // 使用inherit()函数来创建对象
    // 这个对象继承自原型对象中定义的方法
    // 原型对象定义在下面
    var r = inherit(range.methods);

    // 存储新的Range对象的起始位置和结束位置
    // 这些是不可继承的，每个对象都拥有唯一的属性
    r.from = from;
    r.to = to;

    // 返回这个新创建的对象
    return r;
}
range.methods = {
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
var r = range(1,3);
r.includes(2);
r.foreach(console.log);
console.log(r);