var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, ele){
  var newArray = [...arr]
  newArray.unshift(ele)
  return newArray
}
function destructivelyAddElementToBeginningOfArray(arr, ele){
  return arr.unshift(ele)
}