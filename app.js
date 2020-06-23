//------ Chapters21-25 task 1

// var firstName = prompt("Enter Your First Name: ");
// var lastName = prompt("Enter Your Last Name: ");
// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName);

//------ Chapters21-25 task 2

// var phoneModel = prompt("Enter Your Favorite Phone Model: ");
// document.write("Your Favorite Phone is: " + phoneModel + "<br>");
// document.write("Length of String is: " + phoneModel.length);

//------ Chapters21-25 task 3

// var word = "Pakistani"
// document.write("String: " + word + "<br>");
// document.write("Index of 'n': " + word.indexOf('n'));

//------ Chapters21-25 task 4

// var word = "Hello World"
// document.write("String: " + word + "<br>");
// document.write("Last Index of 'l': " + word.lastIndexOf('l'));

//------ Chapters21-25 task 5

// var word = "Pakistani"
// document.write("String: " + word + "<br>");
// document.write("Character at index 3: " + word.charAt(3));

//------ Chapters21-25 task 6

// var firstName = prompt("Enter Your First Name: ");
// var lastName = prompt("Enter Your Last Name: ");
// var fullName = firstName.concat(" " + lastName);
// alert("Hello " + fullName);

//------ Chapters21-25 task 7

// var city = "Hyderabad";
// document.write("City: " + city + "<br>");
// var cityAfterReplacement = "Islam" + city.slice(city.indexOf("a"), city.length);
// document.write("After Replacement: " + cityAfterReplacement);

//------ Chapters21-25 task 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Before Replacement: " + message);
// var messageAfterReplacement = message.replace(/and/g, "&");
// document.write("<br>After Replacement: " + messageAfterReplacement);

//------ Chapters21-25 task 9

// var str = "472"
// document.write("Value: " + str + "<br>Type: " + typeof(str));
// var num = parseInt(str);
// document.write("<br>Value: " + num + "<br>Type: " + typeof(num));

//------ Chapters21-25 task 10

// var userInput = prompt("Enter the string: ");
// document.write("User Input: " + userInput);
// document.write("<br>Upper case: " + userInput.toUpperCase());

//------ Chapters21-25 task 11

// var userInput = prompt("Enter the string: ");
// document.write("User Input: " + userInput);
// var firstLetter = userInput.slice(0,1);
// var restOfLetters = userInput.slice(1,userInput.length);
// var changedCase = firstLetter.toUpperCase() + restOfLetters.toLowerCase();
// document.write("<br>Title case: " + changedCase);

//------ Chapters21-25 task 12

// var num = 35.36;
// document.write("Number: " + num);
// var str = num.toString();
// var result = str.slice(0,2) + str.slice(3,str.length);
// document.write("<br>Result: " + result);

//------ Chapters21-25 task 13

// var userName = prompt("Enter the Username: ");
// if(userName.indexOf('@') === -1 && userName.indexOf('.') === -1 && userName.indexOf(',') === -1 && userName.indexOf('!') === -1){
//     alert("Username is valid");
// }
// else{
//     alert("Please enter a valid username");
// }

//------ Chapters21-25 task 14

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter what you want: ");
// var search = userInput.toLowerCase();
// for(var i = 0; i <= arr.length; i++){
//     if(arr[i] === search){
//         document.write(search + " is <b>available</b> at index " + i + " in our bakery.");
//         break;
//     }
//     else if(i === arr.length){
//         document.write("We are sorry. " + search + " is <b>not available</b> in our bakery");
//         break;
//     }
// }

//------ Chapters21-25 task 15

// var input = prompt("Enter password: ");
// var letters = /^[0-9a-zA-Z]+$/;
// if (input.length >= 6) {
//     if (isNaN(parseInt(input[0]))){
//         if (input.match(letters)){
//             alert("password is valid");
//         }
//         else {
//             alert("Please input alphanumeric characters only");
//         }
//     }
//     else {
//         alert("Password should not start with number");
//     }
// }
// else {
//     alert("you have to enter at least 6 character!");

// }


//------ Chapters21-25 task 16

// var university = "University of Karachi";
// var universityArr = university.split("");
// for(var i = 0; i < university.length; i++){
//     document.write(universityArr[i] + "<br>");
// }

//------ Chapters21-25 task 17

