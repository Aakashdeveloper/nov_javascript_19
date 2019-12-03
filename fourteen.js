/*function sayhi(){
    console.log("Welcome to the session")
}*/


(function(){
    console.log("Welcome to the session")
}())


function loopme (userInput){
    for(i=0;i<userInput;i++){
        console.log(i)
    }
}


function * loopme(userInput){
    for(i=0;i<userInput;i++){
        yield i
    }
}

var out = loopme(10)
undefined
out.next()
{value: 0, done: false}
out.next()
{value: 1, done: false}
out.next()
{value: 2, done: false}
out.next()
{value: 3, done: false}
out.next()
{value: 4, done: false}
out.next()
{value: 5, done: false}
out.next()
{value: 6, done: false}
out.next()
{value: 7, done: false}
out.next()
{value: 8, done: false}
out.next()
{value: 9, done: false}
out.next()
{value: undefined, done: true}
out.next()
{value: undefined, done: true}
out.next()
{value: undefined, done: true}