// 控制语句
function abs(x){
    if(x >= 0){
        return x;
    } else{
        return -x
    }
}

function factorial(n){
    var product = 1;
    while( n > 1){
        product *= n
        n--
    }
    return product
}
factorial(4)
// console.log(factorial(4))

function factorial2(n){
    var  i , product = 1;
    for( i = 2; i <= n; i++){
        product *= i
    }
    return product
}
factorial2(5)
// console.log(factorial2(5))