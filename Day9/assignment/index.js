// 1.
let x = "5";
let y = 5;

console.log(x == y);  // true 
console.log(x === y); // false 

// 2.
const words = ["JavaScript", "Programming", "Function", "Hoisting"];

function getLongestWordLength(arr) {
    return arr.reduce((max, word) => Math.max(max, word.length), 0);
}

console.log(getLongestWordLength(words)); // Output: 11 

// 3.
function testScope() { 
    if (true) { 
        var a = 10; 
        let b = 20; 
        const c = 30; 
    } 
    console.log(a); //  10 (var is function-scoped)
    console.log(b); //  ReferenceError (block-scoped)
    console.log(c); //  ReferenceError (block-scoped)
}
testScope();

// 4.
const name = "John";

function greet() { 
    if (true) { 
        const message = "Hello " + name; // `const` instead of `var`
    } 
    console.log(message); //  ReferenceError (message is block-scoped)
}
greet();

// 5.
const multiply = (a, b) => a * b;

// 6.
const obj = { 
    name: "Alice", 
    sayHello: function() { 
        setTimeout(() => { 
            console.log("Hello, " + this.name); 
        }, 1000);
    } 
};
obj.sayHello(); // Output: Hello, Alice

// 7.
console.log(a); //  undefined (hoisted but not initialized)
var a = 10; 
console.log(b); //  ReferenceError (let is not hoisted)
let b = 20;

// 8.
console.log(square(5)); //  Works due to function hoisting

function square(n) { 
    return n * n; 
}

console.log(double(4)); //  ReferenceError (function expressions aren't hoisted)

var double = function(n) { 
    return n * 2; 
};

// 9.
console.log(5 + "5");   // "55"  (String concatenation)
console.log(5 - "3");   // 2     (String converted to number)
console.log(5 * "2");   // 10    (String converted to number)
console.log("10" / 2);  // 5     (String converted to number)
console.log(10 % "3");  // 1     (String converted to number)

// 10.
let a = 10;
a += 5;
a *= 2;
a -= 3;
a /= 2;

// 11.
console.log(5 > 3 && 10 < 20);  // true (Both conditions true)
console.log(5 > 3 || 10 > 20);  // true (One condition true)
console.log(!(5 > 3));          // false (Negation)

// 12.
function sum(a, b, c = 5) { 
    return a + b + c;
}

console.log(sum(2, 3));    // 10  (Default c = 5)
console.log(sum(2, 3, 10));// 15  (c overridden)

// 13.
function sumAll(...args) {
    return args.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10

// 14.
function outer() { 
    let count = 0; 
    return function inner() { 
        count++; 
        console.log(count); 
    }; 
}

const counter1 = outer();
counter1(); // 1
counter1(); // 2

const counter2 = outer();
counter2(); // 1
counter2(); // 2

// 15.
function reverseNumber(num) {
    let isNegative = num < 0;
    let str = "" + Math.abs(num);
    let reversed = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    
    return isNegative ? -Number(reversed) : Number(reversed);
}

console.log(reverseNumber(1234)); // 4321
console.log(reverseNumber(-567)); // -765

// 16.
function customLength(str) {
    let length = 0;
    for (let char of str) {
        length++;
    }
    return length;
}

console.log(customLength("JavaScript")); // 10

// 17.
console.log(add(2, 3)); // ✅ 5
console.log(multiply(2, 3)); // ❌ ReferenceError

function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; } // ✅ Fix: Convert to function declaration

// Function Returning Another Function (Counter):
function counter() {
    let count = 0;
    return function () {
        return ++count;
    };
}

const count = counter();
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3

