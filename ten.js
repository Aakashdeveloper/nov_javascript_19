Date()
"Thu Nov 28 2019 16:06:10 GMT+0000 (Greenwich Mean Time)"
var a = new Date().getDate()
undefined
a
28
var mydate = new Date()
undefined
mydate.getDay()
4


switch(new Date().getDay()){
    case 0:
        console.log('Today is Sunday')
        break;
    case 1:
        console.log('Today is Monday')
        break;
    case 1:
        console.log('Today is Tuesday')
        break;
    case 4:
        console.log('Today is Thrusday')
        break;
    default:
        console.log('Wrong Input')
        break;
}


var a ="nareshit"
switch(a){
    case 'aakash':
        console.log('You are trainer')
        break;
    case 'nareshit':
         console.log('You are institute')
         break;
    case 'javascript':
         console.log('You are subject')
         break;
}


you have take one array of users 
["john","eve"]
take one input from user as Name
If user is part of array than print "welcome"
Else add that user to array and print array
