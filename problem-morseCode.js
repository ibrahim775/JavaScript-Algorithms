var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
               " ","1","2","3","4","5","6","7","8","9","0"];
var morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.",
                 "--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",
                 " ",".----","..---","...--","....-",".....","-....","--...","---..","----.","-----"];
function toMorseCode (string){
  var code = [] ;
  var codeSnippet = "" ;
  for (var i = 0 ; i < string.length ;i++){
    var index = letters.indexOf(string[i]) ;
    if(index == -1){
      code.push(string[i]);
    }else{
    code.push(morseCode[index]);
    }
  }
  for (var j = 0 ; j < code.length  ; j++){
    codeSnippet = codeSnippet + code[j] + " ";
  }
  return codeSnippet ;
}
function toLetter (series){
  var letter = letters[morseCode.indexOf(series)];
  if (letter == undefined){
    return "?";
  }else{
    return letter ;
  }
}
function toLetters (codeSnippeT){
  var letter = "";
  var i = 0 ;
  var character = "";
  while (i <= codeSnippeT.length - 1 ){
    if (codeSnippeT[i] == "." || codeSnippeT[i] == "-"){
      if (codeSnippeT[i+1] == undefined || codeSnippeT[i+1] == " "){
      character = character + codeSnippeT[i] ;
      letter = letter + toLetter(character);
      character = "" ;
      i = i + 2 ;
      }else{
      character = character + codeSnippeT[i] ;
      i++ ;
      }
    }else{
      letter = letter + " ";
      i++ ;
    }
  }
  return letter ;
}
console.log(toMorseCode("i can help you, give me a chance :) "));
console.log(toLetters(".... .. "));
