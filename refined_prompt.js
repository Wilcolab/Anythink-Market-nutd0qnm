function toCamelCase(str) {
  if (typeof str !== 'string' || str === null || str === undefined) {
    throw new Error('Input must be a non-null, non-undefined string');
  }
  
  return str
    .replace(/[-_\s]+/g, ' ')
    .split(' ')
    .filter(word => word.length > 0)
    .map((word, index) => 
      index === 0 
        ? word.toLowerCase() 
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('');
}

function toDotCase(str) {
  if (typeof str !== 'string' || str === null || str === undefined) {
    throw new Error('Input must be a non-null, non-undefined string');
  }
  
  return str
    .replace(/[-_\s]+/g, ' ')
    .split(' ')
    .filter(word => word.length > 0)
    .map(word => word.toLowerCase())
    .join('.');
}
