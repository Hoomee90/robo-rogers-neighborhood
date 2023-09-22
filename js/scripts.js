// Business Logic (BS)
function rangeConverter(num, name) {
  if (!num || !typeof num === "number") {
    return null;
  }
  if (name) {
    name = ", " + name;
  }
  //Create input-lengthed array, map indices based on their digits
  const convertArray = [...new Array(num + 1)].map((element, index) => {
    const value = (index).toString();
    if (value.includes("3")) return "Won't you be my neighbor" + name + "?";
    if (value.includes("2")) return "Boop!";
    if (value.includes("1")) return "Beep!";
    return value;
  });
  return convertArray;
}

function reverseArray(array) {
  if (array.length <= 0 || !Array.isArray(array)) {
    return null;
  }
  return array.reverse();
}

function invertArray(array) {
  if (array.length <= 0 || !Array.isArray(array)) {
    return null;
  }
}

//User Logic (UI)
function inputHandler() {
  const numInput = document.querySelector("#numberInput").value;
  const wordInput = document.querySelector("#nameInput").value;
  const reverseInput = document.querySelector("#reverseInput");
  const output = document.querySelector("#numberOutput");
  
  if (numInput && numInput > 0) {
    if (numInput < 1000000) {
      let result = rangeConverter(parseInt(numInput), wordInput);
      if (reverseInput.checked) {
        result = reverseArray(result);
      }
      // if (invertInput.checked) {
      //   result = invertArray(result);
      // }
      output.innerHTML = result.join(" ");
    } else {
      output.innerHTML = "Too Large!";
    }
  } else {
    output.innerHTML = "";
  }
}

window.addEventListener("load", function() {
  document.querySelector("#form").addEventListener("input", inputHandler);
});