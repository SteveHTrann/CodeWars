/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
  
    let counter = 0;
    
    for(let i = 0; i < str.length; i++){
      let ele = str[i];
      
      if(ele === "a" || 
         ele === "e" || 
         ele === "i" ||
         ele === "o" ||
         ele === "u"){
            
            counter ++
         
         }
      }
    return counter
  }