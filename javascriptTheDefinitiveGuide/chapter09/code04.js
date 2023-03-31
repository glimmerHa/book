// 表示复数的类；
function Complex(real, imaginary) {
    if(isNaN(real) || isNaN(imaginary)){
        throw new TypeError();
    }
    this.r = real;
    this.i = imaginary
}


// 共轭复数
Complex.prototype.conj = function(){
    return new Complex(this.r, -this.i);
}
// 给低版本 补充 api实现
if(!Function.prototype.bind){
    Function.prototype.bind = function(o, /*, args*/){
        var self = this, boundArgs = arguments;
        return function(){
            var args = [], i;
            for(i = 1; i < boundArgs.length; i++) args.push(boundArgs[i]);
            for(i = 0; i < arguments.length; i++) args.push(arguments[i]);
            return self.apply(o, args);
        }
    }
}

// other example
var n = 3;
// 实例方法
Number.prototype.times = function(f,context){
    var n = Number(this);
    for(var i = 0 ; i < n; i++) f.call(context, i);
}
n.times(function(n){console.log(n + 'hello')})

// 类方法
Number.times = function(n, f, context){
    for(var i = 0 ; i < n; i++) f.call(context, i);
}

String.prototype.trim =String.prototype.trim || function(){
    return this.replace(/^\s+|\s+$/g, '');
}

Function.prototype.getName = function(){
    if("name" in this) return this.name;
    return this.name = this.toString().match(/function\s*([^(]*)\(/)[1].tirm();
}