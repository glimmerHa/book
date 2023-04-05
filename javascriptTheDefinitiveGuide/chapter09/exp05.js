// quacks 检查第一个参数(对象)是否实现了  剩下的参数所表示的方法。
function quacks(o /*, ......*/){
    for(var i = 1; i < arguments.length; i++){
        var arg = arguments[i];
        switch(typeof arg){
            case 'string':
                if( typeof o[arg] !== 'function') return false;
                continue
            case 'function':
                arg = arg.prototype;
            case 'object':
                for(var m in arg){
                    if(typeof arg[m] !== 'function') continue;
                    if(typeof o[m] !== 'function') return false;
                }
                return true;
        }
    }
}
