/*
function greetings(yourname) {
    let result = 'hello '  + yourname;
    console.log(result);
    
}
let age = 'my age is 25';
greetings(age);
/*
function sumNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
}
sumNumbers('10', 10);

//while loops

function mulSum(times) {
    let 

}

/*
let fruit = 'vegetables, apple';
let morefruits ='banana\napple\nmango';
console.log(fruit);
console.log(morefruits.length);
console.log(fruit.indexOf('tab'));
console.log(fruit.replace('tables', '12345'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit[5]);
console.log(fruit.split(''));
*/

//array
/*
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits[0] = 'plantain';
console.log(fruits);

for (let i = 0, i < fruits.length; i++){

}
Given a person's age and a day ,write the code for the following scenario:

If the person is an Adult (age >=18) , the ticket price on Weekends is 100 and on weekdays is 80.

If the person is a child (age <18), the ticket price is always half of the adult price for that particular day.
let age = 17;
let day = "Sunday";
let price;
let adult = age >= 18;
let child = age < 18;
if (adult){
 if (day === 'Saturday' || 'Sunday'){
     price = 100;
 }else {
     price = 80;
 }
}
if (child){ 
    price /= 2;
}
console.log(age);
console.log(price);


//cinema always gives children (aged less than 12 years) a discount.
//it also gives seniors (aged at least 65) a discount on Mondays and Tuesdays. Given the day of the week and patron's age, 
//write a boolean expression to calculate if the patron is entitled to a discount.
let age = 60;
let day = "Tuesday";
let seniors = age >= 65;
let children = age < 12;
let isGivenDiscount;
if (seniors){
    if (day === 'Saturday' || day === 'Sunday')
    isGivenDiscount = 'NO DISCOUNT';
}else {
    isGivenDiscount = "a discount on Monday and Tuesday";
}
if (children){
    if(day === 'Saturday' || day === 'Sunday'){
        
    }
}
console.log(age);
console.log(isGivenDiscount);

let num1 = 5;
let num2 = 7;
let greater = Math.max (num1, num2);// write your expression here
console.log(greater + " is the greater of "+ num1 + " and " +num2);
*/
//a Cinema is showing movie to children (age < 18) for free and charging adults (age>=18) with $10 per ticket
// write if=else statements to print the following messages according to the given age.
//for adults print the following messages to the console.
//please pay $10
//please proceed to the cinema hall
//for children print the following messages to the console
//please proceed to the cinema hall.
//let age = 34;

//cinema always gives children (aged less than 12 years) a discount.
//it also gives seniors (aged at least 65) a discount on Mondays and Tuesdays. Given the day of the week and patron's age, 
//write a boolean expression to calculate if the patron is entitled to a discount.

