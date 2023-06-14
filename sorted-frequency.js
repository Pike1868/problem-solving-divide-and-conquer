function sortedFrequency(arr, num) {
  const firstIndex = findFirstOccurrence(arr, num);
  const lastIndex = findLastOccurrence(arr, num);

  if (firstIndex === -1 || lastIndex === -1) {
    return -1;
  }

  //use slice to get the arr of just the target num 
  return arr.slice(firstIndex, lastIndex + 1).length;
}

//find the first occurrence of the target num
function findFirstOccurrence(arr, num) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let indexOfFirstOccurrence = -1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === num) {
      indexOfFirstOccurrence = middleIndex;
      rightIndex = middleIndex - 1;
    } else if (arr[middleIndex] < num) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
  return indexOfFirstOccurrence;
}

// find the last occurrence of the target num
function findLastOccurrence(arr, num) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let indexOfLastOccurrence = -1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === num) {
      indexOfLastOccurrence = middleIndex;
      leftIndex = middleIndex + 1;
    } else if (arr[middleIndex] < num) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
  return indexOfLastOccurrence;
}

module.exports = sortedFrequency

// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2));
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3));
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1));
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4));
