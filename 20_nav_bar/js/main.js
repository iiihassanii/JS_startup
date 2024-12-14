let openNav = document.getElementById('open');
let closeNav = document.getElementById('close');
let container = document.getElementsByClassName('container')[0];

openNav.onmousedown = ()=>{
        container.classList.remove('hide')
        openNav.classList.add('hide');
}
closeNav.onmousedown = ()=>{
        openNav.classList.remove('hide')
        container.classList.add('hide');
}