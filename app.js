
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
