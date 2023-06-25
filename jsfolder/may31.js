/* may31:String methods:
Data types in JS:
    Primitive data: String, number, boolean, null, undefined, symbol
    All other types are object; collection (array, list, set, map), Dae, functions */

    //String Methods and properties: lenght, slice(),
    //3) Substring(startIndex, endIndex): this method is similiar to slice. The difference is that this method does not accept negative parameter
    let str='Apple, Banana, Kiwi';
    let subStr=str.substring(0,5);
    console.log(subStr); //Apple

    //4)substr(startIndex, lenght); substr similiar to slice.The difference is that second parameter is the lenght of extracted parent.
    let str= 'Apple, Banana, Kiwi';
    let substr=str.substr(7,6);
    console.log(substr); //Banana
    
    //replace(valueToBeChange, newValue); will replace a specified value with a new one.
    //This method wont change the original string, it will return a new str.
    //IF there are multiple match, only the first occurance will change.

    //Example
    let str = 'we learn apex data types, apex variables, apex operators';
    let subStr = str.replace('apex', 'JavaScript');
    console.log(subStr);
    //Note:IF you want to replace all matches, use regular expression with the /g flag (global match) set.

    let str = 'We learn Apex data types, Apex Variables, Apex Operators.';
    let subStr = str.replace(/Apex/g, 'JavaScript');
    console.log(subStr);
    //note: by default replace is case senstive.Apex and apex is different. In that case you can use regex with /i flag (insensitive)

    let str = 'We learn Apex data types, Apex Variables, Apex Operators.';
    let subStr = str.replace(/apex/gi, 'JavaScript');
    console.log(subStr);
    //Note: when you use regex no need to use quotes.Instead of that we use //

    //6) toUpperCase(), toLowerCase() a string converted to upper or lower by using these methods.

    //Example
    let text1= ' hello javascript';
    let uppertext1 = text1.toUpperCase();
    let lowertext1 = text1.toLowerCase();
    console.log(uppertext1);
    console.log(lowertext1);

    //8) concat(str1,str2,str3); this will join two or more string. it can be use instead of + operator.
    let text1 = 'Hello';
    let text2 = 'javascript';
    let text3 = text1.concat(' ', text2); 
    console.log(text3); // Hello javascript
    console.log(text1+text2); //Hellojavascript

    //Note: String method immutable. All string methods return a new string. They dont update the original one.

    // 9) trim(); remove whitespace from both side of the str.
    let text = '  Hello word  ';
    let result = text.trim();
    console.log(result); // Hello word, trimmed white spaces from beginning and ending.

    //10) padStart(lengt, paddingValue) Will pads string with another string.

    //Example
    let text = '5';
    let padded = text.padStart(4, 'rt');
    console.log(padded); // rtr5

    //11) padEnd(lenght, paddingValue);
    //Example
    let text = 'gh';
    let paddedEnd = text.padEnd(9, 'gz');
    console.log(paddedEnd); // ghgzgzgz  ghgzgzgzg

    //12) charAt(index); return the character at that index.
    //example
    let str = 'JS is fun';
    charattext = str.charAt(6);
    console.log(charattext);// f

    //Property Access[]: [index] will return a character at that index

    let str = 'JS is fun';
    charatindex7 = str[7];
    console.log(charatindex7);// u

    //13) charCodeAt(index); method return the unicode (ASCII) value of the character at the specified index

    //example
    let str = 'JS is fun';
    charattext = str.charCodeAt(6);
    console.log(charattext);// 102 ascii value of f

    //14) split()a string can be converted to an array with that method.
    //example
    let text = 'Apple, Banana, Kiwi';
    console.log(text.split(',')); // [ 'Apple', ' Banana', ' Kiwi' ]
    console.log(text.split(' ')); // [ 'Apple,', 'Banana,', 'Kiwi' ]
    console.log(text.split('')); //[ 'A', 'p', 'p', 'l', 'e', ',', ' ', 'B', 'a', 'n', 'a', 'n', 'a', ',', ' ', 'K', 'i', 'w', 'i'] it will split from each char.

    //Example;
    let text='hello javascript';
    let myArray=text.split('');
    console.log(myArray); // all chars
    console.log(myArray[4]); // o

    //15) indexOf(); will return first occurance index of specified string.
    //example
    let myStr = 'We learn JS variables, JS operators, JS data types';
    indexofstr = myStr.indexOf('JS');
    console.log(indexofstr); // 9

    //16) lastIndexif(str); will return the index of last occurance of the specified text in a string.

    let myStr = 'We learn JS variables, JS operators, JS data types';
    indexofstr = myStr.lastIndexOf('JS');
    console.log(indexofstr); // 37
    //note: Both indexOf() and lastIndexOf() return -1 if there is no occurance.
    //note: Both indexOf() and lastIndexOf() accept second parameter, the search will start from that position

    let myStr = 'We learn JS variables, JS operators, JS data types';
    indexofstr = myStr.indexOf('JS', 12);//find index if JS after position(index) 12.
    console.log(indexofstr); //23

    //17) search(); searches a string for a specified value and return the position of match.
    //example
    let str = 'We learned JS variables, Js operators, JS data types';
    console.log(str.search('JS')); // 11
    //Note: indexof() and search() methods similiar. search method cannot have second parameter. if you use regex, use search method.

    //18) match(); will search a string or a match against a regular expression, then return the matches, as an array object.
    //Example
    let str = 'We learned JS variables, Js operators, JS data types';
    console.log(str.match(/JS/g)); // [ 'JS', 'JS' ]
    console.log(str.match(/JS/gi)) // [ 'JS', 'Js', 'JS' ]

    //19) includes('seachValue', startIndex); return true if string contains a specified value. Second parameter is optional and where search starts.
    //Example
    let str = 'We learned JS variables, Js operators, JS data types';
    console.log(str.includes('JS', 39)) // true
    console.log(str.includes('JS', 40)) // false

    //)20/21 starsWith(str), endsWith(str); returns true if string begin or ends with specified value, otherwise returns false.
    
    //Example

    let str = 'We learned JS variables, Js operators, JS data types';
    console.log(str.startsWith('We')); // true
    console.log(str.endsWith('types')); // true

    //This two method can have second paremeter
    let str = 'We learned JS variables, Js operators, JS data types';
    console.log(str.startsWith('JS', 11)) // true

    /* Js string templates: template literals, telmplate string. string template, back-ticks:
        Template literals use back-ticks (``) rather than quotes ("") to define a string.
        Template literals provide an easy way to interpolate variables and expressions into string. ${......}

    Example */

    let firstName = 'Dilek';
    let lastName = 'Uslu';
    let text = `Welcome ${firstName} ${lastName}...!`;
    console.log(text);    //Welcome Dilek Uslu...!

    //Example2
    let qty = 25;
    let price = 0.49;
    let total = `Total that you will pay is ${qty*price}`;
    console.log(total); //Total that you will pay is 12.25

    //Numeric string: JS string can have numeric value. JS will try to convert string to number in all numerical operations.
    //Example
    let x = '100';
    let y = '5';
    let result = x/y
    console.log(typeof x); //string
    console.log(result); // 20 .this is called numerical string

    //NUMBERS: JS only have one type of numbers. Numbers can be written with or without decimal
    //example
    let x = 3.14;
    let y = 3;
    console.log(typeof x); // number
    console.log(typeof y); // number

    //Numbers methods and properties:
    //1) toString; convert a number to string
    //example
    let x = 250;
    let strfromNumber = x.toString();
    console.log(typeof strfromNumber); // string

    //2) toExponential() will convert number to string, number will be rounded and written using exponential notation.
    //example
    let num = 9;
    console.log(num.toExponential()); // 9e+0
    console.log(num.toExponential(4)); // 9.0000e+0

    //3) toFixed(): return string, also you can define number of decimal part

    let num = 8.89;
    console.log(num.toFixed(3)); // 8.890
    let result = num.toFixed(3); 
    console.log(typeof result);// string

    //4) toPrecision(); return string, with specified lenght.

    //example

    let num = 5.58;
    let result = num.toPrecision(4);
    console.log(result); // 5.580
    console.log(result.length); // 5

    //5) number(variable); 
    let str = '500';
    let numFromStr = Number(str);
    console.log(typeof numFromStr); // number

    console.log(Number(true)); // 1 
    console.log(Number(false)); // 0
    console.log(Number('  15  ')); // 15
    console.log(Number('White')); // NaN /not a number

    //Number() can also convert date to a number

    //example
    let dt = new Date("2023-05-31");
    console.log(typeof dt); // object
    console.log(Number(dt)); // 1685491200000 time passes since january 1, 1970 in milliseconds.


