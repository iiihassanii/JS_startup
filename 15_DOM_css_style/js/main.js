let container = document.getElementById('container');
//console.log(container);
container.innerHTML= '<p>Hello world</p>';

container.style.backgroundColor = '#ededed';
container.style.padding = '10px';
container.style.borderLeft = '10px solid #fa0'


// second way

container.style.cssText = `
background-color: #000;
color: white
`;


// third
container.style.setProperty('color', 'red', 'important');



//create element in js
//create the tag
let elem = document.createElement('h1');

// create content
let content = document.createTextNode("Hola");

elem.appendChild(content);
document.body.appendChild(elem);
console.log(elem);