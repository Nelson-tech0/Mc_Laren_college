function multiply(num) {
    for(let i = 1; i < num; i++){
        let times = 3;
        let sum = times * i;
        return sum;
    }
}
console.log(multiply(12));

let age = 11;
let day = "Tuesday";
let children = age < 12;
let seniors = age >=65;
let isGivenDiscount = seniors === day || day === "Monday" 
console.log(isGivenDiscount);
//Write an expression given age and day to calculate if patron is given disount.
console.log(isGivenDiscount);