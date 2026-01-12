function toKebabCase(str) {
  // Step 1: Validate input
  if (typeof str !== 'string' || str == null) {
    throw new Error('Input must be a non-null, non-undefined string');
  }
  
  // Step 2: Normalize the string
  str = str.trim();
  str = str
    .replace(/([a-z])([A-Z])/g, '$1-$2')  // Insert hyphens before uppercase letters following lowercase
    .replace(/[\s_]+/g, '-');  // Replace spaces and underscores with hyphens
  
  // Step 3: Convert to lowercase and remove extra/duplicate hyphens
  str = str
    .replace(/-+/g, '-')  // Collapse multiple hyphens into one
    .replace(/^-|-$/g, '')  // Remove leading and trailing hyphens
    .toLowerCase();
  
  // Step 4: Return the result
  return str;
}