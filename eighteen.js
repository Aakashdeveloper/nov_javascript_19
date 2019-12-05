function calc(){
    this.sum = function(a,b){return a+b}
    this.divide = function(a,b){return a/b}
}


var mycal = new calc()
undefined
mycal
calc {sum: ƒ, divide: ƒ}
mycal.sum(1,1)
2


function database(){
    this.find =function(table){ return `Select * from ${table}`}
}
function database(){
    this.find =function(table){ return `Select * from ${table}`}
}
user = new database()
database {find: ƒ}
user.find('student')
"Select * from student"

var bob = new Object()
bob.age = 10
bob.city= "NewYork"
bob.setAge = function(newAge){
    bob.age = newAge
}

var tony = new Object()
tony.age = 10;
tony.city= "London";
tony.setAge = function(newAge){
    tony.age = newAge
}

let createAge = function(newAge){
    this.age = newAge
}

var bob = new Object()
bob.age = 10
bob.city= "NewYork"
bob.setAge = createAge

var tony = new Object()
tony.age = 10;
tony.city= "London";
tony.setAge = createAge
