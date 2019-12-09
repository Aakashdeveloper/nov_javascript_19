function calc(operator){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    if(operator==='add'){
        out = parseFloat(a)+parseFloat(b);
    }else{
        out = parseFloat(a)-parseFloat(b);
    }
    document.getElementById('output').innerText=`Output is ${out}`
}



/*function add(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    out = parseFloat(a)+parseFloat(b);
    document.getElementById('output').innerText=`Output is ${out}`
}
function sub(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    out = parseFloat(a)-parseFloat(b);
    document.getElementById('output').innerText=`Output is ${out}`
}*/
