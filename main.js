// Congratulations on making it this far! You have to find the code to open the portal. How? You need to find the secret number hidden in the secretArray. 
// Write a function that returns all of the odd integers in the hidden array concatenated together as one 7 digit integer. 


// export function secretNumber(secretArray) {

// //insert answer here
// let oddNumbers = secretArray.filter(num => num % 2 !== 0);
// let concatenatedNumbers = oddNumbers.join('');
// return parseInt(concatenatedNumbers);
// };
export function secretNumber(secretArray) {
    let oddNumbers = secretArray.filter(
        num => typeof num === 'number' && num % 1 === 0 && num % 2 !== 0 && num > 0
    );
    let concatenatedNumbers = oddNumbers.join('');
    return parseInt(concatenatedNumbers);
};
