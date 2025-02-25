// const student = {     
//         name: "Aryan Kumar", 
//         rollNumber: 101, 
//         marks: { 
//         Math: 80, 
//         Science: 65, 
//         English: 50, 
//         History: 70 }, 
//     getAverageMarks: function() { 
//         let sum = 0;
//         for (let subject in this.marks) {
//             sum += this.marks[subject];
//         }
//         return sum / Object.keys(this.marks).length;       
//     }, 
//     checkPassOrFail: function() { 
//         if(this.getAverageMarks() >= 40){
//             return "Pass";
//         }else{
//             return "Fail";
//         }
//     } 
// }; 
// console.log(student.getAverageMarks()); 

// console.log(student.checkPassOrFail());  


// const library = {     books: { 
//     "Atomic Habits": { author: "James Clear", availableCopies: 3 }, 
//     "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 }, 
// }, 
// borrowBook: function(bookName) { 
//     if(this.books[bookName] && this.books[bookName].availableCopies > 1){
//         this.books[bookName].availableCopies--;
//         console.log(`You have borrowed ${bookName} by ${this.books[bookName].author}`);
//     } else {
//         console.log(`${bookName} is not available.`);
//     }  
// }, 
// returnBook: function(bookName) { 
//     if(this.books[bookName]){
//         this.books[bookName].availableCopies++;
//         console.log(`You have returned ${bookName}`);
//     } else {
//         console.log(`${bookName} is not in the library.`);
//     }
// } 
// }; 

// library.borrowBook("Atomic Habits"); 
// console.log(library.books["Atomic Habits"].availableCopies); 
// library.returnBook("Atomic Habits");
// console.log(library.books["Atomic Habits"].availableCopies);


// function table(){
//     let n1=5;
//     for(let i=1;i<=10;i++){
//         let a=0
//         a=n1*i;
//         console.log(i+"*"+n1+"="+a);
//     }
//     let n2=10;
//     for(let i=1;i<=10;i++){
//         let a=0
//         a=n2*i;
//         console.log(i+"*"+n2+"="+a);
//     }   
// }
// table();



// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%3==0 && arr[i]%5==0){
//         console.log("FizzBuzz");
//     }else if(arr[i]%3==0){
//         console.log("Fizz");
//     }else if(arr[i]%5==0){
//         console.log("Buzz");
//     }else{
//         console.log(arr[i]);
//     }
// }


// function reverseString(str) { 
//     str="Iman kalyan bhunia"
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
   
// }

// console.log(reverseString()); 


// function removeDuplicates(arr) {
//     let uniqueArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueArr.includes(arr[i])) {
//             uniqueArr.push(arr[i]);
//         }
//     }
//     return uniqueArr;
// }

// let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6];
// console.log(removeDuplicates(arr)); 


// function longestWord(sentence) {
//     let words = sentence.split(' ');
//     let longestWord = words[0];
//     for (let i = 1; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
   
// }

// let sentence = "Coding is amazing and challenging";
// console.log(longestWord(sentence)); 


// function myMap(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i]));
//     }
//     return result;
// }
// function myCallback(x) {
//     return x * 2;
// }

// console.log(myMap([1, 2, 3, 4], myCallback)); 


