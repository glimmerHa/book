String.prototype.trim = String.prototype.trim || function(){
    var reg = /^\s+|\s+$/g
    return this.replace(reg, '');
    // 正则表达式：/^\s+|\s+$/g
    // /正则表达式主体/修饰符(可选)
    // 修饰符：g 全局匹配，i 忽略大小写，m 多行匹配
    // \s 匹配空白字符，包括空格、制表符、换页符等等
    // ^ 匹配输入字符串的开始位置
    // + 匹配前面的子表达式一次或多次
    // | 匹配符号左右任意一个表达式
    // $ 匹配输入字符串的结束位置
}

Function.prototype.getName = function(){
    if('name' in this) return this.name;
    return this.name = this.toString().match(/ function\s*([^(]*)\(/)[1]
    // String.prototype.match(regexp) 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
}