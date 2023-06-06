const messageElem = document.getElementById("warning");
const messageElem2 = document.getElementById("warning2");

document.getElementById("input").addEventListener("keyup", (e) => {
  if (e.getModifierState("CapsLock") && e.getModifierState("NumLock")) {
    messageElem.innerHTML = "Caps Lock is activated... <br>";
    messageElem.style.display = "block";
    messageElem2.innerHTML = "Num Lock is activated... <br>";
    messageElem2.style.display = "block";
  } else if (e.getModifierState("CapsLock")) {
    console.log(e);
    messageElem.innerHTML = "Caps Lock is activated... <br>";
    messageElem.style.display = "block";
  } else if (e.getModifierState("NumLock")) {
    console.log(e);
    messageElem2.innerHTML = "Num Lock is activated... <br>";
    messageElem2.style.display = "block";
  } else {
    messageElem.style.display = "none";
    messageElem2.style.display = "none";
  }
});
