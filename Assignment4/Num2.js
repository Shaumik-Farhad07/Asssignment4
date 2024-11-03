function findDuplicates(array) {
    const seen = new Set();
    const duplicates = new Set();
  
    for (const element of array) {
      if (seen.has(element)) {
        duplicates.add(element);
      } else {
        seen.add(element);
      }
    }
  
    return Array.from(duplicates);
  }
  console.log(findDuplicates([1, 2, 3, 2, 4, 3, 5])); // [2, 3]
  