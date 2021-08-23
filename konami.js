let keysPressed = "";

document.addEventListener("keypress", logKeyPress);
document.addEventListener("keydown", logKeyDown);

function logKeyPress(e) {
  keysPressed += e.key;

  if (keysPressed.toLowerCase().includes("rosebud")) {
    addRotateClass();
    resetKeysPressed();
  }
}

function logKeyDown(e) {
  if (e.key === "Escape") {
    removeRotateClass();
    resetKeysPressed();
  }
}

const addRotateClass = () => {
  const images = document.getElementsByClassName("giphy");
  for (let image of images) {
    image.classList.add("rotate");
  }
};

const removeRotateClass = () => {
  const images = document.getElementsByClassName("giphy");
  for (let image of images) {
    image.classList.remove("rotate");
  }
};

const resetKeysPressed = () => {
  keysPressed = "";
};
