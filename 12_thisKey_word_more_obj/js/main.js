"use strict";
let user = {
        name:'Hassan',

        getName: function(){
                return `Hello ${this.name}`;
        }
}
console.log(user.getName());

//create duplicate obj

let user2 = Object.create(user);
user2.age = 30;
user2.getAge = function(){
        return `I'm ${this.age} years old`
}
console.log(user2.getName());
console.log(user2.age);
console.log(user2.getAge());

//assign objects
let a1 = {
        num1: 1,
}
let a2 = {
        num2: 2,
}
let a3 = {
        num3: 3,
}
let a4 = Object.assign(a1,a2,a3);