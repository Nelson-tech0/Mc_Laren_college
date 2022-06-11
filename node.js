/*let firstName = 'special'
let firstLetterOfFirstName = firstName[4]
let lastLetterOfFirstName = firstName[firstName.length - 7]

let arr = [[1, 2, 3], [4,5,6], [7,8,9], [[10, 11, 12], 13, 14]]
let array = arr[arr.length -1];


let ourArray = ['Nelson', 'Ebuka', 'Kennedy']
ourArray.push('Tim', 'Sharp');
ourArray.unshift('jade', 'hernry');
ourArray.pop();
ourArray.shift()
console.log(ourArray);

let a = 10;
let b = 'Nelson'
let c = {};
let d = [1, 2, 3];
let e = a > 0;
let f = a === 0 ? yes : No;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(f);*/
let myGLobal = 10;
function fun(){
    let output = "";
    if (typeof myGLobal != undefined){
        output += 'myGlabal: ' + myGLobal;
    }
    console.log(output);
}
fun()

let a = 3
if (a === '3'){
    console.log(true);
}else{
    console.log(false)
}