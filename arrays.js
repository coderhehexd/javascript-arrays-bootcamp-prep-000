var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, ele){
  var newArray = arr
  return newArray.unshift(ele)
}
function destructivelyAddElementToBeginningOfArray(arr, ele){
  return arr.unshift(ele)
}