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

