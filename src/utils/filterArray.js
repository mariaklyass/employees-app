export function filterArray(filterString, array, keys) {
  return array.filter((item) =>
    (keys || Object.keys(item)).some((key) => {
      const prop = item[key];

      return (
        typeof prop === "string" &&
        prop.toLocaleLowerCase().startsWith(filterString.toLocaleLowerCase())
      );
    })
  );
}
