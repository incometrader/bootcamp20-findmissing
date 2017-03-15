function findMissing(arr1, arr2) {
  let missing;
  if (arr1.length === 0 || arr2.length === 0 || arr1.length === arr2.length) {
    return 0;
  }

  arr1.forEach((value) => {
    if (arr2.indexOf(value) === -1) {
      missing = value;
    }
  });

  if (missing !== undefined) return missing;
  arr2.forEach((value) => {
    if (arr1.indexOf(value) === -1) {
      missing = value;
    }
  });

  return missing;
}

module.exports = findMissing;
