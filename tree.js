let tree = document.querySelector("#tree");

function animateCharacters(element) {
  let bulbElements = element.querySelectorAll("span");

  for (let i = 0; i < bulbElements.length; i++) {
    let bulbElement = bulbElements[i];
    let randomDuration = 0.2 + Math.random() * 1;

    bulbElement.style.setProperty("--duration", randomDuration + "s");
  }

  setInitialRandomColor(bulbElements);

  tree.addEventListener("animationiteration", changeColor, true);
}

animateCharacters(tree);

function setInitialRandomColor(elements) {
  for (let i = 0; i < elements.length; i++) {
    let bulbElement = elements[i];

    bulbElement.style.setProperty("--colorA", getRandomColor().value);
    bulbElement.style.setProperty("--colorB", getRandomColor().value);
  }
}

function changeColor(event) {
  let bulbElement = event.target;

  let bulbStyle = getComputedStyle(bulbElement);
  let finalColor = bulbStyle.getPropertyValue("--colorB");

  bulbElement.style.setProperty("--colorA", finalColor);
  bulbElement.style.setProperty("--colorB", getRandomColor().value);
}
