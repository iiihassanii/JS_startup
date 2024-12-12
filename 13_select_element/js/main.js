let lilas = document.getElementById("LILASIE");
lilas.style.color = 'red'
let lolie = document.getElementsByClassName("LILASIE")[0];
lolie.style.color = 'red'
document.getElementsByTagName('h1')[2].style.color = 'blue';

//works like css, it use . and # 
let cutie = document.querySelector('.LILASIE'); //return first element
cutie.style.color = 'pink'

cutie = document.querySelectorAll('.LILASIE')[2];
cutie.style.color = 'pink';
let body = document.body;

let hi = document.getElementsByClassName('hi')[0];
console.log(hi.hasAttribute('style'));
hi.style.backgroundColor='red';
console.log(hi.getAttribute('style'));
hi.setAttribute('style', 'background-color: blue;');
console.log(hi.hasAttribute('style'));
hi.removeAttribute('style');
console.log(hi);