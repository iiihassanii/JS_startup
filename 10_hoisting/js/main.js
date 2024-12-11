
console.log(x);

var x;
var x;
let y;
console.log(y);//error (let)
// let y;
hi_functions();
function hi_functions(){
        document.write("HELLo");
}

//hello(); // cant do that
let hello = function(){
        document.write("HELLo");
}
hello();

(function (){
        document.write("HELLo");
})();

(function(){
        console.log("hello;");
})();

function calc( ...num ){
        let counter = 0;
        for (let i = 0; i < num.length; i++)
                counter+= num[i];
        console.log(counter);

}
calc(2,5,6,7);


let arrow = () => "hello arrow function";
console.log(arrow());


































let arrf = ()=> ("Hello world");

document.write(arrf());