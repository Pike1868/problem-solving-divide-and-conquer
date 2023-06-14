function findFloor(arr, targetNumber) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  // keeping track of floor, returning -1 if not found
  let floor = -1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === targetNumber) {
      return arr[middleIndex];
    } else if (arr[middleIndex] < targetNumber) {
      leftIndex = middleIndex + 1;
      floor = arr[middleIndex];
    } else {
      rightIndex = middleIndex - 1;
    }
  }
  return floor;
}

module.exports = findFloor;

// console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 9));
// console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20));
// console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0));
