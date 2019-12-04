var a = [2,3,4,5,6]

a.map((data)=>{console.log(data)})

a.map((data) => { return data*2})

a.filter((data) => { return data*2})


var a = [0,1,2,3]
a.map((data) => { return data>0})
[0,1,2,3]
a.filter((data) => { return data*1})
[1,2,3]

var a = [0,1,2,3]
a.map((data) => { return data>0})
(4) [false, true, true, true]

var num = [1,2,3,4]

var num = [1,2,3,4]
undefined
console.log(...num)
VM342:1 1 2 3 4
undefined
var a =[ "a","b","c",...num,"d"]
undefined
a
(8) ["a", "b", "c", 1, 2, 3, 4, "d"]