/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return (n) => {
    let i = 1;
    let j = n;

    while (i < j) {
      const mid = Math.floor(i + (j - i) / 2);
      if (isBadVersion(mid)) {
        j = mid;
        continue;
      }
      i = mid + 1;
    }

    return i;
  };
};
