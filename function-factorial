function factorial (n){
  if (n === 0){
    return 1 ;
  }else if (n < 0){
    return "use the Gamma fucntion to compute the factorial of this number";
  }else{
    if(isInteger(n) === true){
      var result = 1 ;
    for (var i = 2 ; i <= n ; i++){
      result = result * i ;
    }
    return result ;
    }else{
      var min = Math.floor(n);
      var max = Math.ceil(n);
      var minFactorial = 1 ;
      for (var i = 2 ; i <= min ; i++){
      minFactorial = minFactorial * i ;
      }
      var maxFactorial = 1 ;
      for (var i = 2 ; i <= max ; i++){
      maxFactorial = maxFactorial * i ;
      }
      return "you should use the Gamma function to compute ("+n+"!) , it will be between "+minFactorial+" and "+maxFactorial ;
    }
  }
}
function isInteger (k){
  if (Math.floor(k) == k){
    return true ;
  }else{
    return false ;
  }
}
// Example of a recursive function
function recursiveFactorial (m){
  // base case
  if (m == 0){
    return 1 ;
  }
  // recursive case
  else{
    var result = m * recursiveFactorial(m-1);
    return result ;
  }
}
// so, you are basically defining the function relatively to itself
console.log(factorial(Math.exp(1)))
console.log(factorial(0), factorial(14))
