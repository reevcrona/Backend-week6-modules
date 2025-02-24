export const reverseString = (input: string): string => {
  return input.split("").reverse().join("");
};
export const countCharacters = (input: string): number => {
  const removedSpacesString = input.replace(/\s+/g, "");
  return removedSpacesString.length;
};

export const upperLower = (input: string): string => {
  let newString: string = "";
  for (let i = 0; i < input.length; i++) {
    const upperOrLower =
      i % 2 === 0 ? input[i].toUpperCase() : input[i].toLowerCase();
    newString += upperOrLower;
  }
  return newString;
};
