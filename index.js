export const randomNumberReturn = (originalArray, length = undefined) => {
  let randomNumberArray = [];
  let copyArray = [...originalArray];
  let requiredLength = length !== undefined ? length : originalArray.length;
  if (requiredLength > originalArray.length || requiredLength < 0) return -1;
  while (requiredLength) {
    let newIndex = Math.floor(Math.random() * copyArray.length);
    randomNumberArray.push(...copyArray.splice(newIndex, 1));
    requiredLength--;
  }
  return randomNumberArray;
};
