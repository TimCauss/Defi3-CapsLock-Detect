const messageElem = document.getElementById("warning");

document.getElementById("input").addEventListener("keyup", (e) => {
  e.getModifierState("CapsLock")
    ? (messageElem.style.display = "block")
    : (messageElem.style.display = "none");
});
