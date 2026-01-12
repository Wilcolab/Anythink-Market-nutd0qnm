function toSnakeCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')  // Insert underscore before uppercase letters
    .replace(/[\s\W]+/g, '_')  // Replace spaces and non-word chars with underscores
    .toLowerCase();  // Convert to lowercase
}