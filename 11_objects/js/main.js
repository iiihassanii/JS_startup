//create object
let car = {
        title: 'bmw',
        price: 500000,
        color: ['white','red','blue'],
        model: 2020,

        hello:function(){
               return ("Hello object");
        }
};

console.log(car.hello());

//nested objects

let user = {
        firstname: 'Hassan',
        lastname: 'Abdelwahid',
        email: 'hassanabdelazim.max@gmail.com',
        age:25,
        active: true,
        skills: ['js','python','node js'],
        phonenumber:{
                firstnumber: '0111030337',
                socendnumber:'0569468469'
        },


        isActive:function(){
                return user.active === true? "User is active" : "User is not active";
        },
        getAge:function(){
                return user.age > 18? `Welcome ${user.firstname}`: 'You are not allowed to be here';
        }
};

console.log(user.phonenumber.firstnumber);
console.log(user.isActive());
console.log(user.getAge());


// add data into object
let obj = {};

obj.name = 'Hassan'
obj.hello = function(){
        return "Hello";
}

console.log(obj.hello());