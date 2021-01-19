var alphaChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var decChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14',
 '15', '16', '17', '18','19', '20', '21', '22', '23', '24', '25', '26']

function power(r, n){
  var result ;
  if (r === 0 & n !== 0){
    result = 0 ;
  }else if (r === 0 & n === 0){
    result = undefined;
  }else if(r !== 0 & n === 0){
    result = 1 ;
  }else{
    result = r*power(r, n-1)
  }
  return result;
}
function toNumDec(code){
  var total = 0;
  for (var i = code.length - 1 ; i >= 0 ; i--){
    var sub = code[i]*power(2, code.length - 1 - i)
    total = total + sub; 
  }
  return total;
}
function toNumBi(number){
  var result = '' ;
  var remainder = number ;
  var digits = digitsCount(number);
  for (var i = digits - 1 ; i >= 0 ; i--){
    if ((remainder - power(2, i)) >= 0){
      remainder = remainder - power(2, i);
      result = result + '1' ;
    }else{
      result = result + '0' ;
    }
  }
  return result ;
}
function digitsCount(k){
  var l = k ;
  var i = 0 ;
  while (l >= 1){
    l = l / 2; 
    i++ ;
  }
  return i ;
}
function decCharToAlphaChar(m){
  return alphaChar[m-1];
}
function alphaCharToDecChar(letter){
  return alphaChar.indexOf(letter.toUpperCase()) + 1;
}
function toFiveNumBi(number){
  result = toNumBi(number);
  if ((result+'').length !== 5){
    while ((result+'').length !== 5){
      result = '0' + result;
    }
  }
  return result;
}
function toBinary(sentence){
  var code = "" ;
  for (var j = 0 ; j <= sentence.length - 1 ; j++){
    if (sentence[j] == ' ' || sentence[j] == ',' || sentence[j] == '.' || sentence[j] == '/'
    || sentence[j] == '*' || sentence[j] == '-' || sentence[j] == '+' || sentence[j] == '?'){
      code = code + '00000000' ;
    }else if (sentence[j].toUpperCase() === sentence[j]){
      // 010 if capital
      code = code + '010' + toFiveNumBi(alphaCharToDecChar(sentence[j]));
    }else if(sentence[j].toUpperCase() !== sentence[j]){
      // 011 if small
      code = code + '011' + toFiveNumBi(alphaCharToDecChar(sentence[j].toUpperCase()));
    }
  }
  return code ;
}
function toAlpha(code){
  code = code.split('')
  var sentence = '' ;
  if (code.length % 8 !== 0){
    return 'Sorry, A Binary [ ASCII ] code must be a multiple of 8 bits';
  }else{
    while(code.length !== 0){
    var biChar = code.splice(0, 8);
    if(biChar.toString() === '0,0,0,0,0,0,0,0'){
      sentence = sentence + ' ';
      continue;
    }
    var activeBiChar = biChar.splice(3,8);
    var DecChar = toNumDec(activeBiChar);
    var char = decCharToAlphaChar(DecChar);
    if (biChar.toString() === '0,1,0'){
      char = char.toUpperCase();
    } else if (biChar.toString() === '0,1,1'){
      char = char.toLowerCase();
    }
    sentence = sentence + char ;
    }
  }
  return sentence ;
}
console.log(toBinary('Hi, my name is Ibrahim, This is the'+
' first message being encoded and decoded through this algorithim, '+
'Thanks for your time to read this useless message'))
console.log(toAlpha('0100100001101001000000000000000001101101011110010000000001101110011000010110110101100101' + 
'000000000110100101110011000000000100100101100010011100100110000101101000011010010110110100000000000000000101' + 
'010001101000011010010111001100000000011010010111001100000000011101000110100001100101000000000110011001101001' + 
'011100100111001101110100000000000110110101100101011100110111001101100001011001110110010100000000011000100110' + 
'010101101001011011100110011100000000011001010110111001100011011011110110010001100101011001000000000001100001' + 
'011011100110010000000000011001000110010101100011011011110110010001100101011001000000000001110100011010000111' + 
'001001101111011101010110011101101000000000000111010001101000011010010111001100000000011000010110110001100111' +
'011011110111001001101001011101000110100001101001011011010000000000000000010101000110100001100001011011100110' + 
'101101110011000000000110011001101111011100100000000001111001011011110111010101110010000000000111010001101001' + 
'011011010110010100000000011101000110111100000000011100100110010101100001011001000000000001110100011010000110' + 
'100101110011000000000111010101110011011001010110110001100101011100110111001100000000011011010110010101110011' + 
'01110011011000010110011101100101'))
