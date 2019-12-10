const validate=()=>{
    var name=document.getElementById('fname').value;
    if(name==' '||name == ''){
        document.getElementsByClassName('output')[0].innerText="Please enter first name"
        document.getElementsByClassName('output')[0].style.color="red"
    }else{
        document.getElementsByClassName('output')[0].innerText=""
        out = name.charAt(0).toUpperCase()+name.slice(0).toLowerCase()
        document.getElementById('fname').value=out
    }
}

const myForm = () => {
    alert("submitted")
}