function insert (array , value){
  array.push(value);
  for (var i = array.length - 2 ; i >= -1 ; i--){
    if (value < array[i]){
      array[i+1] = array[i] ;
    }else{
      array[i+1] = value ;
      return array ;
    }
  }
}
function insertionSort (array){
  var subArray = [] ;
  for (var j = 0 ; j <= array.length - 1 ; j++){
    insert(subArray , array[j]);
  }
  return subArray ;
}
temp = [0,5,4,3,6];
temp = insertionSort(temp);
console.log(temp);
