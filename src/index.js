
exports.min = function min (array) {
  if(arguments[0] == undefined) return 0;
    if(array.length == 0) {
  		return array.length
  	}
  return Math.min(...array);
}

exports.max = function max (array) {
  if(arguments[0] == undefined) return 0;
    if(array.length == 0) {
  		return array.length
  	}
  return Math.max(...array);
}

exports.avg = function avg (array) {
  let sum = 0;
  if(arguments[0] == undefined) return 0;
    if(array.length == 0) {
  		return array.length
  	}
  for(let arg of array) {
    sum+=arg;
  }
  return sum/(array.length);
}
