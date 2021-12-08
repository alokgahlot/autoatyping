const text = ["websites", "mobile apps"];
let count = 0; // index for the number of elements in the text array
let index = 0; // index of the each letter in the word
let currentText = ""; // containing the current word

let letter = ""; // contains the current letter of the current word

(function type() {
  if (count == text.length) count = 0;
  currentText = text[count];
  letter = currentText.slice(0, ++index);
  // according to this line letter will be w e b s i t.....
  document.querySelector(".typing").textContent = letter;
  if (letter.length == currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
})();
