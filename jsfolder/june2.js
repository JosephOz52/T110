/*June 2, 2023
Data types
1) Primitive Data: String, Number, Boolean, Null, Undefined, Symbol
2)Object: colections, data, functions
*/
//NUmbers methods: toString(), toExponential(), toFixed(), toPrecision(),
//Number() it convert other JS variables to number:
//6) parseInt() parse a string to whole number, spaces are allowed if there is more number after space the first number will be converted

//Example
let str = '-10.00';
let numFromStr = parseInt(str);
console.log(typeof numFromStr); // number
console.log(numFromStr); // -10

let str = '10 20 30 ';
let numFromStr = parseInt(str);
console.log(typeof numFromStr); // number
console.log(numFromStr); // 10

let str = 'year 10';
let numFromStr = parseInt(str);
console.log(typeof numFromStr); // number
console.log(numFromStr); // NaN

//7) parseFloat(); will conver string to number with decimal part. spaces are allowed but will only conver the first number
//example
let str = '100.89 200 300.50';
let result = parseFloat(str);
console.log(typeof result); //number
console.log(result); //100.89

let str = '100.89 TL price of jacket';
let result = parseFloat(str);
console.log(typeof result); //number
console.log(result); //100.89

let str = 'price of jacket 100.89 TL';
let result = parseFloat(str);
console.log(typeof result); //number
console.log(result); // NaN

//Boolean: boolean data type take values of true or false. Unlike apex, JS boolean variable cant have null values.
//We use boolean for conditional statement. if/else

//Example
let variable = Boolean(10>9);
console.log(variable); // true

//Falsy/Truthy values: there are certain values in JS that return true or false when converted into boolean. Such values called truthy and falsy
//Falsy Values: False, "", 0, -0, NaN, Null, undefined
//Example
let var1 = 0;
console.log(Boolean(var1)); // false

let var1 = 'price 100';
let numFromStr = parseInt(var1);
console.log(numFromStr); // NaN
console.log(Boolean(numFromStr)); // false

let var3;
console.log(var3); // undefined
console.log(Boolean(var3)); //false
//truthy values: true, text, 72,-72, infinity, -infinity, {}, []

let var1 = -15;
console.log(Boolean(var1)); // true

let var1 = 'any text';
console.log(Boolean(var1)); // true

//4) undefined: the variables without any data type, has undefined data type.
let stdName;
console.log(typeof stdName); // undefined

/*coercion; when you trying to compare/operate different types the JS engine attemps to connvert one type into another so it can
compare/operate on values.
Type coercion priorty order: string, number, boolean */

console.log(2+"7"); // 27 because string comes first after number on priorty. turn number 2 to string and add 7 to it.

let var4 = true-5;
console.log(var4); // -4. true is 1 in numbers. 

/* JS Functions

Functions are a block of code designed to perform a particular task. JS function is executed when something invokes
them, events occur(click button) or autinatically(self invoked) */

//syntax:
function nameOfFunction (para1, para2, ...,paraN){
//Code to be executed
}
//Example1 create a funtion
function addNumber(x,y){
    return x+y; //function will return the sum of x and y parameter.
}
//Invoke a function
console.log(addNumber(12, 15)); // 27

//Local Variables ==> Lexical Environment (Lexical Scope); variable declared within JS function become
// local to the function. Local variables can be only accessed from within the function.
//Functional Scope: Any variable inside a function is in scope of the function
//Example
function myFunction(){
    let carName = "Tesla";
    //Code in here can use carName
    console.log(carName);// tesla
}
//Code here cannot use carName variable
myFunction();
console.log(carName); //carName is not defined

//Note: Variables in the outher scope can be accessed in a nested scope.
// But variable inside a nested scope cannot be accessed by the outher scope.

//Example:
let stdName = 'Rabia';
let lastName = 'Null';
function getFullName(){
    let fullName = stdName + ' ' + lastName;
    return fullName;
}
console.log(getFullName()); // Rabia Null

//Example2:
function outherFunction(){
    let stdName = 'Rabia';
    let lastName = 'Null';
    function getFullName(){
    let fullName = stdName + ' ' + lastName;
    let stdAge = 18;
    return fullName;
    }
    return getFullName()
}
console.log(outherFunction()); // Rabia Null
//getFullName() is able to reaach stdName and lastName from outside and we able to print


function outherFunction(){
    let stdName = 'Rabia';
    let lastName = 'Null';

    function getFullName(){

    let fullName = stdName + ' ' + lastName;
    let stdAge = 18;
    return fullName;
    }
    return getFullName() + "Student age is" + stdAge;
}
console.log(outherFunction()); //stdAge is not defined
//cannot able to reach stdName from inner scope.

//Scope Chain: The nested hierarchy of scope is called scope chain. The JS engine looks for variable in the scope
//chain upwards.
let val1 = "Grandparent";
function first(){
    let val1 = 'Parent';
    function second(){
        console.log(val1); // parent
    }
    return second();
}
console.log(first()); // undefinied since method does not have any return, it return undefined.

//JS arrow function: it allow us to write function in shorter way.
//Example
function hello(){
    return "HEllo everyone from JS class";
}
console.log(hello()); // HEllo everyone from JS class

//Convert above function to arrow function
hello = () => "HEllo everyone from JS class";
console.log(hello()); // HEllo everyone from JS class

//Creating Function as variable:
let multiply = function(x,y){//since assigned function to variable no need name function again.
    return x*y;
}
//call multiply function:
let result = multiply(4,6);
console.log(result); // 24

//practice
let age = 15;
let welcome = age<18?
()=> console.log('child'):
()=> console.log('adult');
welcome();

//practice2

let sum = (x,y) => {
    let result = x+y;
    return result;
}

//call function:
let resultFromFunc = sum(15,20);
console.log(resultFromFunc);

//Practice: Create function which check if number is positive, negative or zero

function checkNumber(number){
    if (number>0){
        console.log(number + " is positive");
    }else if(number<0){
        console.log(number+' is negative');
    }else{
        console.log(number+" is zero");
    }
}
//call checkNumber function;
checkNumber(-10); // -10 is negative
checkNumber(100); // 100 is positive
checkNumber(0); // 0 is zero

//practive; create arrow function which will square a number.

let square = (number) => {
    let result = (number*number);
    return result;
}
//call function
let resultFromFunc = square(10);
console.log(resultFromFunc);

//Practice create afunction to calculate area of circle

let circleArea = (radius) => Math.PI*radius*radius;

console.log(circleArea(5));

//practice: create a function to get factorial of number:

function calFactorial(number){
    if(number === 0 || number ===1){
        return 1;
    }else{
        return number * calFactorial(number-1);
    }
}

console.log(calFactorial(4));



