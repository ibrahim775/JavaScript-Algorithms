function isPalindrome (string){
  if (string.length === 0 || string.length === 1){
    return true ;
  }else{
    if (string[0] === string[string.length - 1]){
      string = string.slice(1,string.length - 1);
      return isPalindrome(string);
    }else{
      return false ;
    }
  }
}
