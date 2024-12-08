var userName = "Hello my name is Hassan ";
console.log(userName.repeat(2));
console.log(userName.length);
console.log(userName[0]);
console.log(userName.charAt(1));

console.log(userName[100]); //undefinded
console.log(userName.charAt(100)); // 


console.log(userName.indexOf('s'));
console.log(userName.indexOf('s',3));//start from 3

console.log(userName.lastIndexOf('a'));

console.log(userName.slice(0,5));
console.log(userName.split(' '));
console.log(userName.split(' ',2));


console.log(userName.substr(2,5));
console.log(userName.search("Hassan"));