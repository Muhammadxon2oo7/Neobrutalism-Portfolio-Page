const contactDialog = document.getElementById("confirm-dialog");
const sendButton = document.getElementById("send-message");

contactDialog.addEventListener("click", function (event) {
  if (event.target !== contactDialog) {
    return;
  }
  console.log(event.target.tagName);
  if (
    event.offsetX < 0 ||
    event.offsetX > event.target.offsetWidth ||
    event.offsetY < 0 ||
    event.offsetY > event.target.offsetHeight
  ) {
    closeContactForm();
  }
});

function showContactForm() {
  contactDialog.style.clipPath = "unset";
  contactDialog.showModal();
  contactDialog.style.transform = "scale(1)";
}
function closeContactForm() {
  contactDialog.style.clipPath = "unset";
  contactDialog.style.transform = "scale(0)";
  contactDialog.close();
  sendButton.classList.remove("spinner");
  sendButton.classList.add("hover-effect");
}
function showShowcase() {
  location.hash = "#portfolio";
  document.getElementById("portfolio").scrollIntoView();
}

const logo = document.querySelectorAll("#big-circle");
for (let i = 0; i < logo.length; i++) {
  console.log(logo[i].getTotalLength());
}

sendButton.addEventListener("click", (e) => {

  let { offsetLeft, offsetTop, offsetHeight, offsetWidth } = e.target;
  let strClipPath =
    "polygon(" +
    offsetLeft +
    "px " +
    offsetTop +
    "px, " +
    (offsetLeft + offsetWidth + 5) +
    "px " +
    offsetTop +
    "px, " +
    (offsetLeft + offsetWidth + 5) +
    "px " +
    (offsetTop + offsetHeight + 5) +
    "px, " +
    offsetLeft +
    "px " +
    (offsetTop + offsetHeight + 5) +
    "px)";
  contactDialog.style.clipPath = strClipPath;
  contactDialog.style.transform = "translate(-25%, -25%)";

  sendButton.classList.remove("hover-effect");
  sendButton.classList.add("spinner");
  setTimeout(closeContactForm, 1500);
});