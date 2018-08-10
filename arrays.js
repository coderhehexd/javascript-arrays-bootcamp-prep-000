var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, ele){
  var newArray = [...arr]
  newArray.unshift(ele)
  return newArray
}
function destructivelyAddElementToBeginningOfArray(arr, ele){
  arr.unshift(ele)
  return arr;
}

function addElementToBeginningOfArray(arr, ele){
  var newArray = [...arr]
  newArray.unshift(ele)
  return newArray
}