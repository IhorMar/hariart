export function addOrReplace(arr, newObj, compField) {
  return [
    ...arr.filter((obj) => obj[compField] !== newObj[compField]),
    { ...newObj },
  ];
}

export function updateInWith(arr, newObj, compField, updateField, func) {
  return arr.map((obj) =>
    obj[compField] === newObj[compField]
      ? { ...obj, [updateField]: func(obj[updateField]) }
      : obj
  );
}

export function addOrUpdateInWith(arr, newObj, compField, updateField, func) {
  return arr.find((obj) =>
    compField ? obj[compField] == newObj[compField] : obj == newObj
  )
    ? updateInWith(arr, newObj, compField, updateField, func)
    : [...arr, newObj];
}

export function removeIn(arr, value, compField) {
  return [...arr.filter((obj) => obj[compField] !== value)];
}