/*let age = 11;
let day = "Tuesday";
let seniors = age >= 65;
let children = age < 12;
let isGivenDiscount;
if (seniors){
    if (day === 'Saturday' || day === 'Sunday')
    isGivenDiscount = 'NO DISCOUNT';
}else {
    isGivenDiscount = "Senior Discount";
}
if (children){
    if(day === 'Saturday' || day === 'Sunday'){
        isGivenDiscount = 'No Discount'
    }else{
        isGivenDiscount = 'Children Discount'
    }
}
console.log(isGivenDiscount);
let age = 34;
let children = age < 18;
let adult = age >= 18;
if(adult){
    console.log('please pay $10');
    console.log('please proceed to the cinema hall');
}else if(children){
    console.log('please proceed to the cinema hall');
}
/

function SimpleCalculator(num1, num2, operator) {
    if(operator === '+'){
        return num1 + num2;
    }else if(operator === '*'){
        return num1 * num2;
    }else if(operator === '/'){
        return num1 / num2;
    }else{
        return 'Unknown Operator';
    }
}
console.log(SimpleCalculator(1, 2, '+'));
console.log(SimpleCalculator(1, 2, '&'));
console.log(SimpleCalculator(1, 2, '*'));
console.log(SimpleCalculator(4, 2, '/'));



// Write a function called formatTemperatureAsString which takes two parameters
// The first parameter is the temperature in celsius
// The second parameter is whether to convert to fahrenheit
// The function should return a formatted string like "37.4°F" or "17°C"
//
// Note: If the second parameter is true, the function should call 
// the convertToFahrenheit function you wrote earlier.

// Write your code here
/*function formatTemperatureAsString(tempC, convertToFahrenheit){

}
let result = formatTemperatureAsString(12, false);
console.log(result);  // should print 12°C
result = formatTemperatureAsString(37, true);
console.log(result);  // should print 98.6°F

// Write a function called convertToFahrenheit which takes a single 
// parameter which is the temperature in degrees Celsius.  The function
// should return the corresponding temperature in degrees Fahrenheit.


// Write your code here
function convertToFahrenheit(tempC) {
    let tempF = tempC * (9/5) +32;
    return tempF;
}

let freezing = convertToFahrenheit(0);
console.log(freezing); // should print 32

let ovenTemp = convertToFahrenheit(200);
console.log(ovenTemp); // should print 392

let age = 11;
let day = 'Tuesday'
let isGivenDiscount;
if(age < 12){
    isGivenDiscount = 'Discount always';
}else if(age >= 65){
    if(day === 'Monday' || day === 'Tuesday'){
        isGivenDiscount = 'A discount on Mondays and Tuesdays';
    }
}
console.log(isGivenDiscount);

let age = 11;
let day = "Tuesday";
let isGivenDiscount; 
if(age < 12 || age >= 65){
    if(day === "Saturday" || day === 'Sunday'){
        isGivenDiscount = 'Discount on Sundays';
    }

} else {
    isGivenDiscount = 'No discount';
}
console.log(isGivenDiscount);

let age = 11;
let day = 'Tuesday';
let isGivenDiscount;
if(age < 12){
    if(day === 'Monday' || day === 'Tuesday'){
        isGivenDiscount = 'Children Discount';
    }else {
        isGivenDiscount = 'No ChildrenDiscount'
    }
}if(age >= 65){
    if(day === 'Monday' || day === 'Tuesday'){
        isGivenDiscount = 'Senior Discount';
}else{
    isGivenDiscount = 'No SeniorDiscount'
}

}
console.log(isGivenDiscount);*/

