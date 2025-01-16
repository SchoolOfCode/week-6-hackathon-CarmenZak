// Congratulations on making it this far! YOu have to find the code to open the portal. How? Its the sum of the positive integers in a hidden array. 

// You have to write a function that returns the sum of the positive integers in the hidden array.


export function secretNumber(secretArray) {

//insert answer here
let oddNumbers = secretArray.filter(num => num % 2 !== 0);
return oddNumbers.join('');
};