function findRotatedIndex(arr, targetNum) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === targetNum) {
      return middleIndex;
    }
    if (arr[leftIndex] <= arr[middleIndex]) {
      //if leftIndex is less than middle index, the array should be sorted on the left side, search left side
      if (targetNum >= arr[leftIndex] && targetNum < arr[middleIndex]) {
        rightIndex = middleIndex - 1;
      } else {
        leftIndex = middleIndex + 1;
      }
    } else {
      if (targetNum > arr[middleIndex] && targetNum <= arr[rightIndex]) {
        leftIndex = middleIndex + 1;
      } else {
        rightIndex = middleIndex - 1;
      }
    }
  }
  return -1;
}

module.exports = findRotatedIndex;

// console.log(findRotatedIndex([3, 4, 1, 2], 4));
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8));
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3));
