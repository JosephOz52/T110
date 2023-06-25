//june 5

//JS FUnctions:
function Name(){
    //Code
    //Lexical/Local area of function/ variables
    return
}

//Function as Varaible:
let funcVariable = function(){

}

//Arrow Function

let myFunction = ()=>{

}

//Continue to Data Types:
//Primitive Data Types are done.
/*
JS Objects: We already know that JS variables are containers to hold data. Objects are variable too.
It is a kind of variables which can hold many data (values).
==> Js objects are written with curly braces {}
==> Object properties(items) are written as name:value pairs seperated by comma.
==> Objects can hold funtions
Example:*/
const student = {
    fName: "Yener",
    lName: "Celikbag",
    age: 20,
    eyeColor: "Brown",
    DOB:"01/01/2000",
    fullName: function(){
        return this.fName+" "+this.lName;
    }
}

//How to access object properties:
//Way1 ObjectName.PropertyName
//Way2 ObjectName['PropertyName']
console.log(student.fName); // Yener
console.log(student['lName']); // Celikbag
//Lets reach function property of the object
let fullName = student.fullName();
console.log(fullName); // Yener Celikbag

//this keyword: in Js this keyword refers the object which we are in. IN the above example, this refer the strudent object.

//JS Array: an array can hold many values, under a single name. You can reach values by referring to an index number.
/* Creating Array:
 ==> JS Arrays are written with [] square brackets
 ==> Array items are seperated by commas.
 */
//Example:
const cars = ['Volvo', 'Tesla', 'Toyota', 'Honda']
console.log(cars[0]); // Volvo

//Create array then assign values
const fruits = [];
console.log(fruits);
fruits[0]='Apple';
fruits[1]='Orange';
fruits[2]='Banana';
console.log(fruits);
fruits[0]='Melon';
console.log(fruits);

//Way2 to create array
const cars = new Array('Volvo', 'Tesla', 'Toyota', 'Honda');
console.log(cars);
//Arrays are also Objects:
console.log(typeof cars);
/*Note; Arrays are special kind of objects. The type of operator in JS return object for arrays.
    ==> Arrays use numbers to access its 'elements' ==> cars[index]
    ==> Objects use name to access its members ==> cars[propertyName], cars.PropertyName
*/
//Note you can have objects in array, you can have functions in array, you can have arrays in array
//Example
const myArray=[];
myArray[0]=Date.now;
myArray[1]=myFunction;
myArray[2]=cars[];
//Note:An objecy declared with const keyword cannot be redaclered.It does not define a constant objects.
//it define constant reference to an array.so you can still change the element of the objects.

//Array methods:
//1) toString(): the js method toString() converts an array to string of values.By default it will separate elements by comma.
const fruits=['Banana', 'Orange', 'Apple', 'Mango'];
let strFromArray = fruits.toString();
console.log(typeof strFromArray);
console.log(strFromArray);

//2) join(): it behaves jsut like toString(), in addition you specify the separator.
const fruits = ['Banana', 'Oranga', 'Apple', 'Mango'];
let strFromArray = fruits.join('*');
console.log(typeof strFromArray);// string
console.log(strFromArray); // Banana*Oranga*Apple*Mango

//3) pop(): the pop() method removes the last element from an array. It will return the value that last element.
const fruits = ['Banana', 'Oranga', 'Apple', 'Mango'];
let popedElement = fruits.pop();
console.log(popedElement);//[ 'Banana', 'Oranga', 'Apple' ]
console.log(fruits);

//4) push(): this method adds a new element to an array (at the end).
const fruits = ['Banana', 'Oranga', 'Apple', 'Mango'];
fruits.push('Kiwi');
console.log(fruits);//[ 'Banana', 'Oranga', 'Apple', 'Mango', 'Kiwi' ]

//shift(); it is similiar to pop, but it will remove the first element.
const fruits = ['Banana', 'Oranga', 'Apple', 'Mango'];
console.log(fruits[0]); //Banana
let shiftedElement = fruits.shift(); 
console.log(shiftedElement); //Banana
console.log(fruits); //[ 'Oranga', 'Apple', 'Mango' ]
console.log(fruits[0]); //Oranga
//similiar to pop, shift will return the element that been removed.

// 6) unshift(); this method will add new element at the beginning of the array.
const fruits = ['Banana', 'Oranga', 'Apple', 'Mango'];
fruits.unshift('Melon');
console.log(fruits); //[ 'Melon', 'Banana', 'Oranga', 'Apple', 'Mango' ]

