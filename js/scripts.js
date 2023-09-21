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

//User Logic (UI)
function inputHandler(e) {
  const output = document.querySelector("#numberOutput");
  const input = parseInt(e.target.value);
  
  if (input) {
    output.innerHTML = rangeConverter(input).join(" ");
  }
}

window.addEventListener("load", function() {
  const input = document.querySelector("#numberInput");
  input.addEventListener("input", inputHandler);
});