// var userInput = prompt("Enter String: ");
// document.write("User Input: " + userInput);
// var userInputArr = userInput.split("");
// document.write("<br>Last Character of Input: " + userInputArr[userInputArr.length - 1]);

//------ Chapters21-25 task 18

// var str = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// var search = 'the';
// document.write("Text: " + str);
// str = str.toLowerCase().split(" ");
// for(var i = 0; i < str.length; i++){
//     if(str[i] === search){
//         count = count + 1;
//     }
// }
// document.write("<br>There are " + count + " occurrence(s) of word '" + search + "'");

//------ Chapters26-30 task 1

// var num = +prompt("Enter the Number: ");
// if(num>0){
//     document.write("number: " + num);
//     document.write("<br>round off value: " + Math.round(num));
//     document.write("<br>floor value: " + Math.floor(num));
//     document.write("<br>ceil value: " + Math.ceil(num));
// }
// else{
//     document.write("Please enter a positive number.")
// }

//------ Chapters26-30 task 2

// var num = +prompt("Enter the Number: ");
// if(num<0){
//     document.write("number: " + num);
//     document.write("<br>round off value: " + Math.round(num));
//     document.write("<br>floor value: " + Math.floor(num));
//     document.write("<br>ceil value: " + Math.ceil(num));
// }
// else{
//     document.write("Please enter a negative number.")
// }

//------ Chapters26-30 task 3

// var num = +prompt("Enter a number: ");
// document.write("The absolute value of " + num + " is "+ Math.abs(num));

//------ Chapters26-30 task 4

// num = Math.floor(Math.random()*6);
// if(num === 0){
//     num = num + 1;
// }
// document.write("random dice value " + num);

//------ Chapters26-30 task 5

// var num = Math.floor(Math.random()*2);
// if(num === 0){
//     num = num + 1;
//     document.write(num + "<br>random coin value: Tails");
// }
// else if(num === 1){
//     num = num + 1;
//     document.write(num + "<br>random coin value: Heads");
// }

//------ Chapters26-30 task 6

// var num = Math.floor(Math.random()*100);
// document.write("Random number between 1 and 100: " + num);

//------ Chapters26-30 task 7

// var weight = prompt("Enter your weight in kilograms: ");
// document.write("The weight of user is " + parseFloat(weight).toFixed(1) + " Kilograms")

//------ Chapters26-30 task 8

// var num = +prompt("Enter the Secret number: ")
// var secretNumber = Math.floor(Math.random() * 10);
// if(num === secretNumber){
//     alert("Conguratulations!");
// }
// else{
//     alert("Try Again!");
// }

//------ Chapters31-34 task 1

// var currentDate = new Date();
// document.write(currentDate);

//------ Chapters31-34 task 2

// var currentDate = new Date();
// var currentMonth = currentDate.getMonth();
// var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// for(var i = 0; i < months.length; i++){
//     if(currentMonth === i){
//         alert("Current month: " + months[i]);
//         break;
//     }
// }

//------ Chapters31-34 task 3

// var currentDate = new Date();
// var currentDateString = currentDate.toString();
// var currentDay = currentDateString.slice(0, 3);
// alert("Today is " + currentDay);

//------ Chapters31-34 task 4

// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// if(currentDay === 0 || currentDay === 6){
//     alert("It's Fun day");
// }
// else{
//     alert("It's Working day");
// }

//------ Chapters31-34 task 5

// var currentDate = new Date().getDate();
// if(currentDate < 16){
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// }

//------ Chapters31-34 task 6

// var currentDate = new Date();
// document.write("Current Date: " + currentDate);
// var milliSeconds = currentDate.getTime();
// document.write("<br>Elapsed milliseconds since January 1, 1970: " + milliSeconds);
// var minutes = milliSeconds / 1000 / 60;
// document.write("<br>Elapsed minutes since January 1, 1970: " + minutes);

//------ Chapters31-34 task 7

// var currentHour = new Date().getHours();
// if(currentHour < 12){
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }

//------ Chapters31-34 task 8

// var laterDate = new Date("Dec 31, 2020");
// document.write("Later date: " + laterDate);

//------ Chapters31-34 task 9

// var ramadanFirst = new Date("June 18, 2015").getTime();
// var today = new Date().getTime();
// var diff = today - ramadanFirst
// var totalDays = diff / 1000 / 60 / 60 / 24;
// alert(Math.floor(totalDays) + " days have passed since 1st Ramadan, 2015");

