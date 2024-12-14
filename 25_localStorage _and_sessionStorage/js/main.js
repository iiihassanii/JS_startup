

if (localStorage.color != undefined)
        setColor(localStorage.color);
function setColor(color){
        localStorage.color = color;
        document.body.style.backgroundColor = color;
}
