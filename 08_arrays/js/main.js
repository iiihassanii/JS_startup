let names = ['Hassan','abdelazim', 'suliman', 'Abdelwahid'];
names.push("venus")
console.log(names);

names.unshift("Add at first");
console.log(names);


console.log(names.slice(2,3));
names.splice(1,2,"NEAR")
console.log(names);

//search
console.log(names);
console.log(names.indexOf('suliman'));
console.log(names.includes('suliman'));

//sort
console.log(names.sort());
console.log(names.reverse());


//concat
let arr1 = ['ahmed', 'omnia', 'taleen'];
let arr2 = ['hassan', 'sabah', 'abdelazim'];
console.log(arr1.concat(arr2));

//join
console.log(arr2.join('#'))