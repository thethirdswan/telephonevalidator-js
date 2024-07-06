const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const resultContainer = document.getElementById("results-div");

clear.addEventListener("click", () => {
  document.getElementById("user-input").value = ""
  resultContainer.innerText = ""
})

check.addEventListener("click", () => {
  const input = document.getElementById("user-input").value;
  if (input == "") {
    alert("Please provide a phone number");
    return
  }
  const validFormat = [/^1\s[0-9]{3}-[0-9]{3}-[0-9]{4}/g, /^1\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}/g, /^1\([0-9]{3}\)[0-9]{3}-[0-9]{4}/g, /^1\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}/g, /^[0-9]{10}$/g, /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/g, /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/g]

  for (let i = 0; i < validFormat.length; i++) {
    if (validFormat[i].test(input) == true) {
      resultContainer.innerText = "Valid US number: " + input;
      return
    } else {
      resultContainer.innerText = "Invalid US number: " + input;
    }
  }
})