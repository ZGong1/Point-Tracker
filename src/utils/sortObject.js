const sortObjectAlphabetically = (obj) => {
    // Get the keys and sort them alphabetically
    const sortedKeys = Object.keys(obj).sort((a, b) => a.localeCompare(b));
  
    // Create a new object with sorted keys
    const sortedObj = {};
    for (const key of sortedKeys) {
      sortedObj[key] = obj[key];
    }
  
    return sortedObj;
}

export default sortObjectAlphabetically