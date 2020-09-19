'use strict';

var multArrtest=[1,2,3]
function multiplyArray(multArr) { 
    var resultindex1 = 1;
    var resultindex2="";
    for(var i =0 ; i<multArr.length ;i++){
        resultindex1 = resultindex1*multArr[i];
        resultindex2=resultindex2+multArr[i]+","
    }
    resultindex2 = resultindex2+" have a product of  "+resultindex1;
   var result = [resultindex1,resultindex2];
   return result;
}
console.log(multiplyArray(multArrtest))
