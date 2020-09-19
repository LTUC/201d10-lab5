
'use strict';

function sum(a, b) { 
var index1 = a+b;
var index2=a.toString()+b.toString()
var result = [index1,index2]
return result
}



function multiply(a, b) { 
      
        var index1 = a+b;
        var index2="The product of "+a+" and "+b+" is "+index1+"."
        var result = [index1,index2]
        return result
  }  

console.log(multiply(1,2))
function sumAndMultiply(a, b, c) {
var index1 = a+b+c ;
var index2 = a*b*c ;
var index3 = a+" and "+b+" and "+c+" sum to "+index1
var index4 = "the product of "+a+" and "+b+" and "+c+" is "+index2 
var result = [index1,index2,index3,index4]
return result ;
}
console.log(sumAndMultiply(2,4,6))

var testArray = [2, 3, 4]; 
function sumArray(sumArr) 
{  
    var resultindex1 = 0 ;
    var resultindex2="";
    for(var i =0 ; i<sumArr.length ;i++){
        resultindex1 = parseInt(sum(resultindex1,sumArr[i]));
        resultindex2=resultindex2+sumArr[i]+","
    }
    resultindex2 = resultindex2+" was passed in as an array of numbers, and "+resultindex1+" is their sum.";
   var result = [resultindex1,resultindex2];
   return result;
}

