function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }
  console.log(customMap([1, 2, 3], (num) => num * 2)); // [2, 4, 6]
  