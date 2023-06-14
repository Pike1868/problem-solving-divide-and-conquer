function findRotationCount(arr) {
  console.log(arr);
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  // finding the index of the smallest element gives us the number of rotations
  while (leftIndex <= rightIndex) {
    //if array is sorted the number of rotations is 0, return the leftIndex
    if (arr[leftIndex] <= arr[rightIndex]) {
      return leftIndex;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    //Check if the number at the middleIndex is the minimum number
    let nextIndex = (middleIndex + 1) % arr.length;
    let prevIndex = (middleIndex - 1 + arr.length) % arr.length;
    if (
      arr[middleIndex] <= arr[prevIndex] &&
      arr[middleIndex] <= arr[nextIndex]
    ) {
      return middleIndex;
    } else if (arr[leftIndex] <= arr[middleIndex]) {
      //left side is sorted, search right side
      leftIndex = middleIndex + 1;
    } else {
      //right side is sorted, search left side
      rightIndex = middleIndex - 1;
    }
  }
  return 0;
}

module.exports = findRotationCount;

console.log(findRotationCount([15, 18, 2, 3, 6, 12])); // 2
console.log(findRotationCount([7, 9, 11, 12, 5])); // 4
console.log(findRotationCount([7, 9, 11, 12, 15])); // 0
console.log(findRotationCount([15, 18, 11, 2, 3, 6, 12])); // 3
console.log(findRotationCount([15, 18, 2, 3, 6, 12]));
