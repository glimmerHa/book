// 不要关注“对象的类是什么”，而是关注“对象有什么行为” 称为“鸭式辩型”

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

var r = new Range('a', 'z');
// foreach 里面的ceil方法会报错 Math.ceil() 方法可对一个数进行上舍入。

var thisYear = new Range(new Date(2022,0,1), new Date(2022,0,1));

