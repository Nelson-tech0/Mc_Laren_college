function multiply(num) {
   let i = 1;
   while(i <= num){
      let sum = 3 * i;
      
       console.log(sum);
       i++;
   }
}
console.log(multiply(12));
console.log ()

function countAnils(names){
   let count = 1;
   let noCount = 0;
   if(names[0] === 'Anil'){
       return count++;
   }else if(names[1] === 'Anil'){
       return count++;
   }else if(names[2] === 'Anil'){
       return count++;
   }else if(names[3] === 'Anil'){
       return count++;
   }else{
       return noCount;
   }
   }
   console.log(countAnils(['Paul', 'Anil', 'Kim', 'Anil']));
   console.log(countAnils(['Paul', 'Sam', 'Kim', 'Rajesh']));

   function printLastElementEveryRow(board){
       let lastElement = board[board.length];
       return lastElement;
       }
       let board = [['X', 'O', 'X'],['O', 'X', 'X'], ['O', 'X', 'X']];
       console.log((printLastElementEveryRow(board)));