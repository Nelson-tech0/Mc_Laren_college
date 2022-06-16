//Given an array write a function to print every third element of the array .
/*let total = 1;
function printEveryThirdElement(arr){
    for(let i = 0; i < arr.length; i ++){
        for (let j = 0; j < arr[i].length; j ++){
            total = arr[i][j];
        }
    }
    console.log(total); 
    }

printEveryThirdElement([2,4,5,6,6,7,7,10,101,0,1]);// 5 7 101
printEveryThirdElement([2,4,5,6,6,7,7,10,101,0,107,55]);// 5 7 101 55


let age = 11;
let day = "Tuesday";
let isGivenDiscount = (age<12) || ( age>=65 && ( day === "Tuesday" || day === "Monday" ));  
console.log(isGivenDiscount);

let age = 34;
if(age >= 18){
  console.log("Please pay $10");
  console.log("Please proceed to the cinema hall");
}
  console.log("Please proceed to the cinema hall");

let num1 = 5;
let num2 = 8;
let num3 = 1;
let greatest;
if(num1 > num2 && num1 > num3){
    greatest = num1;
}else if(num2 > num1 && num2 > num3){
    greatest = num2;
}
else{
    greatest = num3;
}
console.log("The greatest number is "+ greatest);


 
let personName;
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

let age = 34;
if(age >= 18){
  console.log("Please pay $10");
  console.log("Please proceed to the cinema hall");
}
else if(age < 18){
    console.log("Please proceed to the cinema hall");

    function printSumAndReturnAverage(num1, num2){
        let sum = (num1 + num2);
        sum = sum/2;
        return sum;
        }
        let average = printSumAndReturnAverage(5,10);
        console.log(average);

        function hasXWon(board){
            if(board[0][0] === 'X' && board[1][1] === 'X' && board[2][2]){
                return true;
            }else{
                return false;
            }
    }
        let board = [[' ', 'O', 'X'],['O', 'X', ' '], ['O', ' ', 'X']];
        console.log(hasXWon(board));// false
        board = [['X', 'O', ' '],['O', 'X', 'O'], ['X', 'O', 'X']];
        console.log(hasXWon(board)); // true

function sumBetween(a, b) {
    let sum = 0;
    while (a <= b){
        sum = sum + a;
        a++;
    }
    return sum;
}
console.log(sumBetween(5, 8));//
console.log(sumBetween(6, 12));//63
console.log(sumBetween(6, 6));//6


function sumBetween(a, b) {
    let sum = 0;
    while (b <= a){
        sum = sum + b;
        b++;
    }
    return sum;
}
console.log(sumBetween(10, 8));//

let arr = [[[1,[10,11]],[5,6]],[2,3],[5,6]];
arr[0][0][1][1] = 12;
console.log(JSON.stringify(arr));

let fromNum = 6;
let toNum = 12;
let sum = 0;
while (fromNum <= toNum){
    if (fromNum % 2 == 0){
        sum += fromNum;
    }
    fromNum++;
}
console.log(sum);

function falseToTrue(booleans){
    let index = 0;
    while( index < booleans.length){
        
        }
    }
    let val = [false,false,false,true,false,false,true];
    console.log(falseToTrue(val));// should return [true,true,true,true,false,false,true]
    let val2 = [false,false,false];
    console.log(falseToTrue(val2));// should return [true,true,true]*/


let arr = [1, 2, 4, 5, 6, 8, 9, 8, 7, 8, 4];
let i = 0;
while(i < arr.length){
    if(arr[i] % 2 == 1){
        i = arr[i] * 2;
    }
    i++;
}

console.log(arr);// should print [2, 2, 4, 10, 6, 8, 18, 8, 14, 8, 4]

