//2 ways to add to lacal storage
localStorage.setItem('age', 26);
localStorage.age = 26;

// get data from lacal storage
console.log ( localStorage.age);


// cant save object so convert into json

localStorage.user = JSON.stringify({
        name: 'hassan',
        age:25
});
// convert it back
console.log (JSON.parse(localStorage.user));


//delete from storage
localStorage.removeItem(age);
localStorage.clear();
//session storage saves the data till the user close the tab
//but local save it all the time


let inp = document.getElementById('inp');
localStorage.txt != undefined ? inp.value = localStorage.txt:  inp.value = '';
inp.onkeyup = ()=>{
        localStorage.txt = inp.value;
};