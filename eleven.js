for
while
do while
for in
for of


for(i=0; i<10;i++){
    console.log(i)
}

var city = ["Dubai", "NewYork", "Amsterdam", "Delhi", "Helsinki"]

for(i=0;i<city.length;i++){
    var output = `Welcomr to ${city[i]}`
    console.log(output)
}

Welcomr to Dubai
VM72:5 Welcomr to NewYork
VM72:5 Welcomr to Amsterdam
VM72:5 Welcomr to Delhi
VM72:5 Welcomr to Helsinki

var citys  = [["delhi","mumbai","jaipur"], ['Perth',"sydney", "Melbourne"], ["Zurich","Davos","Zenser"]]

for(i=0;i<citys.length;i++){
    for(j=0;j<citys[i].length;j++){
        if(i==0){
            console.log(`${citys[i][j]} is city of India`)
        }else if(i==1){
            console.log(`${citys[i][j]} is city of Aus`)
        }else{
            console.log(`${citys[i][j]} is city of Switzerland`)
        }
    }
}

delhi is city of India
VM176:7 mumbai is city of India
VM176:7 jaipur is city of India
VM176:9 Perth is city of Aus
VM176:9 sydney is city of Aus
VM176:9 Melbourne is city of Aus
VM176:11 Zurich is city of Switzerland
VM176:11 Davos is city of Switzerland
VM176:11 Zenser is city of Switzerland


var i = 0
while(i < 10){
    console.log(i);
    i++;
}

var city = ["Dubai", "NewYork", "Amsterdam", "Delhi", "Helsinki"]
var i =0;
while(city[i]){
    console.log(city[i])
    i++
}

Dubai
NewYork
Amsterdam
Delhi
Helsinki

///////////do while/////////////
var i =0;
do {
    console.log(i)
    i++
}
while(i<10)

var city = ["Dubai", "NewYork", "Amsterdam", "Delhi", "Helsinki"]
var i =0;
do {
    console.log(city[i])
    i++
}
while(city[i])
