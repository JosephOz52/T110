//June 06, 2023
//Date in JS: Objects,
//1) new Date(): it will return current date and time

const dt=new Date();
console.log(dt); // 2023-06-13T11:05:20.217Z

//2) new Date(oneInput) ==> milliseconds:
const dt=new Date(7346386);
console.log(dt); //1970-01-01T02:02:26.386Z

//3) new Date(Year,Month,Day,Hour,Minutes,Seconds,Milliseconds)
const dt=new Date(2023,5,6,7);
console.log(dt); //2023-06-06T11:00:00.000Z

//4) new Date(stringDate); it will create date object from string
const dt = new Date('November 12, 2023 5:30:00');
console.log(dt); //2023-11-12T10:30:00.000Z
console.log(typeof dt); // object

//Date Methods:
//1) date.parse(): if you have valid string, you can use that method to convert it to milliseconds.
let msec = Date.parse('April 15, 1991');
console.log(msec); //671688000000
const dt = new Date(671688000000);
console.log(dt); //1991-04-15T04:00:00.000Z

/* 2) get methods
==> getTime(): it will return the number of milliseconds between date and January 1, 1970
==> Date.now(): return the time component of the date.
==> GetFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds(), getMilliseconds(), getDay():
*/
//Example:
const dt = new Date();
console.log(dt); //2023-06-13T12:10:19.630Z
console.log(dt.getTime()); //1686658219630
console.log(dt.getFullYear()); //2023
console.log(dt.getDate()); //13
console.log(dt.getMinutes()); //12
console.log(dt.getDay()); // note, days are between 0-6, sunday being 0. 2 being Tuesday


/*3)Set Methods; let you update/set values (years, months, days, hours, minutes, seconds, milliseconds) for a date object.

==> setDate(); set the date of month (1-31);
setFullYear(); set the year ( optional month and day)
setHours(); 0-23, setMilliseconds(), setMinutes(), setMonths(): 0-11, setSeconds(), setTime()
Example */
const dt = new Date();
console.log(dt); //2023-06-13T12:25:09.328Z
dt.setHours(13);
console.log(dt);//2023-06-13T17:25:09.328Z
dt.setFullYear(2020);
console.log(dt); //2020-06-13T17:25:09.328Z
dt.setHours(13);
console.log(dt); //2020-06-13T17:25:09.328Z

//Practice

function returnStdAge (dob){
    const stdDOB = new Date(dob);
    let stdAge = new Date().getFullYear() - stdDOB.getFullYear();
    return stdAge;

}
let age = returnStdAge('September 04, 2017');
console.log(age); //6

/*JS Set: its a colletion of unique elements, each value can only occur once in a set.
1) new Set(): create a new set.
2) add(): add a new element into the set
3) delete(): remove an element from a set
4) has(): return true if the element is exist in a set
5) forEach(): Invokes a callback for each element in the set.
6) values(): return iterator with all the values in a set.
7) size : return the number of elements in a set
*/

//Example: create a set ;
const fruits = new Set(['Orange', 'Banana', 'Apple', 'Kiwi']);
console.log(fruits); // Set(4) { 'Orange', 'Banana', 'Apple', 'Kiwi' }
//or you can create then add your elements
const fruits = new Set();
fruits.add('Banana');
fruits.add('Orange');
fruits.add('Apple');
fruits.add('Kiwi');
console.log(fruits); //Set(4) { 'Banana', 'Orange', 'Apple', 'Kiwi' }
console.log(typeof fruits); //object
console.log(fruits.size); //4

//forEach(); will invoke some codes for each element in a set;
const fruits = new Set(['Orange', 'Banana', 'Apple', 'Kiwi']);
fruits.forEach( function(value){
    console.log(value.length)
});

//values(): it will return a new iterator object containing all the values in a set
//Example
const fruits = new Set(['Orange', 'Banana', 'Apple', 'Kiwi']);
const iterator = fruits.values();
console.log(iterator); // [Set Iterator] { 'Orange', 'Banana', 'Apple', 'Kiwi' }
//lets iterate over that iterator;
for(const x of iterator){
    console.log(x.length);
}

/*JS Maps: 
==> A map holds key-value oairs where key can be any datatype.
==> Key are unique where values can be repeated.
MEthods:
1) new Map(): create a new map.
2) set(): sets (add) value for the key in a map
3) get(): gets the value for a key in a Map
4) delete(): remove a map elements specified by the key
5) has(): returns true if a key exist in a map
6) forEach(): call a function for each key/value pair in map
7) entries(): return iterator with [key, value] pairs in a map
8) size: the number of element in map
*/
//Example
//Create a map
const fruits = new Map(
    [
    ['Apple', 500],
    ['Banana', 600],
    ['Orange', 750],
    ]
)

//WAy2 to create map:
const fruits = new Map();
fruits.set('Apple',500);
fruits.set('Banana',600);
fruits.set('Orange',750);
console.log(fruits);
//set() can be used to update value of any key
fruits.set('Apple',300);
console.log(fruits);
console.log(fruits.get('Apple')); // 300
fruits.delete('Apple');
console.log(fruits.has('Apple')); //false

//forEach():call a function for each pf the map:
//Example
const fruits = new Map(
    [
    ['Apple', 500],
    ['Banana', 600],
    ['Orange', 750]
    ]
)
//
let str='';
fruits.forEach(
    function(value, key){
        console.log(key.length);
        str += key+' = '+ value +', ';
    }
)
console.log(str);
//entries(): return iterator object with the [key, values] in a Map. iterator has 
// build in method called next() that can be used to get the next value.
//Example
const fruits = new Map(
    [
    ['Apple', 500],
    ['Banana', 600],
    ['Orange', 750]
    ]
)
const iteratorOfMap = fruits.entries();
console.log(iteratorOfMap);
console.log(iteratorOfMap.next());
console.log(iteratorOfMap.next());

//Using loop to iterate over iterator
const fruits = new Map(
    [
    ['Apple', 500],
    ['Banana', 600],
    ['Orange', 750]
    ]
)
for (const [key, value] of fruits.entries()) {
    console.log('key is '+ key +' '+'value is'+' '+value);
    
}/* key is Apple value is 500
key is Banana value is 600
key is Orange value is 750 */

/*Building our own Constructor: A constructor is a special function that act as 
mold/template to create new objects. It is uselful when you create multiple objects 
of the same type
Example8*/
function Car(Make, Model, Year){
    this.Make = Make;
    this.Model = Model;
    this.Year = Year;
    this.setMiles = function(miles){
        this.miles = miles;
        return miles;
    }
}
//Use Constructor;
const car1 = new Car('Tesla', 's', 2018);
const car2 = new Car('Honda', 'Civic', 2020);
console.log(car);
console.log(typeof car1);
car2.setMiles(60000);
console.log(car2.miles);

