export function toCamelCase(str: string, splitOn: string) {
  return str
    .split(splitOn)
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase(); // First word in lowercase
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize the first letter of subsequent words
    })
    .join("");
}
