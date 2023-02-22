// 嵌套函数

function hypotenuse(a,b){
    function square(x) {return x * x}
    return Math.sqrt(square(a)+square(b))
}