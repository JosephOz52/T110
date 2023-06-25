/*
multiple line comments
*/
//Single line comments
/*JS Identifiers: are used to name variables,functions,classes.A JS name must begin:
A letter
A dollar sign
or underscore
*/
/*js  variables: There are 4 ways to create a variable in JS
1 var
2 let
3 const
4 nothing, when you do not define what kind if variable
*/
/*
JS Features:
1 Unlike Apex JS is not strongly typed language

Statements in JS */

let stdName; // declare/ create stdName Variable
//as you can see we did not tell JS what kind if datatype will my variable have
stdName = "Basak";
console.log(StdName); // similiar to system.debug() in apex
stdAge = 18;
//After you used, you can tell JS this variable is var variable.
var stdAge;
//Example
let a, b, c,;
a = 10; b = 15;
c = a+b;
console('Value of c: ' + c);

//Even you do not use ; at the end of the statement JS may not complain, but its better practive to use ; to seperate statements.
//Example
let className = 'JavaScript';
console.log('We are learning ' + classname);

//Example
let stdName = Figen;
StdName = 'Basak';
console.log(stdName);
console.log(StdName); //Case senstive.

//Declaring a JavaScript Variable:
/* 
1) var keyword is used in all JS code from 95 to 2015. If you want your code to run in older browser you should use var.
    var variables can be reassigned to a new value.
Example:
*/
var std1 = 'Rabiye'; // we declare std1 by using var keyword.
console.log(std1);
std1 = 'Dilek' ;
console.log(std1);

/*
2) Redeclaring a JS var variables are allowed anywhere in program.You can redaclare var variable after using them.
But if you create variable using let or const keyword you are not allowed to do that.

Example 2 */
var stdAge; //declare stdAge with var keyword
stdAge = 18;
console.log(stdAGe);
var stdAge; //as you can even stdAge been created before it is ot complaining about duplicate
console.log(stdAge);

let fruit = 'APple';
fruit = 'Orange'; // not complaining reassigning.
let fruit = 'melon'; // fruit has already been declared.

/* 3) Variable defined with var are hoisted to the top and can be initialized at any time.
Hoisting; variables and functions are hoisted which mean you can use them before create them*/
//Example3

x=15;
y=25;
z=x+y;
console.log(z); // 40
var x,y,z ; // works, you can assign before declaring.
let x,y,z ; // doesnt work with let. first declare then assign.

/* 4) Var variables are not block=scope which mean variable created in {} can be reached from outside.
Example 4 */

var carModel; // undefined
carModel = 'Tesla s';
console.log(carModel);
{
    carModel = 'Toyota Corolla';
    console.log(carModel);
    var carAge = 2;
}
carModel = 'Toyota Camry';
carAge = 5; // we are able to assign new value to variable that we create in  above block.
console.log(carModel);
console.log(carAge);
//Block Scope; The variables created in a block can be used only in that block.

