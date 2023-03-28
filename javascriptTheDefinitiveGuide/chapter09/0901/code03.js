// java式的类继承
// 实例字段
// 实例方法
// 类字段
// 类方法
// javascript模拟出java中的这四种类成员类型。

// 构造函数对象
// 原型对象
// 实例对象

// javascript 中 定义类的步骤可以缩减为 一个分三步的算法
// 第一步 定义一个构造函数，设置初始化新对象的 实例属性
// 第二部 给构造函数的prototype对象定义 实例方法
// 第三部 给构造函数 定义类字段 和类属性。

var extend  = (function(){
    var protoprops = ['toString', 'valueOf',  'constructor',  
    'hasOwnProperty', 'isPrototype',  'propertyIsEnumerable',  'toLocaleString']
    for(var p in {toString: null}){
        return function extend(o){
            for(var i=1; i<arguments.length;i++){
                var source = arguments[i]
                for(var prop in source) o[prop] = source[prop]
            }
            return o;
        }
    }
    //  说明 for/in 不会 枚举测试对象的 toString属性
    return function patched_extend(o){
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i]
            for(var prop in source){
                o[prop] = source[prop]
            }
            // 现在检查特殊属性
            for(var j = 0; j < protoprops.length; j++){
                prop = protoprops[j]
                if(source.hasOwnProperty(prop)) o[prop] = source[prop]
            }
        }
        return o;
    }
}())

function defineClass(constructor, methods,statics){
    if(methods) extend(constructor.prototype, methods);
    if(statics) extend(constructor, statics);
    return constructor;
}

var SimpleRange = defineClass(
    function(f,t){this.f= f; this.t = t},
    {
        includes: function(x){return this.f <= x && x <= this.t},
        toString: function(){return this.f + "..." + this.t}
    },
    {
        upto:function(t){return new SimpleRange(0,t)}
    }
)

var demo = new SimpleRange()
SimpleRange.upto(1)