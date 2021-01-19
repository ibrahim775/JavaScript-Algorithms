function power (x ,n){
  if(n === 0 && x === 0){
    return undefined ;
  }else if (n === 0 && x !== 0){
    return 1 ;
  }else if(n !== 0 && x === 0){
    return 0 ;
  }else{
    if(n > 0){
      return x * power(x , n - 1);
    }else{
      return 1 / power(x , (-1)*n) ;
    }
  }
}

console.log(power(7,22));
