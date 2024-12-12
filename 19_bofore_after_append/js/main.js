let before = document.getElementById('before');
let after = document.getElementById('after');
let append = document.getElementById('append');
let content = document.getElementById('content');
let container = document.getElementById('container');
let hola = document.getElementById('hola');
container.style.cssText = `background-color: #ffff80;
height: 50px;
`;

before.onmousedown = ()=>{
        container.before(content);
}
after.onmousedown = ()=>{
        container.after(content);
}

append.onmousedown = ()=>{
        container.append(content);
}



hola.onmouseenter = ()=>{
        hola.classList.add('black');
}

hola.onmouseleave = ()=>{
        hola.classList.remove('black');
}