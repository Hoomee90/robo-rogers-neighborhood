// Business Logic (BS)

function rangeConverter(input) {
  if (!(input && typeof input === "number")) {
    return null;
  }
  const numArray = [...new Array(input + 1).keys()];
  return numArray;
}