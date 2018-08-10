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

function addElementToEndOfArray(arr, ele){
  var newArray = [...arr]
  newArray.push(ele)
  return newArray
}

function destructivelyAddElementToEndOfArray(arr, ele){
  arr.push(ele)
  return arr;
}

function accessElementInArray(arr, idx){
  return arr[idx]
}