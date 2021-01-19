function checkForPrime (n) {
  if (n <= 1){
    return false ;
  }else{
  for (var j = 2 ; j < n ; j++){
    if (n % j == 0){
      return false ;
    }    
  }
  return true ;
  }
}
function constructArrayOfPrimes (l,k){
  var primesArray = {
    array : [] ,
    start : l ,
    end : k
  };
  for (var i = l ; i <= k ; i++){
    if (checkForPrime(i) == true){
      primesArray.array.push(i);
    }
  }
  return primesArray ;
}
var start = 5 ;
var end = 250; 
console.log("there is "
+constructArrayOfPrimes(start , end).array.length
+" prime numbers between "
+constructArrayOfPrimes(start , end).start
+" and " +constructArrayOfPrimes(start , end).end +" : \n"
+"\" "+constructArrayOfPrimes(start , end).array+" \"");
