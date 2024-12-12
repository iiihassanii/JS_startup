let container = document.getElementById('head');
console.log(container.outerHTML);
container.outerHTML += '<p> hi </p>';
container.inner
console.log(container);


let second = document.getElementById('second');
console.log(second);
console.log(second.previousElementSibling);
console.log(second.nextElementSibling);
console.log(second.parentElement);