//------ Chapters31-34 task 10

// var referenceDate = new Date("Dec 5, 2015 22:50:16");
// document.write("On reference date " + referenceDate);
// var referenceDateMilliseconds = referenceDate.getTime();
// var beginningOf2015 = new Date("Jan 1, 2015").getTime();
// var diff = (referenceDateMilliseconds - beginningOf2015) / 1000;
// document.write("<br>" + diff + " seconds had passed since beginning of 2015");

//------ Chapters31-34 task 11

// var today = new Date();
// document.write("current date: " + today);
// today.setHours(today.getHours() - 1);
// document.write("<br>1 hour ago, it was " + today);

//------ Chapters31-34 task 12

// var today = new Date();
// alert("current date: " + today);
// today.setFullYear(today.getFullYear() - 100);
// alert("100 years back, it was " + today);

//------ Chapters31-34 task 13

// var age = +prompt("Enter your age: ");
// var today = new Date();
// document.write("Your age is " + age +"<br>Your birth year is " + (today.getFullYear() - age));

//------ Chapters31-34 task 14

// var customerName = prompt("Enter the customer name: ");
// var numOfUnits = +prompt("Enter the number of units: ");
// var chargePerUnit = +prompt("Enter the charges per unit: ");
// var lateSurcharge = +prompt("Enter the late payment surcharge: ");
// var netAmount = numOfUnits * chargePerUnit;
// var grossAmount = netAmount + lateSurcharge;
// document.write("<h1>K-Electric Bill</h1><br>");
// document.write("Customer name: " + customerName);
// var currentMonth = new Date().getMonth();
// var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// for(var i = 0; i < months.length; i++){
//     if(currentMonth === i){
//         document.write("<br>Month: " + months[i]);
//         break;
//     }
// }
// document.write("<br>Number of units: " + numOfUnits.toFixed(2));
// document.write("<br>Charges per unit: " + chargePerUnit.toFixed(2));
// document.write("<br><br>Net Amount Payable (Within Due Date): " + netAmount.toFixed(2));
// document.write("<br>Late Payable Surcharge: " + lateSurcharge.toFixed(2));
// document.write("<br>Gross Amount Payable (After Due Date): " + grossAmount.toFixed(2))

//------ Chapters35-38 task 1

// function now(){
//     var currentDate = new Date();
//     document.write(currentDate);
// }
// now();

//------ Chapters35-38 task 2

// function greetUser(firstNameLocal, lastNameLocal){
//     var fullNameLocal = firstNameLocal + " " + lastNameLocal;
//     alert("Hello! " + fullNameLocal);
// }
// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// greetUser(firstName, lastName);

//------ Chapters35-38 task 3

// function add(num1Local, num2Local){
//     sumLocal = num1Local + num2Local;
//     return sumLocal;
// }
// var num1 = +prompt("Enter first number: ");
// var num2 = +prompt("Enter second number: ");
// var sum = add(num1, num2);
// document.write("The Addition of both number is: " + sum);

//------ Chapters35-38 task 4

// function calc(num1Local, num2Local, operatorLocal){
//     if(operatorLocal === '+'){
//         return num1Local + num2Local;
//     }
//     else if(operatorLocal === '-'){
//         return num1Local - num2Local;
//     }
//     else if(operatorLocal === '*' || operatorLocal === 'x'){
//         return num1Local * num2Local;
//     }
//     else if(operatorLocal === '/'){
//         return num1Local / num2Local;
//     }
//     else if(operatorLocal === '%'){
//         return num1Local % num2Local;
//     }
//     else{
//         var error = "Something went wrong!"
//         return error;
//     }
// }
// var num1 = +prompt("Enter first number: ");
// var num2 = +prompt("Enter second number: ");
// var operator = prompt("Enter operator: ");
// var result = calc(num1, num2, operator);
// document.write(num1 + " " + operator + " " + num2 + " = " + result);

//------ Chapters35-38 task 5

// function square(numLocal){
//     return numLocal * numLocal;
// }
// var num = +prompt("Enter the number: ");
// document.write("The square of " + num + " is " + square(num));

//------ Chapters35-38 task 6

