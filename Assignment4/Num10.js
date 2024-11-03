function deepMerge(obj1, obj2) {
    const result = {};
  
    for (const key of new Set([...Object.keys(obj1), ...Object.keys(obj2)])) {
      const val1 = obj1[key];
      const val2 = obj2[key];
  
      if (typeof val1 === 'object' && typeof val2 === 'object' && !Array.isArray(val1) && !Array.isArray(val2)) {
        result[key] = deepMerge(val1, val2);
      } else if (val1 !== undefined && val2 !== undefined && val1 !== val2) {
        result[key] = Array.isArray(val1) ? [...val1, val2] : [val1, val2];
      } else {
        result[key] = val1 !== undefined ? val1 : val2;
      }
    }
  
    return result;
  }

  console.log(deepMerge({ a: 1, b: { c: 2 } }, { b: { d: 3 }, a: 4 }));

  