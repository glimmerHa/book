// 作为命名空间的函数

// 如下1:myModule 命名空间
function myModule(){

}

// 如下2:
(function(){

})()
// function 左侧 圆括号( '(' )是必须的.
// 没有的话，javascript解释器 会试图将 关键字function 解释为 函数声明语句
// 现在情况下， javascript解释器 能正确的解析为：函数定义表达式