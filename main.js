const messageElem = document.getElementById("warning");
const messageElem2 = document.getElementById("warning2");

window.addEventListener("keyup", (event) => {
  event.getModifierState("CapsLock")
    ? (messageElem.style.display = "block")
    : (messageElem.style.display = "none");
  event.getModifierState("NumLock")
    ? (messageElem2.style.display = "block")
    : (messageElem2.style.display = "none");
});
