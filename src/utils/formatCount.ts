export const formatCount = (num: Number) => {
  let startIdx = 0;
  let endIdx = 3;
  let result = [];
  const reversed = String(num)
    .split('')
    .reverse();

  const digits = String(num).length;

  for (let _ in Array(digits).fill('x')) {
    if (startIdx - 1 < digits) {
      let newnums = reversed.slice(startIdx, endIdx).reverse().join('');
      if (newnums.length < 3) {
        result.push(newnums);
      } else {
        result.push(newnums, ',');
      }
      startIdx += 3;
      endIdx += 3;
    }
  }

  return result.reverse().join('');
};
