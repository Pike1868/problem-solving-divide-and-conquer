function countZeroes(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === 1) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  console.log(arr.length - leftIndex)
  return arr.length - leftIndex;
}

module.exports = countZeroes;

// countZeroes([1, 1, 1, 1, 0, 0]);
// countZeroes([1, 0, 0, 0, 0]);
// countZeroes([0, 0, 0]);
// countZeroes([1, 1, 1, 1]);
