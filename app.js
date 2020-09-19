
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

