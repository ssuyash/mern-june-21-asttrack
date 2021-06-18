Array.prototype.sum = function(){
   return this.reduce(function(acc, current){
       return acc+current
   }, 0)
}


var arr = [1, 2, 3, 56];




console.log(arr.sum())