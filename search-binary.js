var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
function doSearch (arrayOfPrimes , number){
  var min = 0 ;
  var max = arrayOfPrimes.length - 1 ;
  var guess ;
  while (min <= max){
    guess = Math.floor((min + max) / 2) ;
    if (arrayOfPrimes[guess] == number){
      return number + " is a prime and found at index "+guess;
    }else if (arrayOfPrimes[guess] < number){
      min = guess + 1 ;
    }else {
      max = guess - 1 ;
    }
  }
  return number + " is not a prime " ;
  }
  var result = doSearch (primes , 11 ) ;
  console.log(result);
