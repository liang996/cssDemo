let a = ["2", "3", "4", "5"]
console.log(a.length)
console.log(a[0])
//取数组倒数第二个

console.log(a[a.length - 2])


//遍历数组

a.forEach((item, index) => {
  console.log(item)
})

//添加元素到数组的末尾

let a1 = ["2", "3", "4", "5"]

let b = a1.push("6")

console.log("a1,", a1)//[ '2', '3', '4', '5', '6' ]

console.log("b,", b)//返回的是数组长度 5


//删除数组末尾的元素

let a2 = ["2", "3", "4", "5"]
let b1 = a2.pop()
console.log("a2,", a2)//[ '2', '3', '4']

console.log("b1,", b1)//显示删除掉掉值：5


//删除数组头部的元素

let a2 = ["2", "3", "4", "5"]
let b2 = a2.shift()
console.log("a2,", a2)//[ "3", "4", "5"]

console.log("b2,", b2)////显示删除掉的值：2


//数组头部的元素添加

let a3 = ["2", "3", "4", "5"]
let b3 = a3.unshift("1")
console.log("a3,", a3)//[ "3", "4", "5"]

console.log("b3,", b3)////显示数组长度：5


//找出元素索引

let a4 = ["2", "3", "2", "4", "5"]
let b4 = a4.indexOf("1")
let b41 = a4.indexOf("2")

console.log("b4,", b4)//没有就显示-1
console.log("b41,", b41)//有就显示对应出现的首次索引位置


let a5 = ["2", "4", "5"]


//删除
let b5 = a5.splice(1, 1)
console.log("a5,", a5)// ["2", "5"]
console.log("b5,", b5)//显示删除掉的值：[ '4' ]

//替换
let a5 = ["2", "4", "5"]

let b6 = a5.splice(1, 1, "替换")
console.log("a5,", a5)//显示替换后的值：["2", "添加", "5"]
console.log("b6,", b6)//显示替换掉的值：[ '4' ]


//添加
let a5 = ["2", "4", "5"]

let b7 = a5.splice(1, 0, "添加")
console.log("a5,", a5)//显示添加后的值：["2","添加"， "4", "5"]
console.log("b7,", b7)//[  ]


//复制
let a5 = ["2", "4", "5"]
let b8 = a5.slice()
console.log("a5,", a5)//不改变数组： ["2", "4", "5"]

console.log("b8,", b8)//["2", "4", "5"]


//截取数组1
let a5 = ["2", "4", "5"]
let b8 = a5.slice(1)
console.log("a5,", a5)//不改变数组： ["2", "4", "5"]
console.log("b8,", b8)//[ '4', '5' ]

//截取数组2
let a5 = ["2", "4", "5"]
let b8 = a5.slice(1, 1)
let b81 = a5.slice(1, 2)
let b82 = a5.slice(1, 3)
let b83 = a5.slice(1, 4)

console.log("a5,", a5)//不改变数组： ["2", "4", "5"]
console.log("b8,", b8)//[  ]
console.log("b81,", b81)//[  "4"]
console.log("b82,", b82)//[  "4", "5"]
console.log("b83,", b83)//[  "4", "5"]


//array.from
//1、将类数组对象转换为真正数组：

let arrayLike = {
  '0': 'tom',
  '1': '65',
  '2': '男',
  '3': ['jane', 'john', 'Mary'],
  length: 4
}
let arr = Array.from(arrayLike)
console.log(arr) //[ 'tom', '65', '男', [ 'jane', 'john', 'Mary' ] ]

//2.将Set结构的数据转换为真正的数组：

let a = [1, 3, 1, 4, 1, 5, 1, 8]
let b = [...new Set(a)]
console.log(b)
//还可以用
let c = Array.from(new Set(a))
console.log(c)

//遍历
let arr = [1, 3, 4, 5, 8]
let set = new Set(arr)
console.log(Array.from(set, item => item + 1)) //[ 2, 4, 5, 6, 9 ]


//快速创建一个20条的数组数据1

const originNews = Array.from({ length: 20 }, (v, k) => (k + 1))

console.log(originNews) //[1,  2,  3,  4,  5,  6,  7,8,  9, 10, 11, 12, 13, 14,15, 16, 17, 18, 19, 20]

//快速创建一个20条的数组数据2

const originNews = Array.from(
  { length: 20 },
  (v, k) => ({ content: `新闻${k}` })
)
console.log(originNews)