/*let age = 11;
if(age >= 18){
  console.log("Please pay $10");
  console.log("Please proceed to the cinema hall");
}
else if(age < 18){
    console.log("Please proceed to the cinema hall");
}

/*let personName;
let greeting;
if(personName === undefined){
    greeting = 'Hello Stranger'
}
console.log(greeting);
personName = "Raj";
greeting = 'Hello';
console.log(greeting + ' ' + personName);

let personName;
let hour = 9;
let greeting;
if(hour < 12 && personName === undefined){
    greeting = 'Good Morning Stranger';
}
console.log(greeting);

personName = "Raj";
hour = 14;
let greeting;
if(hour < 18){
    greeting = 'Good Afternoon Raj'
}
console.log(greeting); // should print "Good Afternoon Raj"


personName = "Alex";
hour = 19;
let greeting;
if(hour < 21){
    greeting = 'Good Evening Raj'
}
console.log(greeting); // should print "Good Evening Raj"

personName = "John";
hour = 23;
let greeting;
if(hour > 21){
    greeting = 'Good Night John'
}
console.log(greeting); // should print "Good Night John"
*

// Write a function called convertToEmoji which takes the temperature in Celsius
// and returns
// "🥵" if temperature in Celsius is above 30
// "😊" if temperature in Celsius is between 12 and 30
// "🥶" if temperature in Celsius is below 12

function convertToEmoji(tempC) {
    if(tempC > 30){
        return "🥵";
    }else if(tempC >12){
        return "😊";
    }else {
        return "🥶";
    }
       
    }
console.log(convertToEmoji(30));


// Call your function here passing 30 and print the resulting emoji to console
function formatTemperatureAsString(tempC, shouldConvertF) {
    if(shouldConvertF === true){
        return convertToFahrenheit(tempC) + '°F';
    }
    else{
        return tempC + '°C';
    }
}
let result = formatTemperatureAsString(12, false);
console.log(result);  // should print 12°C
result = formatTemperatureAsString(37, true);
console.log(result);  // should print 98.6°F
    
function convertToFahrenheit(tempC){
    return tempC * (9/5) +32;
}

function numberSplit(number){
    let result;
    if(number % 2 === 0){
        result = (number / 2)
        return result;
    }else if(number % 2 === 1) {
        return (number / 2) + '2';
    }
    }
    console.log(numberSplit(4));// should return "22"
    console.log(numberSplit(10));// should return "55"
    console.log(numberSplit(11));// should return "56"
    console.log(numberSplit(-9));// should return "-5-4"
//FUNCTION TRACE 3
// Requirements: Create a trace output file showing each function call 
// including parameter values, and each return value.  You should be able 
// to step through with pen and paper - do not run the code on your computer

// Tip: To refresh your memory of how to write trace output, see this gist:
// https://gist.github.com/McLarenCollege/e276ecc7dc3485a483be469f61dfd671

function foo(koo, y) {
    if ((koo % 3) !== 0) {
        return y === 'hellomax';
    }
    else {
        return 'max';
    }
}

function bar(x) {
    let y = 'hello';
    if (x + 10 >= 19) {
        y = foo(6, x) + y;
    }
    else {
        y = y + 'yooo';
    }
    return y;
}

console.log(!foo(5, bar(10)));


/*
Write function bmi that takes two parameters , the weight and the height and  calculates body mass index bmi.
bmi is calculate as (weight divided by square of height)
Note: Don't use Math.pow() to calculate square.
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*

function Bmi(weight, height){
    let Bmi = weight/(height**2);
    if(Bmi <= 18.5){
        return 'Underweight';
    }else if(Bmi <= 25.0){
        return 'Normal';
    }else if(Bmi <= 30.0){
        return 'Overweight';
    }else {
        return 'Obese';
    }
}
function chooseDrink(age){
    if(age < 14){
        return 'kids drink milk'
    }else if(age < 18){
        return 'Teens drink coke';
    }else if(age < 21){
        return 'Young adults drink Tea';
    }else{
        return 'Adults drink Coffee';
    }
    }
    console.log(chooseDrink(12));// "Kids drink Milk"
    console.log(chooseDrink(17));// "Teens drink Coke"
    console.log(chooseDrink(20));// "Young adults drink Tea"
    console.log(chooseDrink(30));// "Adults drink Coffee"
    console.log(chooseDrink(14));// "Teens drink Coke"
    console.log(chooseDrink(18));// "Young adults drink Tea"
    console.log(chooseDrink(21));// "Adults drink Coffee"*/


    function printSumAndReturnAverage(num1, num2){
        let sum = num1 + num2;
        return sum;
        }
        let average = printSumAndReturnAverage(5,10);
        console.log(average);
        
/*let num1 = 5;
let num2 = 8;
let num3 = 1;
let greatest;
if(num1 > num2){
    greatest = num1;
}else{
    greatest = num2;
} if(num2 > num3){
    greatest = num2;
}else{
    greatest = num3;
}
console.log("The greatest number is "+ greatest);*/

function printLastElementEveryRow(board){
    let newBoard = board.map(row => row.slice(2, row.length+2));
    console.log(newBoard)    
    }
    let board = [['X', 'O', 'X'],['O', 'X', 'X'], ['O', 'X', 'X']];
    printLastElementEveryRow(board);

    /*
    array.push() = adding the element at the end of the array
    array.shift() = removes elements at the beginning of an array
    array.pop() = removes the last element from an array
    array.unshift() = adds the element at the beginning of the array.
    */
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1){
  return names[0];
}else if(strokes <= par -2){
  return names[1];
}else if(strokes == par - 1){
  return names[2]
}else if(strokes == par){
  return names[3]
}else if(strokes == par + 1){
  return names[4];
}else if(strokes == par + 2){
  return names[5]
}else {
  return names[6]
}
  // Only change code above this line
}

console.log((golfScore(5, 4)));

switch (lowercaseLetter) {
    case "a":
      console.log("A");
      break;
    case "b":
      console.log("B");
      break;
  }