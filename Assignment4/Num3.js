function queryStringToObject(query) {
    query = query.startsWith('?') ? query.slice(1) : query;
    return query.split('&').reduce((acc, pair) => {
      const [key, value] = pair.split('=');
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {});
  }
  
console.log(queryStringToObject('?name=Hasib&age=23'));
  