// 特定产经下，返回带补丁的extend

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
var o = {name:0,age:1}
console.log(extend(o))