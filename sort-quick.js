function quickSort (array , p , r){
  if(p == undefined){
    p = 0 ;
  }
  if(r == undefined){
    r = array.length - 1 ;
  }
  if (p >= r){
    return array ;
  }
  var pivot = array[r];
  var lessThanPivot = [];
  var greaterThanPivot = [];
  for(var i = p ; i < r ; i++){
    if(array[i] <= pivot){
      lessThanPivot.push(array[i]) ;
    }else{
      greaterThanPivot.push(array[i]) ;
    }
  }
  var lowPart = quickSort(lessThanPivot , 0 , lessThanPivot.length - 1);
  var highPart = quickSort(greaterThanPivot , 0 , greaterThanPivot.length - 1);
  return fuse(lowPart,pivot,highPart);
}
function fuse (low, pivot, high){
  var array = [pivot];
  for(var i = low.length - 1 ; i >= 0 ; i--){
    array.unshift(low[i]);
  }
  for(var j = 0 ; j < high.length ; j++){
    array.push(high[j]);
  }
  return array ;
}
var test = [4,5,6,0,8,5,8,7,0,-5.5,-4,7.5,8,11,197,87];
test = quickSort(test);
console.log(test);
