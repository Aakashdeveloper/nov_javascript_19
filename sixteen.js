var a = "aaaaa"

function sum(){
    var b = "bbbb"
    console.log("inside function>>>>",b)
    console.log("inside function>>>>",a)
}

console.log("outside function>>>>",a)
//console.log("outside function>>>>",b)

if(a){
    let c = "cccc"
    console.log("inside if>>>>",a)
    //console.log("inside if>>>>",b)
    console.log("inside if>>>>",c)
}

console.log("outside function>>>>",a)
console.log("outside function>>>>",c)



a = 10
add(a)
function add(a){
    return a+a
}
var a;

//
var a;
a = 10;
function add(a){
    return a+a
}
add(a)


