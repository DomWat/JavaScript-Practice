// Palindrome 

function palindrome(str) {
    var reg = /[\W_]/g // regular expression (regex) will take out all capitals and spaces in the parameter 

    var smallStr = str.toLowerCase().replace(reg, "")

    var reversed = smallStr.split("").reverse().join("");
    if (reversed === smallStr) {
        return "This is a palindrome"
    } else {
        return "This is not a palindrome"
    }
}

console.log(palindrome("Race car"))




// remove duplicates from an array 


// brute force 
let array1 = []
let array2 = ["John", "Mary", "Alex", "Steve", "Mary", "John"]

let len = array2.length

for(let i = 0; i < len; i++) {
    if(array1.indexOf(array2[i]) === -1) {
        array1.push(array2[i])
    }
}
console.log(array1)

// using sort with numbers 
let a = [1, 2, 5, 2, 1, 8]
let b = []

let length = a.length

a.sort()

let _temp
for (let i = 0; i < length; i++) {
    if(a[i] !== _temp) {
        b.push(a[i])
        _temp = a[i]
    }
}

console.log(b)




// return true or false if item is in array 
let array = [1, 4, 8, 7, 98, 23, 56]

function inArray(num) { // look up .includes 
    for(let i = 0; i <= array.length; i++) { 
        // the first one gives the i a value, second tells when to end the iteration, 3 adds one to keep it moving
        if(array[i] === num) {
            return true
        }  
    } 
    return false
}
console.log(inArray(98))





// find the largest number in an array
let num = [54, 1, 23, 8, 90, 12, 50]

let max = num[0]
for(let i = 0; i < num.length; i++) {
    if(num[i] > max) {
        max = num[i]
    }
}
console.log(max)

// finding the smallest number 
let min = num[0]
for(let i = 0; i < num.length; i++) {
    if(num[i] < min) {
        min = num[i]
    }
}
console.log(min)



// check if a number is even or odd 
function evenOdd(num) {
    if(num % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}
console.log(evenOdd(17))




//FizzBuzz
