/**
 * Converts a string to camelCase format.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} If the input is not a non-null, non-undefined string.
 *
 * @example
 * toCamelCase("first name"); // "firstName"
 * toCamelCase("user_id"); // "userId"
 * toCamelCase("SCREEN_NAME"); // "screenName"
 */
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

/**
 * Converts a string to dot.case format.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The dot.case formatted string.
 * @throws {Error} If the input is not a non-null, non-undefined string.
 *
 * @example
 * toDotCase("first name"); // "first.name"
 * toDotCase("user_id"); // "user.id"
 * toDotCase("SCREEN_NAME"); // "screen.name"
 */
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
