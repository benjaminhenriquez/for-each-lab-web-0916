function iterativeLog(array){
  array.forEach(function(element){console.log(`${array.indexOf(element)}: ${element}`)})
}

function iterate(callback){
  var array = [2,3,4]
  callback(array);
  return array
}

function doToArray(array, callback){
 array.forEach(function(element){callback(element);});
}
