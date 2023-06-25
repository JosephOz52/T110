/*June 12, Classes in JS
==> Use the keyword class to create a class
==> Always add a method named constructor(){}. if you dont define a constructor, JS will add an empty constructor.
Syntax;
class className{
    constructor(){

    }
    method1(){

    }
}

Note; A JS Class is not an object. It is template for JS objects.
Constructor: is an special meyhod
    1)It has to have the exact name 'constructor'
    2)is is executed automatically when a new object is been created.
    3)it is used to imitialize object properties. */

//Example
class Car{
    constructor(nm, yr){
        this.name = nm;
        this.year = yr;
    }
    //Add age() which can calculate the age of the object.
    age(){
        let currentDate = new Date();
        return currentDate.getFullYear()-this.year;
    }
}

//lets create an car by using car class:
const car1 = new Car('Camry', 2020);
console.log(car1.name); //Camry
//find out the age of car1;
let ageOfCar1 = car1.age();
console.log(ageOfCar1); //3

/*Class Inheritance; To create a class inheritance use the extends keyword.
A class created with a class inheritance, inherit all the metods from parent/super class. */
class Car{
    constructor(brand){
        this.carName = brand;
    }
    getCarInfo(){
        return `My car is ${this.carName}`;
    }
}
//lets create child class that will extends car class:
class Model extends Car{ //model is child of Car
    constructor(brand, mod){
        super(brand);
        this.model=mod;
    }
    showInfo(){
        return this.getCarInfo() + ' and Car model is '+this.model;
    }
}
//let create a new car;
const car2 = new Model('Toyota', 'Avalon');
console.log(car2.showInfo()); //My car is Toyota and Car model is Avalon
    
//Static keyword: Static methods are defined on the class itself.
//you cannot call static method by refering objects
//Exampl
class std{
    constructor(nm,ln,g){
        this.name = nm;
        this.lastName= ln;
        this.age = g;
    }
    static welcome(){
        return `Welcome ${this.name}`;
    }
    hello(){
        return `Hello ${this.name}`;
    }
}
const std1 = new std ('Yener', 'Celik', 20);
console.log(std1.hello());

const std2 = new std('Basak', 'D', 18);
console.log(std2.hello());

//try-catch-finally: it allow us to catch and handle specific type of errors. Performs necesarry clean up 
// operation, and ensure that code continue to run smoothly.

try {
    //code that may throw exception
    //if an exceotion occurs within this block, it imediately caught and the execution is transformed to the corresponding catch block.
} catch (error) {
   // code to handle the exception
    // this block is executed only if an exception is thrown within try block
    // take error parameters, you can use this parameters to access information about error.
}finally{//optional
    //code that will always be executed, regardless of whether an exception ocured or not

}

//example
function divideNumber(x,y){
    try {
        if(y===0){
            throw new Error('Division by zero is not allowed');
        }
        let result = x/y;
        return result;

    } catch (error) {
        console.log('Error occured: '+error.message );
    }finally{
        console.log('Division operation is completed');
    }
}
//calling function
console.log(divideNumber(20, 5));
console.log(divideNumber(20, 0));

/*JSON:
    ==> JSON stands for JavaScriptObjectNotation
    ==> JSON is lightweight data interchange format
    ==> JSON language is independent
    ==> JSON is self describing and easy to understand
    ==> JSON is a format for storing and transporting data
    ==> JSON is often used when data is sent from server to a web page.
    ==> JSON syntex rules;
        DAta is name/value pairs
        Data is seperated by comas
        Curly braces hold objects
        Square brackets hold arrays

    1)JSON Data: JSON data is written as name/value pairs, just like JS objects properties.
    A name/value pairs consist of name (in double quotes), followed by a colon, followed by value.
    Example:*/
     "First Name":"John","Last Name":"Wick";
  /*2) JSON Objects: Objects are written in {}, just like JS JSON can contain multiple name/value pairs.
  //Example: */
  {
    "FName":"John","LName":"Wick"
  }
  //3) JSON Arrays: [], Just like JS arrays contains objects,
  //Example
  "Person":[
    '{"FName":"John:, "LName":"Wick"}',
    '{"FName":"Yener", "LName":"Wick"}',
    '{"FName":"Leila", "LName":"NLN"}'
  ]
//COnverting JSON text to JS object
//Step1: create JS string that contain JSON syntax:
let JsonText = '{"Employe":['+
'{"FName":"John", "lName":"Wick"},'+
'{"FName":"Yener", "lName":"Wick"},'+
'{"FName":"Leila", "lName":"NLN"}]}';
//Step2: Use the JS built-in function JSON.parse() to convert the JSON text into JS object.
const onjFromJson = JSON.parse(JsonText);
console.log(onjFromJson);
//Step3: We can use new object to handle data in your JS page to handle data:
empl1 = onjFromJson.Employe[1].FName+" "+onjFromJson.Employe[1].lName;
console.log(empl1);

//Example: JSON object: (when post data)
const Employe = [//Employe JS objects
  {fName: "John",
   lName: "Doe",
    age: 30,
    position: "Developer"
},
{fName: "Anna",
lName: "Smith",
 age: 18,
 position: "Designer"
},
{fName: "Peter",
lName: "Jones",
 age: 25,
 position: "Manager"
}
]
console.log(Employe[1]);
const company = {
    name: "UTA University",
    location: "Arlington",
    employees: Employe
}
console.log(company);
//Whenever you semd/post this data ==> convert that to JSON JSON.stringify()
let JsonText = JSON.stringify(company);
console.log(JsonText); //{"name":"UTA University","location":"Arlington","employees":[{"fName":"John","lName":"Doe","age":30,"position":"Developer"},{"fName":"Anna","lName":"Smith","age":18,"position":"Designer"},{"fName":"Peter","lName":"Jones","age":25,"position":"Manager"}]}

/*What is the html dom?
When a web page is loaded the browser create a document object model of the page. The HTML DOM is a standart object model and 
programing interface for HTML. IT hold/define;
    ==> The HTML elements as an object
    ==> The properties of all HTML elements
    ==> The methods to access all HTML elements ==> documents.getElementByID(), document.querySelector(),
    Note: selector: #IdName, .ClassName, tagName
    ==> The events for all HTML element.
    NOte: in other words the HTML DOM is a standart for how to get change, add or delete HTML elements. 
