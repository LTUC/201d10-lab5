'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
    var total = a + b;
    return [total, `The sum of ${a} and ${b} is ${total}.`];
}

// Here is the test for sum(); uncomment it to run it
sum(4, 7);
console.log(sum(4, 7))

//
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) {

    var result = a * b;
    return [result, `The product of ${a} and ${b} is ${result}.`];

}

// Here is the test for multiply(); uncomment it to run it
multiply(5, 9);
console.log(multiply(5, 9));

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line

    var arg1s = sum(a, b);
    var arg1sm = sum(arg1s[0], c);

    var arg1m = multiply(a, b)
    var arg2sm = multiply(arg1m[0], c);

    return [arg1sm[0],
            arg2sm[0],
           `${a} and ${b} and ${c} sum to ${arg1sm[0]}.`,
           `The product of ${a} and ${b} and ${c} is ${arg2sm[0]}.`]
}

// Here is the test for sumAndMultiply(); uncomment it to run it
sumAndMultiply(4, 7, 5);
console.log(sumAndMultiply(4, 7, 5))

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
//var testArray = [2, 3, 4]; //eslint-disable-line

var testArray = [2, 3, 4];

function sumArray(testArray) { //eslint-disable-line
    var x = sum(testArray[0], testArray[1]);
    var y = sum(x[0], testArray[2]);

    return [`${y[0]}`,`${testArray[0]},${testArray[1]},${testArray[2]} was passed in as an array of numbers, and ${y[0]} is their sum.`]

}

// Here is the test for sumArray(); uncomment it to run it

sumArray(testArray);
console.log(sumArray(testArray))

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line

    var x = multiply(testArray[0], testArray[1]);
    var y = multiply(x[0], testArray[2]);

    return [`${y}`,`The numbers ${testArray[0]},${testArray[1]},${testArray[3]} have a product of ${y}.`]

}

// Here is the test for multiplyArray(); uncomment it to run it
multiplyArray(testArray);
console.log(multiplyArray(testArray));

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1, 2, 3, 4, 5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray)  //eslint-disable-line
{   
    // a first method
    // var arraySize = testDynamicArray.length;
    // var r = 1;
    // for ( var i = 1 ; i <= arraySize+1 ; i++ )
    // {
    //    r *=  multiply( 1 , multiply ( 1 , testDynamicArray [i-1] ))
    //    console.log(r)
    // }
    // return r

    // a second method
    var r2 = testDynamicArray.reduce(  ( multiplier , currentValue ) =>
     { return multiplier * currentValue; }, 1  );
    console.log(r2)
}

function multiplyAnyArray2(dynamicArray)  // a third method
{
    x=multiply(testDynamicArray[0],testDynamicArray[1]);
    y=multiply(testDynamicArray[2],testDynamicArray[3]);
    z=multiply( multiply ( x , y  ) , 5 )

    return [z,`The numbers ${testDynamicArray[0]},${testDynamicArray[1]},${testDynamicArray[2]},${testDynamicArray[3]},${testDynamicArray[4]} have a product of ${z}.`]

}






// Here is the test for multiplyArray(); uncomment it to run it
multiplyAnyArray(testDynamicArray);
console.log(multiplyAnyArray(testDynamicArray))

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
