// 使用构造函数来定义“范围类”
// range2.js 表示值的范围的类的另一种个实现方式：构造函数

// 这是一个构造函数，用来初始化新创建的Range对象
// 注意，它并不创建对象，它只是初始化
function Range(from, to){
    this.from = from;
    this.to = to;
}
Range.prototype = {
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
