let ksa = document.getElementById('ksa');
let sdn = document.getElementById('sdn');



ksa.onkeyup = ()=>{
        sdn.value = ksa.value * 160.06;
}
sdn.onkeyup = ()=>{
        ksa.value = sdn.value / 160.06;
}