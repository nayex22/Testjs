const textareaE1 = document.getElementById("textarea");
const totalcharacterE1 = document.getElementById("total");
const remainingCharacterE1 = document.getElementById("remaining");

textareaE1.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  totalcharacterE1.innerText = textareaE1.value.length;
  remainingCharacterE1.innerText =
    textareaE1.getAttribute("maxlength") - textareaE1.value.length;
}
