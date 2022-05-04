export function addOrReplace(arr, newObj, compField) {
  return [...arr.filter((obj) => obj[compField] !== newObj[compField]), { ...newObj }];
}
