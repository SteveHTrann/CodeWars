
/*Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order. */

function digitize(n) {
    //code here
    
    let arr = [];
    
    let stringed = n.toString();
    
   for(let i = stringed.length-1; i >= 0; i--){
     
    let ele = stringed[i] * 1;
     
    arr.push(ele)
     
   }
    
    return arr;
    
  }