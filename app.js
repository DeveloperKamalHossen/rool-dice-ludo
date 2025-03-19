// JavaScript Math


/*
* If need Round Number
*/


let num = 30.482145566;  // Decimal Number

console.log(Math.round(num));


/*
* Ceil Number 
*/

console.log(Math.ceil(num));


/*
* Floor Number 
*/

console.log(Math.floor(num));


/*
* Square Value
*/

console.log(Math.pow(3, 2));

/*
* Root Value
*/

console.log(Math.sqrt(81)); 

/*
* ABS Absulated Value
*/

console.log(Math.abs(-5));    // -5 OR 5  = 5 Absulated Value

/*
* Min Value
*/

console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 0));  // Ans 0

/*
* Max Value
*/

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 0)); // Ans 7

/*
* PI Value
*/

console.log(Math.PI); // Ans 3.1416

/*
* Sin Value
*/

console.log(Math.sin( 90 * Math.PI / 180)); // Ans 1
console.log(Math.sin( 60 * Math.PI / 180)); // Ans  0.8660254037844386
console.log(Math.sin( 45 * Math.PI / 180)); // Ans 0.7071067811865475
console.log(Math.sin( 0 * Math.PI / 180)); // Ans 0

/*
* Cos Value
*/

console.log(Math.cos( 0 * Math.PI / 180)); // Ans 1
console.log(Math.cos( 60 * Math.PI / 180)); // Ans 0.5000000000000001

/*
* Random Number
*/
console.log(Math.random().toFixed(2) * 10 + 1); //  Random Number With Decimal Number
console.log(Math.floor(Math.random().toFixed(2) * 10 + 1)); //  Random Full Number 



/*
* Luddu Play ( Dice Random Number)
*/

let upperValue = 6;
let lowerValue = 1;
let resultValue = Math.ceil(Math.random() * upperValue);

console.log(resultValue);

