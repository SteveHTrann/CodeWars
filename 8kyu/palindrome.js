/*Write a function that checks if a given string (case insensitive) is a palindrome.

 */


function isPalindrome(x) {
    // your code here
    
    let reversed = x.split("").reverse().join("").toLowerCase()
    
    
    if( x.toLowerCase() === reversed){
      return true
    }else{
      return false
    }
    
  
  }