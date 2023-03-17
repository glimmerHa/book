// 使用闭包技术 共享私有状态的通用过做法

// 利用闭包 实现 私有属性存取器 方法
function addPrivateProperty(o, name, predicate){
    var value;
    o['get'+name] = function(){
        return value;
    }
    o['set'+name] = function(v){
        if(predicate && !predicate(v)){
            throw Error('set' + name + ": invalid value" + v);
        }else{
            value  = v;
        }
    }
}
var o = {}
addPrivateProperty(o, 'name', function(x){return typeof x == 'string'})
o.setname('frank')
console.log(o.getname())
// 报错
o.setname(0)