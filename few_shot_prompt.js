function toCamelCase(str) {
  return str
    .replace(/[-_\s]+/g, ' ')  // Replace separators (hyphens, underscores, spaces) with single spaces
    .split(' ')
    .map((word, index) => 
      index === 0 
        ? word.toLowerCase() 
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('');
}