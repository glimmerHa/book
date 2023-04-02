// 可以判断值的类型的type()函数

/**
 * 以 字符串形式 返回o的类型
 * - 如果o是null 返回"null"； 如果o是undefined 返回"undefined" NaN 返回NaN
 * - 如果typeof的值不是"object"，则返回这个值
 * - 如果o的类不是"Object"，则返回这个值
 * - 如果o的构造函数的名字不是"Object"，则返回这个值
 * - 如果o包含构造函数并且这个构造函数具有名字，则返回这个名字
 * - 否则一律返回"Object"
 * @param {*} o 
 */
function type(o){
    if(o === null) return "null";
    if(o === undefined) return "undefined";
    if(isNaN(o) && o !== o) return "NaN";

    let typeVal = typeof o;
    if(typeVal !== "object") return typeVal;
    let calssVal = calssof(o);
    if(calssVal !== "Object") return calssVal;

    let consName = o.constructor.name;
    if(o.constructor && typeof o.constructor === "function" &&consName&& consName !== "Object"){
        return consName;
    }
    return 'Object'
}
function calssof(o){
    return Object.prototype.toString.call(o).slice(8, -1);
}
Function.prototype.getName = function(){
    return this.name || this.toString().match(/function\s*([^(]*)(\s)*\(/)[1].trim()
}
function Complex(){

}
var a = new Complex();
console.log(type(a))

var Range = function(){

}
var b = new Range();
console.log(type(b))
var c =new (function(){})()
console.log(type(c))