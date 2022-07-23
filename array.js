//Given an array of booleans update the first chunk of false values to true until you reach a true value or undefined.
function falseToTrue(booleans){
    for(let i = 0; i < booleans.length; i++){
        for(let j = 0; j < booleans[i].length; j++){
            if(val[i] == false){
                return true;
            }else{
                return false;
            }
        }
    }
    return booleans;
    }
    let val = [false,false,false,true,false,false,true];
    console.log(falseToTrue(val));// should return [true,true,true,true,false,false,true]
    let val2 = [false,false,false];
    console.log(falseToTrue(val2));// should return [true,true,true]

let total = 1;
function printEveryThirdElement(arr){
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            total = arr[i][j];
        }
    }
    console.log(total); 
    }

printEveryThirdElement([2,4,5,6,6,7,7,10,101,0,1]);// 5 7 101
printEveryThirdElement([2,4,5,6,6,7,7,10,101,0,107,55]);// 5 7 101 55