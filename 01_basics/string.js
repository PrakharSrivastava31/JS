const name = "Prakhar"
const repo = 10

console.log(`Hello mu name is ${name} and my repo count is ${repo}`);


const gameName = new String('Prakhar-aa-a2222-652')  // it gives key-value pair

console.log(gameName[0]);

console.log(gameName.__proto__); 

console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.trim(-7, 3)
console.log(anotherString);

const newString1 = "    Prakhar   "
console.log(newString1);
console.log(newString1.trim());


const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20', '_'));
console.log(url.includes('prakhar'));


console.log(gameName.split('-'));


 