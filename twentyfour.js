document.getElementsByTagName('h1')
HTMLCollection [h1]
document.getElementsByTagName('h1').innerText
undefined
document.getElementsByTagName('h1')[0].innerText
"I'm AAKASH HANDA"
document.getElementsByTagName('h1')[0].innerText ="I'm nareshIt"
"I'm nareshIt"

document.getElementsByClassName('scroll')
HTMLCollection(4) [a.scroll, a.scroll, a.scroll, a.scroll]0: a.scroll1: a.scroll2: a.scroll3: a.scrolllength: 4__proto__: HTMLCollection
document.getElementsByClassName('scroll')[1].innerText
"Experience"
document.getElementsByClassName('scroll')[1].innerText="Profile"
"Profile"
document.getElementsByClassName('scroll')[1].style.color="red"
"red"

document.getElementById('contact')
<div class=​"welcome contact" id=​"contact">​…​</div>​
document.getElementById('contact').style.background="grey"
"grey"