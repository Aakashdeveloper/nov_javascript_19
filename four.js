var city = "london"

city.toUpperCase()

d

London, lA, delhi, Denmark

delhi

var city = "london"

city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"

city
"london"
city.length
6
city[0]
"l"
city[6]
undefined
city[length-1]
"n"
city.charAt(0)
"l"
var city = " helsinki   "
undefined
city.length
12
city.trim()
"helsinki"
var mycity = city.trim()
undefined
mycity.length
8
var a = " i am doing javacript"
undefined
a.replace("javascript","react")
" i am doing javacript"
var a = " i am doing javacript"
undefined
a.replace("javacript","react")
" i am doing react"
a.replace("a","hi")
" i him doing javacript"
a.replace(/a/g,"hi")
" i him doing jhivhicript"
var b = "i am doing javacript"
undefined
b.replace(/a/g,"hi")
"i him doing jhivhicript"
b.replace(' ','_')
"i_am doing javacript"
b.replace('/ /g','_')
"i am doing javacript"
b.replace(/ /g,'_')
"i_am_doing_javacript"
var a = "london"
undefined
a.slice(1)
"ondon"
a.slice(2,5)
"ndo"
a.slice(3)
"don"



var name= "aNKit"

var part1 = name.charAt(0)  
a
> part1.toUpperCase()
>>>>>A

var part2 = name.slice(1)
NKit
> part2.toLowerCase()
>>>>nkit

part1+part2
Ankit

name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()

var name= "aNKit"
undefined
name.charAt(0).toUpperCase()+name.charAt(1).toLowerCase()
"An"
name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()
"Ankit"
name.toLowerCase()
"ankit"


var str="Elecricity"
str.substring(3,6)

var str="Elecricity"
str.substring(3,6)
"cri"
var str="Elecricity"
str.substring(3,-1)
"Ele"
var str="Elecricity"
str.substring(-1,5)
"Elecr"
var str="Elecricity"
str.substring(1,5)
"lecr"


slice cannot take -vge value where as substring can take -ve value 



var str="Elecricity"
str.substr(-1,5)

var str=" Elecricity"
str.substr(-1,5)
"y"
var str="Elecricity"
str.substr(1,5)
"lecri"
var str="Elecricity"
str.slice(1,5)
"lecr"
var mystr = "i am doing javascript and react"
undefined
mystr.indexOf("javascript")
11


substr(from,lengh)
slice(from,end)
substring(from,end) (it can -ve also)


https://nodejs.org/en/