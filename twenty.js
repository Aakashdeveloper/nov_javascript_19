function robot(name){
    this.name = name;
    this.legs = 2;
    this.color="white"
}

var pepper = new robot('pepper')
pepper
robot {name: "pepper", legs: 2, color: "white"}

function robot(name){
    this.name = name;
    this.legs = 2;
    this.color="white"
}

function human(name){
    this.name = name;
    this.hands = 2
}

function human2(name){
    this.name = name;
    this.city = "London"
}

human.prototype = new robot()
human2.prototype = new human()



var method1(abc){
    add,
    sub

}


var method2(tax){
    tax
}