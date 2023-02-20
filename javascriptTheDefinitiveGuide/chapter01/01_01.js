/* javascript语言 重点内容 */
// 所有在双斜线后的内容都是注释

// 变量是通过var声明的
var x;

// 值可以通过= 赋值给变量
x = 0;

// javascript 支持多种数据类型
x = 1
x = 0.01
x = "hello  world"
x = 'javascript'
x = true
x = false
x = null
x = undefined

// javascript 最重要的类型就是对象
var book = {
    topic:'javascript',
    fat: true
}
// 通过 '.' 或者 '[]' 来访问对象属性
book.topic
book['fat']
book.author = 'fff'
book.content = {}

// javascript 支持数组
var primes = [2, 3, 5, 7]
primes[0]
primes.length
primes[primes.length - 1]
primes[4] = 9
primes[4] = 11
var empty = []
empty.length

// 数据和对象中 都可以包含另一个数组或对象
var points = [
    {x:0, y:0},
    {x:1, y:1}
]

var data = {
    trial1: [[1,2], [3,4]],
    trial2: [[2,3], [4,5]]
}