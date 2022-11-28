    // Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


function createPhoneNumber(array) {
    const codeArea = array.slice(0, 3).join('').toString()
    const firstsNumber = array.slice(3, 6).join('').toString()
    const secondsNumbers = array.slice(6, 10).join('').toString()
    console.log(`(${codeArea}) ${firstsNumber}-${secondsNumbers}`)
  }

//  createPhoneNumber(numbers);


// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

const number2 = 153;

function narcissistic(value) {
    const element = value.toString()
    let result = 0;

    for (let i = 0; i < element.length; i++) {
     let element2 = Number(element[i])**(element.length);

     result += element2;
    }
    if (result == value) return true
    else { return false }
}

narcissistic(number2);


// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

let str1 = 'hola mundo';

function getCount(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            counter++;
        } 
        
    }
    // console.log(counter)
    return counter
}

getCount(str1);