// function factorial(numLocal){
//     if(numLocal === 0){
//         return 1;
//     }
//     else if(numLocal < 0){
//         numLocal = Math.abs(numLocal);
//         for (var i = numLocal - 1; i >= 1; i--) {
//             numLocal *= i;
//         }
//         return -numLocal;
//     }
//     else{
//         for (var i = numLocal - 1; i >= 1; i--) {
//             numLocal *= i;
//         }
//         return numLocal;        
//     }
// }
// var num = +prompt("Enter the number: ");
// document.write("The factorial of " + num + " is " + factorial(num));

//------ Chapters35-38 task 7

// function counting(startLocal, endLocal){
//     for(var i = startLocal; i <= endLocal; i++){
//         document.write(i + "<br>");
//     }
// }
// var start = +prompt("Enter starting number: ");
// var end = +prompt("Enter ending number: ");
// counting(start, end);

//------ Chapters35-38 task 8

// function calculateHypotenuse(baseLocal, perpendicularLocal){
//     function calculateSquare(num){
//         return num * num;
//     }
//     return Math.sqrt(calculateSquare(baseLocal) + calculateSquare(perpendicularLocal));
// }
// var baseGlobal = +prompt("Enter base value: ");
// var perpendicularGlobal = +prompt("Enter perpendicular value: ");
// document.write("The hypotenuse = " + calculateHypotenuse(baseGlobal, perpendicularGlobal).toFixed(2));

//------ Chapters35-38 task 9

// function calculateArea(widthLocal, heightLocal){
//     return widthLocal * heightLocal;
// }
// document.write("Static calculation of area: " + calculateArea(10,3));
// var width = +prompt("Enter width value: ");
// var height = +prompt("Enter height value: ");
// document.write("<br>Dynamic calculation of area: " + calculateArea(width, height));

//------ Chapters35-38 task 10

// function checkPalindrome(wordLocal){
//     wordLocal = wordLocal.toLowerCase();
//     if(wordLocal === wordLocal.split('').reverse().join('')){
//         document.write(wordLocal + " is a Palindrome word.");
//     }
//     else{
//         document.write(wordLocal + " is not a Palindrome word.")
//     }
// }
// var word = prompt("Enter the word: ");
// checkPalindrome(word);

//------ Chapters35-38 task 11

// function firstLetterUpper(strLocal){
//     strLocal = strLocal.split("")
//     for(var i = 0; i < strLocal.length; i++){
//         if(strLocal[i] === " "){
//             strLocal[0] = strLocal[0].toUpperCase();
//             strLocal[i + 1] = strLocal[i + 1].toUpperCase();
//         }
//     }
//     strLocal = strLocal.join("");
//     return strLocal;
// }
// var strIn = prompt("Enter string: ");
// document.write("Input: " + strIn);
// var strOut = firstLetterUpper(strIn);
// document.write("<br>Output: " + strOut);

//------ Chapters35-38 task 12

// function findLongestWord(strLocal){
//     var strArr = strLocal.split(" ");
//     for (var i = 0; i < strArr.length; i++){
//         if (strArr[i].length > strArr[i + 1].length){
//             return strArr[i];
//         }
//     }
// }
// var str = prompt("Enter String: ");
// document.write("Text: " + str);
// document.write("<br>Longest word: " + findLongestWord(str));

//------ Chapters35-38 task 13

// function countOccurrenceOfLetter(strLocal, searchedLetterLocal){
//     var count = 0;
//     strLocal = strLocal.toLowerCase().split("");
//     for(var i = 0; i < strLocal.length; i++){
//         if(strLocal[i] === searchedLetterLocal){
//             count = count + 1;
//         }
//     }
//     return count;
// }
// var str = prompt("Enter String: ");
// var searchedLetter = prompt("Enter letter whose occurence(s) you want to count: ");
// document.write("Text: " + str);
// var numberOfOccurrences = countOccurrenceOfLetter(str, searchedLetter);
// document.write("<br>There are " + numberOfOccurrences + " occurrence(s) of letter '" + searchedLetter + "'");


//------ Chapters35-38 task 14

// function calcCircumference(radiusLocal){
//     return (2 * (3.142) * radiusLocal);
// }
// function calcArea(radiusLocal){
//     return ((3.142) * (radiusLocal * radiusLocal));
// }
// var radius = +prompt("Enter radius value: ");
// document.write("Circumference: " + calcCircumference(radius).toFixed(2));
// document.write("<br>Area: " + calcArea(radius).toFixed(2));