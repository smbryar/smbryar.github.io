const konamiPattern = "rosebud";
let keysPressed = konamiPattern;

document.addEventListener("keydown", logKeyDown);

function logKeyDown(e) {
  if (e.key === "Escape") {
    removeRotateClass();
    resetKeysPressed();
    return;
  }

  keysPressed = keysPressed.substring(1);
  keysPressed += e.key;

  if (keysPressed.toLowerCase().includes("rosebud")) {
    addRotateClass();
    resetKeysPressed();
  }
}

const addRotateClass = () => {
  const images = document.getElementsByTagName("img");
  for (let image of images) {
    image.classList.add("rotate");
  }
};

const removeRotateClass = () => {
  const images = document.getElementsByTagName("img");
  for (let image of images) {
    image.classList.remove("rotate");
  }
};

const resetKeysPressed = () => {
  keysPressed = konamiPattern;
};
