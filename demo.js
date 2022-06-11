//Given the following nested array write code that prints all the non-negative numbers in each sub-array that occur before a negative number.
/*let count = 0;
function printUntilNegative(arr){
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
        if (arr[i][j]){
            arr[i][j] = 
        }

        }

    }
}
let arr = [[1,2,-3,5],[5,0,-4,7,8],[-1,5,6],[4,5,-6,8,-9]];
printUntilNegative(arr);// should print 1 2 5 0 4 5////
let num = 5;
for (let i = 1; i <= 12; i++) {
    console.log(num * i);
    
}

let arr = ['Blah', false, true, 'Hello', 7];
if (arr[2] === true) {
    console.log(arr[3]);
}else{
    console.log(arr[4]);
}

let numbers = [10, 20, 30];
if (numbers[numbers[0] % 8] >= numbers[2]) {
    console.log('Greater than or equal');
    
}else {
    console.log('Smaller');
}

let array = ['blue', 'yellow', 'green', 'red'];
let testScores = [2, 4, 6];
let sum = [testScores[0] + testScores[1] + testScores[2]];
let averageScore = sum / 2;
console.log(averageScore);

let scores = [90, 100, 80]
scores[2] = 50;
scores[7] = 60;
scores[6] = 50;
scores[5] = 40;
console.log(scores);
 
let userA = [
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
console.log(userA);


let board = [[' ', 'O', 'X'],['O', 'X', ' '], ['O', ' ', 'X']]; 
board[1][2] = 'X';
console.log(board);
function hasXWonInLastCol(board) {
    if(board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X'){
        return true;
    }else{
        return false;
    }
    }
    
    console.log(hasXWonInLastCol([[' ', 'O', 'X'],['O', 'X', ' '], ['O', ' ', 'X']]));// false
    console.log(hasXWonInLastCol([['O', 'X', 'X'],['O', 'X', ' '], ['O', 'X', 'X']]));// false
    console.log(hasXWonInLastCol([['X', 'O', 'O'],['O', 'X', 'X'], ['O', ' ', 'X']]));// false
    console.log(hasXWonInLastCol([[' ', 'O', 'X'],['O', 'X', 'X'], ['O', ' ', 'X']]));// true

    
function average(numberArray){
    numberArray = (numbers[0] + numbers[1] + numbers[2]) / 3;
    return numberArray;
    }
    let numbers = [1,2,3];
    console.log(average(numbers)); // SHOULD PRINT 2

    let arr1 = [[[1,[10,11]],[5,6]],[2,3],[5,6]];
    arr1[0][0][1][1]++;
    console.log(JSON.stringify(arr1));

    function addTotal(arr){
        total = arr[0] + arr[1] + arr[2] + arr[3];
        arr[4] = total;
        return arr;
        }
        let arr = [1, 2, 3, 4];
        console.log(addTotal(arr));
*/

        
            /*let board = [
                ['X', 'O', 'X'],
                ['O', 'X', 'X'], 
                ['O', 'X', 'X']
            ];
            let newBoard = board.map(row => row.slice(2, row.length+2));
            console.log(newBoard)

           function printLastElementEveryRow(newBoard){
             return newBoard;
              
            }
           
            function printLastElementEveryRow(board){
                let newBoard = board.map(row => row.slice(2, row.length+2));
                console.log(newBoard)    
                }
                let board = [['X', 'O', 'X'],['O', 'X', 'X'], ['O', 'X', 'X']];
                printLastElementEveryRow(board);
            */

                
                

            
/*let age = 11;
let day = "Tuesday";
let Children = age < 12;
let seniors = age >=65;
let isGivenDiscount;
if(Children){
    console.log(true);
}else if(seniors){
    if(day === 'Monday' || day === 'Tuesday'){
        console.log(true);

    }
}

console.log(isGivenDiscount);*/

/*
EXPRESSION TRACE
numbers[numbers[0] % 8] >= numbers[2]
numbers[10 % 8] >= numbers[2]
30 >= 30;
true;
*
let nums = [1,2,3];
nums[0] = nums[0] + 3; //4
nums[1] = nums[1] * nums[0]; //8
nums[2] = (nums[0] + 2*nums[7 - 2 * 3])* 3 + nums[8 / 4];//4 + 2*8*3 +3 

/*
EXPRESSION TRACE
nums[0] = nums[0] + 3;
nums[0] = 1 + 3 = 4;
nums[1] = nums[1] * nums[0];
nums[1] = 2 * 4 = 8
nums[2] = (nums[0] + 2*nums[7 - 2 * 3])* 3 + nums[8 / 4];
nums[2] = 4 + 2 * nums[(7 - 6)] * 3 + nums[2]
nums[2] = 4 + 2 * nums[1] * 3 + nums[2]
nums[2] = 4 + 2 * 8 * 3 + 3
nums[2] = 4 + 48 +3
nums[2] = 55


  let n = 1;
  console.log('Starting', n);
  if (n < 5){
      console.log(n);
      n = n + 1;
  }
  console.log('Finishing', n);

let a =  'F';
while (a !== 'FOOO') {
    console.log(a + 'D'); a = a + 'O';
    
}
console.log(a);

  
let i = 0;
    function sumBetween(a, b) {
        while (a < b) {
            
            
        }
        
    }


console.log(sumBetween(5, 8));//
console.log(sumBetween(6, 12));//63

let i = 100;
while (i >= 70) {
    console.log(i);
    i = i - 2;
   
  }

  function numberTable(num, terms) {
      let i = 1;
    while (i <= terms) {
        let multiply = num * i;
        i = i + 1;
        console.log(multiply);
    }
 }
 numberTable(3, 10);

let fromNum = 6;
let toNum = 12;
let sum = 0;
while (sum <= toNum) {
    sum = fromNum % 2
    sum = sum + 1;
}
console.log(sum);

function numberSplit(number){
    let number = number(number+1)/2;
    if(number % 2 === 0){
        return number;
    }
}
    console.log(numberSplit(4));// should return "22"
    console.log(numberSplit(10));// should return "55"
    console.log(numberSplit(11));// should return "56"
    console.log(numberSplit(-9));// should return "-5-4"

    function hasXWon(board){
        if(board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X' || board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X' ||board[2][0] === 'X' && board[2][1] ==='X' && board[2][2] === 'X'){
            return true;
        }else if(board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X' || board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X' ||board[0][2] === 'X' && board[1][2] ==='X' && board[2][2] === 'X'){
            return true;
    }else if(board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X' || board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X' ||board[0][2] === 'X' && board[1][2] ==='X' && board[2][2] === 'X'){
     return true;   
    }
}

        let board = [[' ', 'O', 'X'],['O', 'X', ' '], ['O', ' ', 'X']];
        console.log(hasXWon(board));// false
        board = [['X', 'O', ' '],['O', 'X', 'O'], ['X', 'O', 'X']];
        console.log(hasXWon(board)); // true 
    
    let count = 0;
        function countAnils(names){
            if(names[0] === 'Anil' || names[1] === "Anil" || names[2] === 'Anil' || names[3] === 'Anil'){
                count++;
                return count;
            }else{
                return count;
            }
            }
            console.log(countAnils(['Paul', 'Anil', 'Kim', 'Anil']));
            console.log(countAnils(['Paul', 'Sam', 'Kim', 'Rajesh']));*/


        let count = 0;
        function countAnils(names){
            switch(names){
                case names[0]:
                    count++;
                    break;
            }
            }

            console.log(countAnils(['Paul', 'Anil', 'Kim', 'Anil']));
            console.log(countAnils(['Paul', 'Sam', 'Kim', 'Rajesh']));
            