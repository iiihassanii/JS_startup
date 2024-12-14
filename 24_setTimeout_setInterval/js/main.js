let cancel = setTimeout(()=>{
        document.write("Hello")
}, 2000) // works after 2 sec 
// works for once

clearTimeout (cancel);//cancel
let i = 0;
let cancel1 = setInterval(()=>{
        document.write(`This functions worked for ${i}times`)
        i == 4?clearInterval(cancel1):i++;

}, 1000)

