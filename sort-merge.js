function merge(array, p, q, r) {
  var lowHalf = array.slice(p, q + 1);
  var highHalf = array.slice(q + 1, r + 1);
  var k = p ;
  var i = 0 ;
  var j = 0 ;
  while (k <= r) {
    if (i < lowHalf.length && j < highHalf.length){
      if (lowHalf[i] < highHalf[j]){
      array[k] = lowHalf[i];
      i++;
      k++;
      }else if (highHalf[j] < lowHalf[i]){
      array[k] = highHalf[j];
      j++;
      k++;
      }else{
      array[k] = lowHalf[i];
      array[k+1] = highHalf[j];
      i++;
      j++;
      k+=2;
      }
    } else if(i == lowHalf.length){
      while(j < highHalf.length){
        array[k] = highHalf[j];
        k++;
        j++;
      }
    } else {
      while(i < lowHalf.length){
        array[k] = lowHalf[i];
        k++;
        i++;
      }
    }
  }
  return array ;
}
function mergeSort(Array, p, r){
  if (p >= r){
    return Array ;
  }
  var q = Math.floor((p + r)/2);
  mergeSort(Array, p, q);
  mergeSort(Array, q+1, r);
  merge(Array, p, q, r);
  return Array ;
}
var test = [0,4,5,7,1,3,7,8,7,9,4.5,-8,0,4.5,-8,1/2,-1/3,4] ;
console.log(mergeSort(test,0,17));
