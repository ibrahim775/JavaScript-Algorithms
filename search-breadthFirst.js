var Queue = function(){
  this.items = [];
}
Queue.prototype.enqueue = function(obj){
  this.items.push(obj);
}
Queue.prototype.dequeue = function(){
  return this.items.shift();
}
Queue.prototype.isEmpty = function(){
  var empty = this.items.length === 0 ;
  return empty ;
}
//@param graph is in the form of an adgacency list 
function doFBS (graph , source){
  var bfsInfo = [];
  for (var i = 0 ; i < graph.length ; i++){
    bfsInfo[i] = {
      distance : null ,
      predecessor : null
    }
  }
  bfsInfo[source].distance = 0 ;
  var queue = new Queue();
  queue.enqueue(source);
  // till now , we have a graph with verteces have distances and predescessors equal to @null 
  while (queue.isEmpty() === false){
    var vertex = queue.dequeue();
    for (var j = 0 ; j < graph[vertex].length ; j++){
      if (bfsInfo[graph[vertex][j]].distance === null){
        bfsInfo[graph[vertex][j]].distance = bfsInfo[vertex].distance + 1 ;
        bfsInfo[graph[vertex][j]].predecessor = vertex ;
        queue.enqueue(graph[vertex][j]);
      }
    }
  }
  return bfsInfo ;
}
var adjList = [
    [],
    [9,5,6,4],
    [11,5,4,3],
    [5,2,8,10],
    [6,1,2,7],
    [1,2,3,7],
    [9,1,4,8],
    [4,5,10],
    [6,3,14],
    [1,6],
    [3,7,11,13],
    [2,10,12],
    [11,13,14],
    [10,12],
    [8,12]
    ];
function findShortestPath (graph, from, to){
  var path = to ;
  var bfsInfo = doFBS(graph,from);
  var predecessor = bfsInfo[to].predecessor;
    
  while(predecessor != null){
    path += " < "  + predecessor ;
    predecessor = bfsInfo[predecessor].predecessor ;
  }
  return path  ;
}
console.log(findShortestPath(adjList,1,12));
