Object
>Literal
>Constructor

var country = {
    name:'India',
    capital:'Delhi',
    population:78676578578
}
undefined
country
{name: "India", capital: "Delhi", population: 78676578578}
country.name
"India"
country.capital
"Delhi"
country.population
78676578578
country.langauge = "Hindi"
"Hindi"
country
{name: "India", capital: "Delhi", population: 78676578578, langauge: "Hindi"}capital: "Delhi"langauge: "Hindi"name: "India"population: 78676578578__proto__: Object
country.capital="Mumbai"
"Mumbai"
country
{name: "India", capital: "Mumbai", population: 78676578578, langauge: "Hindi"}
delete country.capital
true
country
{name: "India", population: 78676578578, langauge: "Hindi"}

/////////////////////

var car = new Object()
car.color="red"
car.brand="BMW"
"BMW"
car
{color: "red", brand: "BMW"}

var sayhi = {
    firstname:'John',
    lastname:'eva',
    greet: function(){
        return `Hi ${this.firstname} ${this.lastname}`
    }
}


var calc = {
    sum: function(a,b){
        return a+b
    },
    sub: function(a,b){
        return a-b
    }
}

undefined
calc.sum(1,2)
3

var city = [
    {name:"delhi", country:"India"},
    {name:"Helsinki", country:"Finland"},
    {name:"Paris", country:"France"}
]

city[0].country
"India"
city[2].city
undefined
city[2].name
"Paris"