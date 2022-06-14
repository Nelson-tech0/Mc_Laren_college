/*"let mangoesInBox = 20;
let warehouseCapacity = 500;
let boxesInACrate = 16;
let mangoesInCrate = mangoesInBox * boxesInACrate; 
let mangoesInWareHouse = warehouseCapacity * mangoesInCrate;
console.log(mangoesInWareHouse);"

"let temp = 32;
temp += '°C'
let result = 'It is currently' + ' ' + temp;
console.log(result);"

"OPERATION TRACE
Line 8 
Salutation = 'hello'
line 9 
c = c + 2
4 + 2 = 6;
line 10
greeting = c -3
6 - 3 = 3
greeting = 3;"

swap numb
"let num1 = 20;
let num2 = 30;
let temp = num1;
num1 = num2;
num2 = temp;
console.log(num1, num2);"

Expresion trace abc
"line 3;
a + 'b'
'a' + 'b'
'ab'

line 4;
b + 5
5 + 5
10

line 5
b + '1'
10 + '1'
'101'

line 6
a + c
'ab' + '101'
'ab101'

line 7;
b + c
10 + '101'
'10101'"



rotate three numbs

"let a = 1;
let b = 2;
let c = 3;
a = a + b;
b = c - b;
c = a - b;
console.log(a,b,c);"

"line 4
a + b
'1' + '2' 
'12'
line 5
b - a
'2' - '12' 
-10
line 6
a + c
'12' + 3
'123'
line 7
c - b
'123' - (-10)
123 + 10
133"

"line 5 
a = a + b;
1 + 2 = 3;
line 6 
b = b - a
2 - 3 = -1;
line 7 
c = a + c;
c = 3 + '3' = '33';
line 8 
c = c - b
c = '33' - (-1);
'33' - (-1) = 33 + 1 = 34;"

"let fehrenheit = 68;
let celcius = ((fehrenheit - 32) *5) / 9;//write your code here
console.log(celcius);"

party time
"let anuBirthDay = 26;
  let anuBirthMonth = ""August"";
  let anuBirthYear = 1986;
  
  let givenDay = 26; 
  let givenMonth = ""February""; 
  let givenYear = 2021; 
  
  let isPartyTime = anuBirthDay == givenDay && anuBirthMonth == givenMonth; // Write your expression here
  console.log(isPartyTime);"

  "let tempC = 15;
let isRaining = false;
let shouldTakeCoat = tempC < 10 || isRaining === true; // write your expression here
console.log(shouldTakeCoat);

"let meeting1Start = 8;
let meeting1End = 12;
let meeting2Start = 11.5;
let meeting2End = 13;
let meetingsOverlap = meeting1End > meeting2Start;//write your code here
if (meetingsOverlap) {
  console.log('Meetings overlap');
}
else {
  console.log('Meetings do not overlap');
}"

"let year = 2020;
let isMarried = false;
let taxRate;
if (year === 2022) {
    if (isMarried) {
        taxRate = 20;
    }
    else {
        taxRate = 25;
    }
}
else {
    if(isMarried){
        taxRate = 21;
    }
    else{
        taxRate = 24;
    }
}
console.log(taxRate);"

"let income = 60000;
let hasChildren = true;
let taxPercentage;
if(income > 50000){
    taxPercentage = 0.45;
}else {
    taxPercentage = 0.4;
}if(hasChildren){
    taxPercentage = taxPercentage - 0.02;
}
console.log(""The applicable tax percentage is "" + taxPercentage + ""%"");

"

"let age = 21;
let day = 'Monday';
let price;  
if(age < 12){
  price = 50;
}if(age >= 65) {
  if(day === 'Saturday' || day === 'Sunday'){
    price = 70;
  }else {
    if(age >= 65){
      price = 80;
    }
  } if (age < 12 && age >= 65){
    price = 100;
  }
}
console.log(""Ticket price is "" + price);"

greatest numb
"let num1 = 5;
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
console.log(""The greatest number is ""+ greatest);


"let preferCelsius = false;
let tempC = 3;
let location = 'Vancouver';
let emojiFace;
if(location){
    emojiFace = '🥶';
}else if(location === 'New Delhi'){
    emojiFace = '🥵'; 
}else if(location === 'Sydney'){
    emojiFace = '😊';
}else {
    emojiFace = '🥵';
}
let temperatureString;
if(location){
    temperatureString = '37.4°F';
}else{
    temperatureString = '35°C';
}
console.log('In ' + location + "" "" + 'it is currently ' + emojiFace + "" "" + temperatureString);"

"let year = 2020;
let children = 2;
let taxRate;
if(year){
    taxRate = 0.2;
}else if(year === 2021){
    taxRate = 0.25;
}else{
    taxRate = 0.28;
}if(children){
    taxRate = taxRate - 0.03;
}

console.log(taxRate);
"
"
"Expected function trace output

maxwell(-2, -3)
rossy -2 === 4 || -2 > -3 
false || true = true;
hammer (k, seelo, pop)
'magic' === 4 = false 
false = k + pop
= 'magic' + 'butter' 
'magicbutter'
"

calculator
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

function convertToFahrenheit(tempC) {
    let tempF = tempC * (9/5) +32;
    return tempF;
}

let freezing = convertToFahrenheit(0);
console.log(freezing); // should print 32

let ovenTemp = convertToFahrenheit(200);
console.log(ovenTemp); // should print 392"

"function convertToEmoji(tempC) {
    if(tempC > 30){
        return ""🥵"";
    }else if(tempC >12){
        return ""😊"";
    }else {
        return ""🥶"";
    }
       
    }
console.log(convertToEmoji(30));"

"function Bmi(weight, height){
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
""let userA = [
    22,
    false,
    'vivek',
    'India',
    ['Hiking', 'Fishing', 'Reading'],
    [
        [72, 60],
        [88, 20],
        [50, 36],
    ]
]
userA[0]++;
userA[4][3] = 'Swimming';
let locationsVar = userA[5];
userA[5][3] = [50, 70];
userA[5][0][1]++;
console.log(userA);"

function addTotal(arr){
    total = arr[0] + arr[1] + arr[2] + arr[3];
    arr.push(total);
    return arr;
 }
    let arr = [1, 2, 3, 4];
    console.log(addTotal(arr));

    "function printLastElementEveryRow(board){
        let newBoard = board.map(row => row.slice(2, row.length+2));
        console.log(newBoard)    
        }
        let board = [['X', 'O', 'X'],['O', 'X', 'X'], ['O', 'X', 'X']];
        printLastElementEveryRow(board);"

"let i = 100;
while (i >= 70) {
    console.log(i);
    i = i - 2;
   
  }
"

"function numberTable(num, terms) {
      let i = 1;
    while (i <= terms) {
        let multiply = num * i;
        i = i + 1;
        console.log(multiply);
    }
 }
 numberTable(3, 10);
"*/