//7) changing Elements: Array elements are accessed by using their index number.
const fruits = ['Banana', 'Oranga', 'Apple', 'Mango'];
fruits[1] = 'Kiwi';
console.log(fruits); //[ 'Banana', 'Kiwi', 'Apple', 'Mango' ]

//You can use lenght to add new element at the end of array.
const fruits = ['Banana', 'Oranga', 'Apple', 'Mango'];
console.log(fruits.length); //4
fruits[fruits.length]; 
console.log(fruits); // [ 'Banana', 'Oranga', 'Apple', 'Mango' ]

//8) Delete(); array elements can be deleted using that method.
const fruits = ['Banana', 'Oranga', 'Apple', 'Mango'];
delete fruits[1];
console.log(fruits); //[ 'Banana', <1 empty item>, 'Apple', 'Mango' ]
//note; using delete leaves undefined holes in an array, so its better to use pop() or shift () method.

//9) concat(); create a new array by merging existing arrays.
const fruits1= ['Banana', 'Orange'];
const fruits2= ['Apple', 'Mango'];
const newFruit = fruits1.concat(fruits2);
console.log(newFruit); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]

//10)Splice() Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
const fruits = ['Banana', 'Oranga', 'Apple', 'Mango'];
fruits.splice(2,2,'Kiwi', 'Melon', 'Berry'); // starting from index 2, remove 2 elements, then add these new elements.
console.log(fruits); // [ 'Banana', 'Oranga', 'Kiwi', 'Melon', 'Berry' ]
//the first parameter is start position, secibd parameter define number of element to be deleted, then you can add new elements.

//Note: instead of delete method by using this method by using this method you can remove elements without leaving holes in array
const fruits = ['Banana', 'Oranga', 'Apple', 'Mango'];
const removedElement = fruits.splice(3,2); 
console.log(removedElement); //[ 'Mango' ]
console.log(typeof removedElement);// object

/*11) slice(): this method slice out a piece of an array into a new array.
==> this method will create a new array.
==>it wont modify/does not remove any elements from source array.
==>slice() method take two parameters startIndex, endIndex. it will create a new array from strIndex (included) to lastIndex(not included). */

const fruits = ['Banana', 'Oranga', 'Apple', 'Mango', 'Berry'];
const newArray = fruits.slice(2);//starting from index2 to end of array a new array will be created.
console.log(newArray); //[ 'Apple', 'Mango', 'Berry' ]
console.log(fruits); //[ 'Banana', 'Oranga', 'Apple', 'Mango', 'Berry' ]

//
const fruits = ['Banana', 'Oranga', 'Apple', 'Mango', 'Berry'];
const newArray = fruits.slice(1,3);
console.log(newArray); //['Oranga', 'Apple']

const fruits = ['Banana', 'Oranga', 'Apple', 'Mango', 'Berry'];
const clonedFruits = fruits.slice(0);
console.log(clonedFruits); // [ 'Banana', 'Oranga', 'Apple', 'Mango', 'Berry' ]
console.log(fruits); //[ 'Banana', 'Oranga', 'Apple', 'Mango', 'Berry' ]

//12) sort(); this method will sort an array alphabetically.
const fruits = ['Banana', 'Oranga', 'Apple', 'Mango', 'Berry'];
fruits.sort();
console.log(fruits); //[ 'Apple', 'Banana', 'Berry', 'Mango', 'Oranga' ]

//13) reverse(); reverse the elements in an array

const fruits = ['Banana', 'Oranga', 'Apple', 'Mango', 'Berry'];
fruits.reverse();
console.log(fruits);

//sort in descanding order
const fruits = ['Banana', 'Oranga', 'Apple', 'Mango', 'Berry'];
fruits.sort();
fruits.reverse();
console.log(fruits); // [ 'Oranga', 'Mango', 'Berry', 'Banana', 'Apple' ] 

//JavaScripts Date Objects;
//Date objects are created with new date() constructor.
//1) new Data(); create a new date objects with current date and time.
//example
const todayDate = new Date();
console.log(todayDate); //2023-06-12T09:46:50.386Z
//2) new Date(year, month, day, hours,minutes,seconds,milliseconds);
//Note; JS count months starting from 0.

//Example
const dt1 = new Date(2023,05,06);
console.log(dt1); //2023-06-06T04:00:00.000Z
const dt1 = new Date(2023,06,06,10,30,30);
console.log(dt1); //2023-07-06T14:30:30.000Z
//NOte: JS starts counting dates from JAn 1,1970.

//3) new Date (dateString): that will create a date object from a date string.
//example:
const dt = new Date('June 06, 2023 8:48:00');
console.log(dt); //2023-06-06T12:48:00.000Z
console.log(typeof dt); //object



