//june 07, constructor:
//Practice:create customer constructor with name, email, phone
function customer(name, email, phone){
    this.name=name;
    this.email=email;
    this.phone=phone;
    //lets add method to display customer information;
    this.displayInfo = function(){
        console.log(`Customer name: ${this.name}`);
        console.log(`Customer email: ${this.email}`);
        console.log(`Customer Phone: ${this.phone}`);
    }
    //Add method to search customer by their email;
    this.searchByEmail = function(email){
        const foundCustomer = myCustomers.filter(cst => cst.email===email)
        //when cst (customer in myCustomers) email is equal to the input email (parameter)
        return foundCustomer;
    }
}

//lets create instance(objects) of customer;
const customer1 = new customer('John', 'john@wisequarter.com', '999-888-7766');
const customer2 = new customer('Jana', 'jane@wisequarter.com', '888-777-6655');
//preint customer properties;
console.log(customer1.name);
console.log(customer2.email);
console.log(customer2.email);
//customer1.displayInfo();
//we can create array to save all of our customer in same container;
const myCustomers = [] //create an array
myCustomers.push(customer1); //add customer1 to myCustomer
myCustomers.push(customer2);
//call displayInfo method for every customer;
myCustomers.forEach(cst=>{
    cst.displayInfo();
})
//search for customer by email
const result = customer1.searchByEmail('john@wisequarter.com')
console.log(result);

//Prototype; helps to improve memory efficiency as each instance does not need to create its own copy of the methods
//Practice: create a constructor fucntion called product that have name, price, quantity parameters;

function product (name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity= quantity;
}
//add methods using prototype:
product.prototype.displayInfo = function(displayInfo){
    console.log(`Product name: ${this.name}`);
    console.log(`price is ${this.price}`);
    console.log(`available quantity ${this.quantity}`);
}
//create function to find total Amount of each product:
product.prototype.calcTotalAmount =function (){
    return this.quantity * this.price;
}
//lets create instance of the product
const product1 = new product('airpods', 199, 10);
const product2 = new product('Beats', 399, 15);
product1.displayInfo();
console.log(product2.calcTotalAmount());

/* Conditional Statement: In JS we have following conditional statements:
    1) use if to specify a block of code to be executed, if specified condition is true.
    2)USe else to specify a block of code to be executed, if the same condition is false
    3)use else if to specify a new condition to test, if the first condition is false.
    4)use switch to specifiy many alternaive blocks of code to be executed. */

// 1) if/else statement:
//syntax:
if (condition) {
    //block of code to be executed when condition is true
}else{
    //this is optional.
    //code block to be run when condition is false.
}
//Example:
const dt = new Date(); // that will return date and time;
let hour = dt.getHours();
if (hour>18) {
    console.log('Good Day')
}else{
    console.log('Good Evening')
}

//2) else/if statement:
const dt = new Date(); // that will return date and time;
let hour = dt.getHours();
if(hour<12){
    console.log('Good Morning');
}else if (hour<20) {
    console.log('Good Afternoon');
}else{
    console.log('Good Evening');
}

//3) Switch statement; use switch statement so select one if many code block to be executed.
switch (key) {
    case value:
        //code block
        break;
    case value:
            //code block
        break;

    default:
        //Code block
        break;
}

/* How is this working:
1) the expression is evaluated once;
2) the value of expression is compared with the value of each case;
3) if there is a match, the associated block of code is executed.
4) if there is no match, the default code block is executed. */

const dt = new Date(); // that will return date and time;
let day = dt.getDay();
switch (day) {
    case 0:
        console.log('It is Sunday');
        break;
    case 1:
        console.log('It is Monday');
        break;
    case 2:
        console.log('It is Tuesday');
        break;
    case 3:
        console.log('It is Wednesday');
        break;
    case 4:
        console.log('It is Thursday');
        break;
    case 5:
        console.log('It is Friday');
        break;
    case 6:
        console.log('It is Saturda');
        break;
}

//4) Ternary Operator;

let result = condition? code1 : code2;
//example:
let x = 8;
let y = 30; 
let result = x>10? y<50? 'X is greater than 10 and Y is less than 50': 'X is greater than 10, Y is not less than 50': 'X is not greater than 10';
console.log(result);

//Practice; Write a function to check if number is even perfect, odd, odd perfect:

function checkNumber(x){
    let result = x%2 = 0? x%3 = 0? 'X is even perfect': 'x is even': x%3 = 0? 'X is odd perfect'
}