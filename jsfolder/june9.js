/*June 9 Loops in JS:
    1) for-loops: through a block of code a number of times.
    2) for/in: loops through the properties of an object
    3) for/of loops through the values of an iteratable object.
    4) while: loops through a block of code while a specified condition is true.
    5) do/while: loops through a block of code while a specified condition is true. */

/*1) for

for(statement 1; condition; inc/decr){
    //when condiiton is true this block will be executed
}

Example*/
for (let i = 0; i < 6; i++) {
    console.log(`The number is ${i}`);
    
}// it is same as apex

//Loop Scope: Using var and let in a loop
//Use var variable, the variable declared in the loop. Redacles the variable outside the loop;
var i =3;
console.log('After loops i value is '+i); //After loops i value is 3
for (var i = 0; i < 6; i++) {
    console.log(`The number is ${i}`);
    
}
console.log(`after loops i value is `+i); //after loops i value is 6

//using let, the variable declared in the loop does not redeclare the variable outside of the loop.

let i =3;
console.log('After loops i value is '+i); //After loops i value is 3
for (let i = 0; i < 6; i++) {
    console.log(`The number is ${i}`);
    
}
console.log(`after loops i value is `+i); //after loops i value is 3
//The i variable in scope of loop did not change the value of i variable outside.Because they are two different variables.

//2) while: it will execute the code block when condition is true.
//Example
let i = 0;
while (i<11) { //write condition in ()
    console.log(`The number is ${i}`);
    i++;
}

//Print only odd numbers from zero to hundred by using while loop
let odd = 0;
while (odd<100) {
   let a = odd%2;
   if (a!=0) {
    console.log(`${odd} is odd`);
   }
    odd++;
}


//3) do while; this loop will execute the code block once before checkoong if the condition is true,
// then it will repeat the loop as long as  the condition is true
const fruits = ['Orange', 'Banana', 'Apple', 'Kiwi', 'Melon'];
//By using index in loop can you find the lenght of each element in the array.
let i = 0;
do {
    console.log(`The lenght of the element at the index ${i} is ${fruits[i].length}`);
    i++;
} while (fruits[i]);

//Practice: Get only numbers that are divisible by both 2 and 3 (perfect even numbers), then store in an array
const perfectEvenNumber =[];
for (let i = 100; i < 251; i++) {
    if (i%2===0 && i%3===0) {
        perfectEvenNumber.push(i);
    }
    
}
console.log(perfectEvenNumber);
//Lets print array element
let i = 0;
do {
    console.log(perfectEvenNumber[i]);
    i++;
} while (i<perfectEvenNumber.length);

/*Note:
==> Break: The break keyword 'Jump out' of a loop.
==> continue: the continue statement 'Jump over' one iteration in the loop.
*/

//Example
for (let i = 0; i < 11; i++) {
    console.log(`The number is ${i}`);// stops after 5.
    if(i===5){
        break;
    }
    console.log(`The number is ${i}`); //stops after 4
}

//Example
for (let i = 0; i < 11; i++) {
    if(i===5){
        continue;
    }
    console.log(`The number is ${i}`);// no number 5 here, jumped over.
}

for (let i = 0; i < 11; i++) {
    console.log(`The number is ${i}`);// there is a number 5
    if(i===5){
        continue;
    }
    
}

//4) for-in loop: it will iterate over the properties of an object.
 for (const key in object) {
   
 }
 /*
 ==> it iterate over object(string)
 ==>each iteration return a key
 ==>the key is used to access the value of the key
 ==>tha value of the key is fruits[key],fruits[index] */
 //Example
 const std = {fName : 'Basak', lName :'D', age:18};
 for(let x in std){//x is representing key in each iteration
    console.log(x);
console.log(std[x]);
}

//using for-in with array:
const number=[2,4,8,10,15,20,7,67,90];
for(let x in number){// is representing index of the elements when working with arrays
    console.log(number[x]);// 
    if(number[x]%2===0){
        console.log(`The element (${number[x]}) at the index ${x} is even number.`) // The element (2) at the index 0 is even number. etc...
    }
}

//for of Loop: Js forofloop statement iterate through the values of the iteratable object.
//It lets you iterate over iteratable data structure such as array, string, maps, more

const fruits = ['Orange', 'Banana', 'Apple', 'Kiwi', 'Melon'];
for(let x of fruits){ // the x variable is representing the elements itself. this time we are using of not in.
    console.log(x);
console.log(`The lenght of the element is ${x.length}`);
}

//Example:Create an array which contain numbers from 1 to 1000 then iterate over that array to find perfect odd numbers by using for of
const number = [];
for (let i = 0; i < 1001; i++) {
    number.push(i);
}
const oddPerfNum = [];
for (let x of number) {
    if (x%2!=0 && x%3===0) {
        oddPerfNum.push(x);
    }
}
console.log(oddPerfNum);

//Practice1: Lets create function that generate a random password of a specified lenght

function generatePassword(len){
    var chars ='ABCDEFHHIJKLMNOPQRS';
    let password = '';
    for (let I = 0; I < len; I++) { //iterate len many times to generate password
       let randomIndex = Math.floor(Math.random()*chars.length);
       //math.random will return random between 0=1: 1* chars.lenght, might be a decimal part
       //marh.floor convert that decimal to whole number.
        password+=chars.charAt(randomIndex);
        
    }
    return password;
}
//call the password with 8 character.
let result= generatePassword(8);
console.log(result);

//Create a function to reverse any string:
function reverseStr(str) {
    let reserved = '';
for (let i = str.length-1; i>=0; i--) {
    reserved+=str.charAt(i);
    
}
return reserved;
}
//lets call reverStr();
let originalStr= 'Hello Everyone';
console.log(reverseStr(originalStr));

//practice: create a function that check if number is prime or not;
function checkPrime(num) {
    if (num<=1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if(num%i===0){
            return false;
        };
        
    }
    return true;
}
//calling the  function
console.log(checkPrime(547));

//Practice find the largest number in an array;
let numbers=[];
for (let i = 100; i < 1501; i++) {
    numbers.push(i);
}
//
function findMaxNumber(numbers){
    let max = 0;
    for(let num of numbers){
        max = Math.max(max, num);
    }
    return max;
}
console.log(findMaxNumber(numbers));