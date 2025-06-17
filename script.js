//your code here
const input = document.getElementById("evaluatedText");
const letterCount = document.getElementById("letterCount");

input.addEventListener("input", function () {
  letterCount.textContent = input.value.length;
});
