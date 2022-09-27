/**An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case) */


function isIsogram(str){
    //...
    let obj = {};
    let lowered = str.toLowerCase();
    
    
    for(let i = 0; i <lowered.length; i++){
      let letters = lowered[i];
      
  //     console.log(letters)
      
      if(obj[letters] === undefined){ 
        obj[letters] = 1  
      } else{
        obj[letters]++
      }
      
    }
      
  //   console.log(obj)
    
    let values = Object.values(obj);
    
    for(let i = 0; i < values.length; i++){
      let ele = values[i];
      
      if(ele > 1){
        return false
      }
    }
    return true
  }