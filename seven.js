var a = 10
var b = 20


var a = 10
if(a%2==0){
    // console.log("Number "+a+ " is even")
    console.log(`Number ${a} is even`)
}else if(a%3==0){
    console.log(`Number ${a} is divisible by 3`)
}
else{
    console.log("Number "+a+ " is odd")
}


var a = 12
if(a%2==0){
    // console.log("Number "+a+ " is even")
    console.log(`Number ${a} is even`)
}
if(a%3==0){
    console.log(`Number ${a} is divisible by 3`)
}
else{
    console.log("Number "+a+ " is odd")
}

//ternery operator

var a = 12
a > 12 ? "ok" : "not ok"

a > 12 ? a+1 : a-1

//Luck Game
Generate one random number between 1 to 100;
Now take input from user between 1 to 100 
in case user enter greater or less value throw err;
if randon number and user input match than conosle win
else loose 


var lucknumber = Math.floor(Math.random()*(99))+1
var userinput = prompt('Please enter number')
if(parseInt(userinput) < 1 || parseInt(userinput) > 100){
    console.log('Please enter valid value')
}else if( lucknumber == parseInt(userinput)){
    console.log("User Win")
}else {
    console.log("User loose")
}



Every time user enter any value or all the random value generated
when user win or loose you have show complete array




