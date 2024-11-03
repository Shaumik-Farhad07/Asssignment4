function mergeAndSortUnique(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];
    const uniqueArray = [...new Set(mergedArray)];
    return uniqueArray.sort((a, b) => a - b);
  }
  console.log(mergeAndSortUnique([3, 1, 4], [2, 4, 5]));
  