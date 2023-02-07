// javascript 表达式：最常见的是使用运算符
3 + 2
3 - 2
3 * 2
3 / 2
var points = [
    {x:0, y:0},
    {x:1, y:1}
]
points[1].x - points[0].x
"3" + "2"

// javascript 定义了一些算术运算符的简写形式
var count = 0
count++
count--
count +=2
count *=3
count

// 相等关系运算符 用来判断两值 是否相等
// 不等，大于，小于 运算结果是 true false
var x = 2, y = 3;
x == y
x != y
x < y
x <= y
x > y
x >= y
'two' == 'three'
'two' > 'three'
false == (x > y)

// 逻辑运算符是对布尔值的合并或求反
(x == 2) && ( y == 3)
(x > 3) || (y < 3)
!(x == y)
