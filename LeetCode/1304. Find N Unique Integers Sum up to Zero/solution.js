/**
 * @param {number} n
 * @return {number[]}
 */
const sumZero = function(n) {
  const result = [];
  if (n % 2) {
    result.push(0);
  }
  for (let i = 1; i <= n / 2; i++) {
    result.push(i, -i);
  }
  return result;
};
