'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) {    //eslint-disable-line

    let sum = a + b;
    return [sum , `The sum of ${a} and ${b} is ${sum}.`];
}
testSum(4, 7);                  

// console.log(result)



// Here is the test for sum(); uncomment it to run it
// testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and 
returns an array where the first element is the product of those numbers, and the
 second element is a string that EXACTLY follows this example and uses the values 
 that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it 
is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here


function multiply(a, b) { //eslint-disable-line

    let Multipl = a * b;
    return [Multipl, `The product of ${a} and ${b} is ${Multipl}.`];
}
testMultiply(5, 9);
// Here is the test for multiply(); uncomment it to run it
// testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns 
an array where the first element is the sum of those three numbers, the second element is the product 
of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example 
and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. 
To do addition, use your sum() function, and to do multiplication, use your multiply() 
function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here


function sumAndMultiply(a, b, c) { //eslint-disable-line

    let sum2 = sum(sum(a, b)[0], c)[0];
    let Multipl = multiply(multiply(a, b)[0], c)[0];  //4 and 7 and 5 sum to 16.
    return [sum2, Multipl, `${a} and ${b} and ${c} sum to ${sum2}.`,` The product of ${a} and ${b} and ${c} is ${Multipl}.`];
}
testSumAndMultiply(4, 7, 5);

// console.log(result3)

// Here is the test for sumAndMultiply(); uncomment it to run it
// testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument 
and then returns an array where the first element is the sum of the numbers in the array, and 
the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, 
use your sum() function that you've already created. You're going to have to be resourceful to 
figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, 
uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
let testArray = [2, 3, 4];
function sumArray(sumArr) { //eslint-disable-line

    for (let i = 0; i < sumArr.length; i++) {

      var sum3 = sumAndMultiply(sumArr[0], sumArr[1], sumArr[2])[0];
    }
    return [sum3, `${sumArr[0]}, ${sumArr[1]} , ${sumArr[2]} was passed in as an array of numbers, and ${sum3} is their sum.`];
}
testSumArray(testArray);
// console.log(result4)
// Here is the test for sumArray(); uncomment it to run it

// testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and 
returns an array whose first element is the product of those numbers, and the second element 
is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication,
 use your multiply() function that you've already created. You're going to have to be resourceful 
 to figure out how to do this. This function should handle an array containing three elements. However,
  you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, 
uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here

function multiplyArray(multArr) { //eslint-disable-line

    for (var i = 0; i < multArr.length; i++) {

        var Multipl = sumAndMultiply(multArr[0], multArr[1], multArr[2])[1];
    }
    return [Multipl, `The numbers ${multArr[0]},${multArr[1]}, ${multArr[2]} have a product of ${Multipl}`];
}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as
 its argument and returns an array whose first element is the product of those numbers, and 
 the second element is a string that EXACTLY follows this example and concatenates a message 
 using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do 
multiplication, use your multiply() function that you've already created. You're going 
to have to be resourceful to figure out how to do this. However, you may continue to 
use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is 
finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
testMultiplyArray(testArray);
console.log(multiplyArray(testArray)[1])
let testDynamicArray = [1, 2, 3, 4, 5];

function multiplyAnyArray(dynamicArray) { //eslint-disable-line
var i;
var numberIndex2 = 1;
    for (i = 0; i < dynamicArray.length; i++) {
        numberIndex2 = multiply(numberIndex2, dynamicArray[i])[0];
        console.log(numberIndex2)
    }
    return [numberIndex2, `The numbers ${dynamicArray.toString()} have a product of ${numberIndex2}`];
}

testMultiplyAnyArray(testDynamicArray);
console.log(multiplyAnyArray(testDynamicArray)[1])


// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.



//  this answer in another ways



let secondResule = ``;
let result = [];
function sum(a, b , c) {

    let sum = a+b+c;
    result.push(sum);
     secondResule = `The sum of ${a} and ${b} and ${c} is ${sum}.`;
    result.push(secondResule)
}
sum(8, 6 ,4)


let result2 = []
function multiply(a, b , c) { 

    let sum = a*b*c;
    result2.push(sum);
     secondResule = `The product of ${a} and ${b} and ${c} is ${sum}`;
    result2.push(secondResule)
    // console.log(result2)

}
multiply(9, 5 ,4)


let result3 = [];
sumAndMultiply(5,7,9)
function sumAndMultiply(a, b, c) { 
sum(a,b,c)
multiply(a,b,c)
result3.push(result[2])
result3.push(result2[2])
secondResule = `${a} and ${b} and ${c} sum to ${result[2]}`
result3.push(secondResule)
secondResule = `The product of ${a} and ${b} and ${c} is ${result2[2]}`
result3.push(secondResule)
}


let a = 3;
let b = 4;
let c = 2;
var testArra = [a, b, c];
let result4 = [];
function sumArray(sumArr) { 
       let sum = sumArr.reduce((a, b) => a + b, 0) 
result4.push(sum);
secondResule = `${a},${b},${c} was passed in as an array of numbers, and ${sum} is their sum`
result4.push(secondResule)
}
sumArray(testArra)


let d = 3;
let e = 4;
let f = 2;
var testArray2 = [d, e, f];
let result5 = [];
function multiplyArray(multArr) { 
    let sum = multArr.reduce((a, b) => a * b) 
    result5.push(sum);
    secondResule = `The numbers ${d},${e},${f} have a product of ${sum}.`
    result5.push(secondResule)
    }
    multiplyArray(testArray2)
    // console.log(result5)

    let g = 3;
    let h = 4;
    let i = 2;
    let j = 4;
    let k = 2;
    var testDynamicArra = [g,h,i,j,k];
    let result6 = [];
    function multiplyAnyArray(dynamicArray) { 
        let sum = dynamicArray.reduce((a, b) => a * b) 
        result6.push(sum);
        secondResule = `The numbers ${g},${h},${i},${j},${k} have a product of ${sum}.`
        result6.push(secondResule)
        }
        multiplyAnyArray(testDynamicArra)
        console.log(result6)

