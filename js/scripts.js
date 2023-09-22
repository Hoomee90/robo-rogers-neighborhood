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
  const invertCharMap = {
    "a": "ɐ",
    "b": "q",
    "c": "ɔ",
    "d": "p",
    "e" : "ǝ",
    "f" : "ɟ",
    "g" : "ƃ",
    "h" : "ɥ",
    "i" : "ı",
    "j" : "ɾ",
    "k" : "ʞ",
    "l" : "ן",
    "m" : "ɯ",
    "n" : "u",
    "o" : "o",
    "p" : "d",
    "q" : "b",
    "r" : "ɹ",
    "s" : "s",
    "t" : "ʇ",
    "u" : "n",
    "v" : "ʌ",
    "w" : "ʍ",
    "x" : "x",
    "y" : "ʎ",
    "z" : "z"
  }
  const invertedArray = array.map(element => {
    let result = ""
    for (const char of element) {
      result += invertCharMap[char] || char;
    }
    return result;
  });
  return invertedArray;
}

//User Logic (UI)
function inputHandler() {
  const numInput = document.querySelector("#numberInput").value;
  const wordInput = document.querySelector("#nameInput").value;
  const reverseInput = document.querySelector("#reverseInput");
  const invertInput = document.querySelector("#invertInput");
  const output = document.querySelector("#numberOutput");
  
  if (numInput && numInput > 0) {
    if (numInput < 1000000) {
      let result = rangeConverter(parseInt(numInput), wordInput);
      if (reverseInput.checked) {
        result = reverseArray(result);
      }
      if (invertInput.checked) {
        result = invertArray(result);
      }
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