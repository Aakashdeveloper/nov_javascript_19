function add(a,b){
    var output = a+b
    console.log(a)
    console.log(b)
    return output
}
add(1,2)

function isEven(userInput){
    var result;
    if(userInput%2==0){
        result = `number ${userInput} is even`
    }else{
        result = `number ${userInput} is odd`
    }
    return result
}

isEven(2)

isEven(2)
"number 2 is even"
isEven(3)
"number 3 is odd"


function
method 


var isEven = function (userInput){
    var result;
    if(userInput%2==0){
        result = `number ${userInput} is even`
    }else{
        result = `number ${userInput} is odd`
    }
    return result
}


//Es6

var isEven = (userInput) => {
    var result;
    if(userInput%2==0){
        result = `number ${userInput} is even`
    }else{
        result = `number ${userInput} is odd`
    }
    return result
}

var isEven = (userInput) => {
    for(i=0;i<userInput;i++){
        console.log(i)
    }
}
