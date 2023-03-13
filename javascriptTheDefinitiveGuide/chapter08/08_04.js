// 函数可以定义也可以调用；
// 函数是一种语法，也是值=> 函数可以赋值给变量

// 函数赋值
// 给变量
// 给对象属性
// 无名字，放入数组；可以 a[0](a[1])调用
var a = [function(x){return  x*x},20]
console.log(a[0](a[1]))


// 自定义函数属性；
// 函数可以拥有属性： 函数静态属性
// 举例1
uniqueInterger.counter = 0;
function uniqueInterger(){
    return uniqueInterger.counter++;
}

// 举例2: 缓存数据(将自身当成数组)
function factorial(n){
    if(isFinite(n) && n >0 && n=== Math.round(n)){
        if(!(n in factorial)){
            factorial[n] = n * factorial(n-1)
        }
        return factorial[n]
    }else{
        return NaN;
    }
}
factorial[1] = 1
var i2 = factorial(5)
console.log(i2)