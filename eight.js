var a = 10
if(a%2==0){
    // console.log("Number "+a+ " is even")
    console.log(`Number ${a} is even`)
}else{
    console.log("Number "+a+ " is odd")
}



localStorage.setItem("luckcount",1)
undefined
localStorage.getItem("luckcount")
"1"
localStorage.removeItem('luckcount')
undefined
localStorage.getItem('luckcount')
null



var lucknumber = Math.floor(Math.random()*(99))+1
var userinput = prompt('Please enter number');
var count = localStorage.getItem('luckcount')

if(parseInt(count)<5){
    if(parseInt(userinput) < 1 || parseInt(userinput) > 100){
        console.log('Please enter valid value')
    }else if( lucknumber == parseInt(userinput)){
        console.log("User Win game end counter reset")
        localStorage.setItem('luckcount',0)
    }else {
        console.log("User loose")
    }
    localStorage.setItem('luckcount', parseInt(count)+1);
}else{
    console.log("Game End User loose")
    localStorage.setItem('luckcount',0)
}
