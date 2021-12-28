// Hello world


// Values and Varibales


// Data Types


// Null, Undefined & NaN
// let nullVal = null;
// console.log(nullVal);
// console.log(typeof(nullVal)); // will show the type of null is object which is wrong. So, it's a bug of JS

// let notInitializedWithValue;
// console.log(notInitializedWithValue);
// console.log(typeof(notInitializedWithValue));

// let aNumber = 123;
// console.log(typeof(aNumber));
// console.log(isNaN(aNumber));

// let aNumberInString = '123';
// console.log(typeof(aNumberInString));
// console.log(isNaN(aNumberInString)); // aNumberInString is a string but isNaN will return false because the string contains number only

// let aString = 'Hello3441139';
// console.log(isNaN(aString));

// console.log(NaN == NaN);  // return false cause, it's a not a value or type of variable but it's a global property
// console.log(NaN === NaN); // also return false


// Expressions and Operators
// let a = 15, b = 7, c = 7, d = 5, e = '7';

// // Arithmatic operator
// console.log('Addition: ', a+b);
// console.log('Subtraction: ', a-b);
// console.log('Multiplication: ', a*b);
// console.log('Division: ', a/b);
// console.log('Remainder: ', a%b);

// // Exponentiation operator
// console.log('Square of b: ', b**2); // base**power
// console.log('Inverse of d: ', d ** -1);

// // Logical operator
// let adult = true, child = true, drinks = true;
// console.log(adult && drinks);
// console.log(child && !drinks);
// console.log((adult || child) && !drinks);

// // Comparison operator
// console.log('a less than b: ', a < b);
// console.log('a greater than c: ', a > c);
// console.log('c is equal to b: ', c == b);
// console.log('c is exactly equal to b: ', c === b);
// console.log('c is equal to e: ', c == e);
// console.log('c is exactly equal to e: ', c === e);
// console.log('a greater than or equal to b: ',a >= b);
// console.log('d less than or equal to b: ', d <= b);
// console.log('a is not equal to b: ', a != b);
// console.log('c is not equal to b: ', c != b);

// // Increment and Decrement operator
// let num = 5;
// num++; // 6
// console.log(num);
// console.log(num++); // after the print num will be 7
// let newNum = 10;
// newNum = num++; // 7, after this line num will be 8
// console.log(newNum);
// num = 5;
// num--;
// console.log(num);
// newNum = ++num; // 5
// console.log(newNum); 
// newNum = ++num + 5; // 11
// console.log(newNum);
// newNum = --num + 7;
// console.log(newNum);

// // String operator
// let str1 = 'Hello ';
// let str2 = 'World';
// let str3 = str1 + str2;
// console.log(str3);
// console.log(`len of str3: ${str3.length}`);

// // Ternary operator
// // will learn after conditional statements

// // A problem:: swap value of two variable without using third variable
// let first = 5; sec = 17;
// first = first + sec;
// sec = first - sec;
// first = first - sec;
// console.log(`After swapping: first=${first}, second=${sec}`);


// // Conditional Statements
// let age = 20;
// if (age > 18) {
//   console.log('Can go to the party');
// } else {
//   console.log("Can't go to the party");
// }


// // Loop
// // for
// console.log('===========For loop===========');
// for (let i=0; i<5; i++) {
//   console.log('i -> ', i);
// }

// // while
// console.log('===========While loop===========');
// let i = 1;
// while (i<5) {
//   console.log('i -> ', i);
//   i++;
// }

// // foreach
// // please after array and string
// console.log('===========Foreach loop===========');
// let aListOfNum = [1, 5, 6, 8, 11, 21, 23, 43, 65, 14, 17, 35, 24, 103, 55]
// aListOfNum.forEach(el => {
//   console.log(el);
// })


// // Arrays
// let aListOfNum = [1, 5, 6, 8, 11, 21, 23, 43, 65, 14, 17, 35, 24, 103, 55]
// console.log(aListOfNum);
// console.log(typeof(aListOfNum));
// console.log('length: ', aListOfNum.length);
// console.log('popped value: ', aListOfNum.pop());
// console.log(aListOfNum);
// aListOfNum.push(100);
// // aro onk method ase

// // iterate using map()
// console.log(aListOfNum.map(el => el));


// // Strings
// let str = 'I have a cat';
// console.log(typeof(str));
// console.log(str.substring(2, 6));
// console.log(str.toUpperCase());
// console.log(str.split(' '));
// // aro onk method ase


// // Object Oriented Programming
// // import statement
// const User = require('./user.js'); // importing
// // import User from './user';

// let user1 = new User('Tahmid', '12345'); // creating object
// console.log(user1);
// console.log(user1.getUser());
// user1.setEmail('tahmid@gmail.com');
// console.log(user1.getUser());

// // Date and Time
// console.log(new Date());
// console.log(new Date().toLocaleString()); // date and time
// console.log(new Date().toString()); // day, date and time with (in details)
// console.log(new Date().toLocaleDateString()); // only date
// console.log(new Date().toTimeString()); // only time
// console.log(new Date().toUTCString()); // standard time/ global time (GMT)
// console.log(Date.now()); // timestamp in milliseconds from 1 January, 1970 till current

// // for manual date
// // let d = new Date(year, month, date, hour, minute, second, milliseconds)
// // also can pass only on argument such as milliseconds
// // let d = new Date(milliseconds);
// // sometimes we need to convert the timestamp (from database) to date (readable)


// // Math class
// console.log(Math.PI);
// console.log(Math.round(23.434565462));
// console.log(Math.pow(5, 2)); // pow(base, power)
// console.log(Math.sqrt(64));
// console.log(Math.sqrt(88));
// console.log(Math.abs(-32.5)); // give the positive that is mod value
// console.log(Math.ceil(23.45));
// console.log(Math.floor(23.45));
// console.log(Math.min(5, 12, -2, 55, 0, -45, 52, 61, -1, 6));
// console.log(Math.max(5, 12, -2, 55, 0, -45, 52, 61, -1, 6));
// console.log(Math.random());
// console.log(Math.random() * 10); // range -> 0 to 10
// console.log(Math.random() * 100); // ramge -> 0 to 100


// DOM