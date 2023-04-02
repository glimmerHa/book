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
    return this.name = this.toString().match(/function\s*([^(]*)\(/)[1]
    // String.prototype.match(regexp) 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
    // 该方法返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回 null。
    // 语法：stringObject.match(regexp)
    // 参数：regexp 必需。规定检索的模式和标志。
    // \s 匹配空白字符，包括空格、制表符、换页符等等
    // * 匹配前面的子表达式零次或多次
    // + 匹配前面的子表达式一次或多次
}