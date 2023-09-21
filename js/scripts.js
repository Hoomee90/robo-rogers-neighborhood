// Business Logic (BS)

function rangeConverter(input) {
  if (!(input && typeof input === "number")) {
    return null;
  }
  const convertArray = [...new Array(input + 1)].map((element, index) => {
    const value = (index).toString();
    return value.includes("3") ? "Won't you be my neighbor?" 
    : value.includes("2") ? "Boop!"
    : value.includes("1") ? "Beep!"
    : value;
  });
  return convertArray;
}