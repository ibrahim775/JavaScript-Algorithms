function IndexOfSmallest (array , startIndex){
  var temp = array [startIndex];
  var index = array.indexOf(temp); ;
  for (var i = startIndex + 1 ; i < array.length - 1 ; i ++){
    if (temp <= array[i]){

    }else{
      temp = array[i];
      index = i
    }
  }
  return index ;
};
function swap (array , index1 , index2){
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp ;
}
function selectionSort (array){
  var index2 ;
  for (var j = 0 ; j < array.length - 1 ; j++){
     index2 = IndexOfSmallest(array , j);
     swap (array , j , index2);
  }
}
var test2 = [2,11,5,8,5,7,8.7,14,-1,5,5,5,6,7,8,4,4.5,8.425,-5,-4.5,3.14,-2.71818,0,1000];
selectionSort(test2);
console.log(test2);
