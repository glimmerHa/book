// es3 的Function.bind() 方法
if(!Function.prototype.bind){
    Function.prototype.bind = function(o){
        var self = this; // 函数本身
        var boundArgs = arguments;
        return function(){
            var args = [],i;
            for(i=1; i < boundArgs.length; i++){
                args.push(boundArgs[i])
            }
            for( i =0; i < arguments.length; i++){
                args.push(arguments[i])
            }
            return self.apply(o, args)
        }
    }
}