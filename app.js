// let currentAge = prompt("Enter your age.");
// let yearsEligibleToVote = currentAge - 18;
// console.log(yearsEligibleToVote);

// var number = "200" - "250";
// console.log(number);


// let profit = "200" - "Duck";
// console.log(profit);


// let currentAge = prompt("Enter your age");
// let yearsEligibleToVote = currentAge + 3;
// console.log(yearsEligibleToVote);


// var myInteger = parseInt("1.9999");
// console.log(myInteger);

// var myInteger = parseFloat("1.9999");
// console.log(myInteger);

// var integerString = "24";
// let num = Number(integerString)
// console.log(num);


// let floatingNumString = "24.9876";
// let num1 = parseInt(floatingNumString);
// console.log(num1);


let numberAsNumber = 12.234;
let numberAsString = numberAsNumber.toString();
console.log(numberAsString);


let price = 9.95;
let sale = 0.065;
let total = price + (price * sale);
console.log(total);
let prettyTotal = total.toFixed(2);
console.log(prettyTotal);


let num = 12345;
let str = num.toString();
if(str.charAt(str.length) === "5"){
    str = str.slice(0, -1) + "6";
}

num = Number(str);
let prettyNum = num.toFixed(2);
console.log(prettyNum);