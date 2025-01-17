//sample solution:

export function secretNumber(secretArray) {
let oddNumbers = secretArray.filter(num => num % 2 !== 0);
let concatenatedNumbers = oddNumbers.join('');
return parseInt(concatenatedNumbers);
};