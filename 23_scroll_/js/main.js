let btn = document.getElementById('btn');

window.onscroll = ()=>{
        if (scrollY > 400)
        {
                btn.style.display = 'block';
                

        }else{
                btn.style.display = 'none';
        }
}
btn.onmousedown = ()=>{
        scroll({
                top:0,
                left:0,
                behavior:"smooth"
        })
}