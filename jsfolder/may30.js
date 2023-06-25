/* may 30
declaring Js variables:
1var
    unlike const variable, you can do reassignment to var variables. 
    unlike const and let variables, var variable can be redeclared.
    var variables are hoisted at the top, soyou can use them before you delare them.
    unlike const and let variable, var variables are not block-scope. variables within block cannot be used outside the block.
    block-scope: variable that been created within block is beling to that block. cannot be used/reached outside of block.

2let
3const
4nothing

Note; When you did not specift a key word to create variables, by default they are var variables.
*/

//Example: Reassignemnt:
var lateStd = 'Leila';
console.log(lateStd);
lateStd = 'Turan'; //reassigment
console.log(lateStd);
// on the other hand const variables cannot be reassgined
const stdId=10011535420; //creating variable
stdId = 10011; //reassign a value is not possible with const variable.
console.log(stdId); // not allowed

//Example 2;
var stdName = 'Aysel';
console.log(stdName);
var stdName; // redeclared
console.log(stdName); // Aysel

//Example

x=10;
z=15;
console.log(x+z); //25 before declaring x and z we are able to use them,

var x,z; //declaring x and z variables
console.log(z); // 15

//Example
{
    var fruit = 'Melon';
    console.log(fruit);
    let vegatable = 'Tomato';
    console.log(vegatable);
}
fruit= 'Banana';
console.log(fruit);
console.log(vegatable); // vegatable is not defined.

/* 2) let:
    unlike var variables, let variables can not be redaclered
    unlike var variables, variables that been created with let and const keywords are block-scope. 
        variables that been created within {} are block to the block, so they cannot be reached from out of that block.
    unlike var variables, variables that been created with let and const keyword must be declare before you use them.
    */
   //example
   let myName = 'John';
   console.log(myName);
   let myName = '  ' // already declared cant redeclare

   //Example
   {
    let lastName = 'Uslu';
    console.log(lastName);
   }
   console.log(lastName); // lastName is not defined.
   //Note; You can create a variable with same name that you create in a block. In your system they will be different variables even they share same name
   let lastName;
   lastName = 'Bayram';
   console.log(lastname);

//Example 3; you can not use variable then say this is let variable.
stdName = 'Leila';
console.log(stdName);
let stdName; // cannot access 'stdName' before initialization

/* 3) const: If you wanta variable with a fixed value then use const. like final keyword in apex.

   const variable and let variable are block-scoped, but you can redeclare same variable in different block.
   const variable must be assigned before a value when it declared. Also value cannot be changed.

   */
  const stdId = 'B0100';
  console.log(stdId);
  {
    console.log(stdId);// B0100
    //note:child block can use variables from outher/parent block.
    const driverid = 1594826;

  }
  console.log(driverId);// driverId is not defined
  const driverId = 23215484;
  console.log(driverId); // 23215484

  //Example2
  let price; // declare variable
  price = 100;
  console.log(price);
  const newPrice; //const declarations must be initilized. declare a value.
  newPrice = 250;
  console.log(newPrice);

  //Example
  const product = 'Iphone';
  product = 'Macbook';
  console.log(product); // assignement to constant variable. cannot change the value.

  //JS Operators:
  /* 1) Arithmatic Operators:
  (+) addition, also concatenation
  (-) substraction
  (*) multiplication
  (**) exponentiation
  (/) division
  (%) modulus (division remainder)
  (++) increment by one unit
  (--) decrement by one unit
  */

  //Example:
  let x = 5;
  x++;
  console.log(x); // 6
  console.log(x++); // 6. psot increment. Print then increment
  console.log(x); //7
  let z=10;
  console.log(-z);// 9. pre decrement.

  //example
  let x = 2;
  let y = 4;
  let c = x**y;
  console.log(c); //16

  // example;
  let a = 22, b= 5;
  let z = a%b;
  console.log(z); //2

  /* 2) Assignment Operators:
  (=) equality
  (+=) x+=y, x= x+y
  (-=) x-=y, x= x-y
  (*=) x*=y, x= x*y
  (/=) x/=y, x= x/y
  (%=) x%=y, x= x%y (remainder)
  (**=) x**=y, x= x**y
  */

  //Example
  let x = 10;
  x+=5;
  console.log(x); // 15
  x-=10;
  console.log(x); // 5
  x*=6;
  console.log(x); // 30
  x/=3;
  console.log(x); // 10

  /* 3) Logical Operators;

    (&&) logical and
    (||) logical or
    (!) logical Not
    */

    let x=10, y=5;
    let result = x<15 && y>3;
    console.log(result);
    let result2 = x==5 || y==5;

    /* 4) Comparision Operators
        (==) equal to
        (===) equal value and equal type
        (!=) not equal
        (!==) not equal value or not equal type
        (>) greater than
        (<) less than
        (>=) greater than or equal to
        (<=) less than or equal
        (?) ternary operator
        */

        //Example
        let x=100;
        console.log(x==200); // false
        let y='100';
        console.log(x==y);// true even x is number and y is string we got true.
        console.log(x===y); // false. since data type is not same we got false.
        //syntax: conditional ternary operator:
        //variableName=condition ? value1: value2;
        let age = 20;
        voteAble= age>18?'yes can vote':'no cannot vote';
        console.log(voteAble); // yes can vote

        /* Concept of Data types
        To be able to operate on variable, it is important to know something about the data tyoe if the container.
        There are six primitive data tyoes string, number, boolean , null, undefined, symbol.
        Also, we have an object type which include collection, function, date, etc. */
        // Type of Operator: You can use that operator to find out the type of JS variable
        // Example
        let x; // we have declared x variable but we did not initilizate value
        console.log(typeof x);// undefined
        x= 5 
        console.log(typeof x);//number
        x = 'five';
        console.log(typeof x);//string
        //JS variables are dynamic, you can assign any data type to your container at nay time in your system.

        /*1) String:A string or a text is a series of chracters like 'John Wick' . Strings are written with quotes. 
        You can use single or double quotes.

        String as an object: NOrmally JS string are primitive values, creayed from literals but string can also define as objects with keyword new
*/
//Example
let stdName= 'Basak'; // create string from literal.
console.log(stdName);
console.log(typeof stdName); // string
let lastName = new string ('Yurt');
console.log(typeof lastName); //object

//String Methods and Properties
//1) Length: return the lenght of string
//Examlpe
let str= 'aysel';
console.log(str.length); // 5
//2)slice(strIndex, endIndex); extract a part of string and return the extracted part as a new string
//strIndex is inclusive, endIndex is exclusive.
//Example
let str = 'Apple, Banana, Kiwi';
let newStr = str.slice(7,13);
console.log(newStr);
//Note: Js also count index from zero/0.
//Slice() accept negative parameters. In that case position is counted from end of string.
//Example
let str = 'Apple, Banana, Kiwi';
let newStr = str.slice(-12,-8);
console.log(newStr);
//Note:When you omit the second parameter, the method slice out the rest of the string.
let str = 'Apple, Banana, Kiwi';
let newStr = str.slice(7);
console.log(newStr);