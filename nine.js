var a = [5,7,3,9]
var b = ["a","b","c"]
var c = [true,false,false](homo)

var d = [1,22, "A","a",true,1,true] (hetro)


var city =["london","Newyork","Delhi","Helsinki"]
undefined
city
(4) ["london", "Newyork", "Delhi", "Helsinki"]
typeof(city)
"object"
city.length
4
city[0]
"london"
city[1]
"Newyork"
city.push("amsterdam")
5
city
(5) ["london", "Newyork", "Delhi", "Helsinki", "amsterdam"]
city.pop()
"amsterdam"
city
(4) ["london", "Newyork", "Delhi", "Helsinki"]
city.pop()
"Helsinki"
city
(3) ["london", "Newyork", "Delhi"]
city.pop(1)
"Delhi"
city
(2) ["london", "Newyork"]
city.pop("london")
"Newyork"
city
["london"]
city.unshift("Dubai")
5
city
(5) ["Dubai", "london", "Newyork", "Delhi", "Helsinki"]
city.shift()
"Dubai"
city
(4) ["london", "Newyork", "Delhi", "Helsinki"]

Push add the value in the end of the Array;
Unshift will add in the first place of Array

Pop remove from the end of the Array
Shift remove from the begining of the array

["Dubai", "london", "Newyork", "Delhi", "Helsinki"]
(5) ["Dubai", "london", "Newyork", "Delhi", "Helsinki"]0: "Dubai"1: "london"2: "Newyork"3: "Delhi"4: "Helsinki"length: 5__proto__: Array(0)
var city = ["Dubai", "london", "Newyork", "Delhi", "Helsinki"]
undefined
city.slice(2,4)
(2) ["Newyork", "Delhi"]
city.splice(2,0,"Amsterdam")
[]
city
(6) ["Dubai", "london", "Amsterdam", "Newyork", "Delhi", "Helsinki"]
city.splice(3,1,"Paris")
["Newyork"]
city
(6) ["Dubai", "london", "Amsterdam", "Paris", "Delhi", "Helsinki"]

var a = ["a","b","c"]
var b = [1,2,3]


var a = ["a","b","c"]
var b = [1,2,3]
var c = ["aa","bb","cc"]
undefined
a+b
"a,b,c1,2,3"
a.concat(b)
(6) ["a", "b", "c", 1, 2, 3]

[a,b]=["Hi","Bie"]
a 
"hi"
b
"bie"

var city = ["Dubai", "london", "Newyork", "Delhi", "Helsinki"]
undefined
city.indexOf("london")
1
city.indexOf("Delhi")
3
city.indexOf("Amsterdam")
-1
city.indexOf("Mumbai")
-1

var city = ["Dubai", "london", "Newyork", "Delhi", "Helsinki"]
undefined
city[2]="Amsterdam"
"Amsterdam"
city
(5) ["Dubai", "london", "Amsterdam", "Delhi", "Helsinki"]
delete city[1]
true
city
(5) ["Dubai", empty, "Amsterdam", "Delhi", "Helsinki"]0: "Dubai"2: "Amsterdam"3: "Delhi"4: "Helsinki"length: 5__proto__: Array(0)
city.length
5
delete city[5]
true
city
(5) ["Dubai", empty, "Amsterdam", "Delhi", "Helsinki"]
city[1]="NewYork"
"NewYork"
city
(5) ["Dubai", "NewYork", "Amsterdam", "Delhi", "Helsinki"]

var a = ["a","b","c"]
var b = [1,2,3]
var c = ["aa","bb","cc"]
undefined
a.concat(b)
(6) ["a", "b", "c", 1, 2, 3]
a.concat(c)
(6) ["a", "b", "c", "aa", "bb", "cc"]
a.concat(b,c)
(9) ["a", "b", "c", 1, 2, 3, "aa", "bb", "cc"]
c.concat(a,b)
(9) ["aa", "bb", "cc", "a", "b", "c", 1, 2, 3]


var a ="red,yellow,green"

var a ="red,yellow,green"
undefined
a.split(',')
(3) ["red", "yellow", "green"]
var name="nareshit"
undefined
a.split('')
(16) ["r", "e", "d", ",", "y", "e", "l", "l", "o", "w", ",", "g", "r", "e", "e", "n"]
name.split('')
(8) ["n", "a", "r", "e", "s", "h", "i", "t"]0: "n"1: "a"2: "r"3: "e"4: "s"5: "h"6: "i"7: "t"length: 8__proto__: Array(0)
var url="https://github.com/Aakashdeveloper/sep_node_mrng_19/blob/master/moviesapp/src/routes/moviesRoute.js"
undefined
url.split("/")
(11) ["https:", "", "github.com", "Aakashdeveloper", "sep_node_mrng_19", "blob", "master", "moviesapp", "src", "routes", "moviesRoute.js"]
var output = url.split('/')
undefined
output[output.length-1]
"moviesRoute.js"
var color = ["red", "yellow", "green"]
undefined
color.toString()
"red,yellow,green"
color.sort()
(3) ["green", "red", "yellow"]