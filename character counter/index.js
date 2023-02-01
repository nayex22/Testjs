const textareaE1 = document.getElementById("textarea");
const totalCharacter = document.getElementById("total");
const remaining = document.getElementById("remaining");

updateCount();

textareaE1.addEventListener("keyup", () => {
  updateCount();
});
function updateCount() {
  totalCharacter.innerText = textareaE1.value.length;
  remaining.innerText =
    textareaE1.getAttribute("maxlength") - textareaE1.value.length;
}
