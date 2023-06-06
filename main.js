const messageElem = document.getElementById("warning");
const messageElem2 = document.getElementById("warning2");

window.addEventListener("keyup", (e) => {
  e.getModifierState("CapsLock")
    ? (messageElem.style.display = "block")
    : (messageElem.style.display = "none");
  e.getModifierState("NumLock")
    ? (messageElem2.style.display = "block")
    : (messageElem2.style.display = "none");
});
