// Business Logic (BS)
function rangeConverter(num, name) {
  if (!(num && typeof num === "number")) {
    return null;
  }
  if (name) {
    name = ", " + name;
  }
  //Create input-length array, map indices based on their digits
  const convertArray = [...new Array(num + 1)].map((element, index) => {
    const value = (index).toString();
    return value.includes("3") ?
    "Won't you be my neighbor" + name + "?"
    : value.includes("2") ? "Boop!"
    : value.includes("1") ? "Beep!"
    : value;
  });
  return convertArray;
}

//User Logic (UI)
function inputHandler() {
  const numInput = document.querySelector("#numberInput").value;
  const wordInput = document.querySelector("#nameInput").value;
  const output = document.querySelector("#numberOutput");
  
  if (numInput && numInput > 0) {
    if (numInput < 1000000) {
    output.innerHTML = rangeConverter(parseInt(numInput), wordInput).join(" ");
    } else {
      output.innerHTML = "Too Large!";
    }
  } else {
    output.innerHTML = "";
  }
}

window.addEventListener("load", function() {
  document.querySelector(".form-group").addEventListener("input", inputHandler);
});