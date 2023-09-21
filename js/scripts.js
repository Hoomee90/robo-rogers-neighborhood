// Business Logic (BS)
function rangeConverter(input) {
  if (!(input && typeof input === "number")) {
    return null;
  }
  //Create input-length array, map indices based on their digits
  const convertArray = [...new Array(input + 1)].map((element, index) => {
    const value = (index).toString();
    return value.includes("3") ? "Won't you be my neighbor?" 
    : value.includes("2") ? "Boop!"
    : value.includes("1") ? "Beep!"
    : value;
  });
  return convertArray;
}

//User Logic (UI)
function inputHandler(e) {
  const output = document.querySelector("#numberOutput");
  const input = parseInt(e.target.value);
  
  if (input && input > 0) {
    if (input < 1000000) {
    output.innerHTML = rangeConverter(input).join(" ");
    } else {
      output.innerHTML = "Too Large!";
    }
  } else {
    output.innerHTML = "";
  }
}

window.addEventListener("load", function() {
  const input = document.querySelector("#numberInput");
  input.addEventListener("input", inputHandler);
});