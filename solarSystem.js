let calcWeight = document.querySelector("button");
let planetSelect = document.getElementById("planet-selector");
let mainImg = document.querySelector(".planet-image");
let flexContainer = document.querySelector(".flex-container");
let flexItem = document.querySelector(".flex-item");
let inputField = document.querySelector("input");
let main = document.querySelector("main");

let message = document.createElement("p");
let message2 = document.createElement("p");

function calculateWeightOnPlanet(weight, gravity) {
  const earthGravity = 9.81;
  const mass = weight / earthGravity;
  const newWeight = mass * gravity;
  return newWeight.toFixed(2);
}

function calculateWeightOnPlanetByInput(value, inputField2) {
  switch (value) {
    case "mercury":
      return calculateWeightOnPlanet(inputField2, 3.7);
    case "venus":
      return calculateWeightOnPlanet(inputField2, 8.9);
    case "earth":
      return calculateWeightOnPlanet(inputField2, 9.81);
    case "moon":
      return calculateWeightOnPlanet(inputField2, 1.62);
    case "mars":
      return calculateWeightOnPlanet(inputField2, 3.71);
    case "jupiter":
      return calculateWeightOnPlanet(inputField2, 24.79);
    case "saturn":
      return calculateWeightOnPlanet(inputField2, 10.44);
    case "uranus":
      return calculateWeightOnPlanet(inputField2, 8.69);
    case "neptune":
      return calculateWeightOnPlanet(inputField2, 11.15);
    case "pluto":
      return calculateWeightOnPlanet(inputField2, 0.62);
  }
}

calcWeight.addEventListener("click", function () {
  if (inputField.value === "") {
    message.textContent = "Mass is required";
    mainImg.classList.add("none");
    message.classList.add("message");
    message.style.marginTop = "2em";
    message.style.marginBottom = "2em";
    flexItem.appendChild(message);
  } else {
    message.classList.add("none");
    mainImg.classList.remove("none");

    if (planetSelect.value === "none") {
      message2.textContent = "You did not choose a planet yet";
      mainImg.classList.add("none");
      message2.classList.add("message2");
      message2.style.marginTop = "2em";
      message2.style.marginBottom = "2em";
      flexItem.appendChild(message2);
    } else {
      let value = planetSelect.options[planetSelect.selectedIndex].value;
      let text = planetSelect.options[planetSelect.selectedIndex].text;
      let result = calculateWeightOnPlanetByInput(value, inputField.value);

      flexItem.innerHTML = "";

      let secondaryImg = document.createElement("img");
      let message3 = document.createElement("h2");
      let resultNum = document.createElement("p");

      flexItem.classList.add("description");
      secondaryImg.classList.add("secondaryImg");
      message3.classList.add("h2");
      resultNum.classList.add("result");

      message3.innerHTML = `The weight of the object on <span class="text">${text}`;
      resultNum.textContent = `${result}N`;
      secondaryImg.setAttribute("src", `./images/${text}.png`);

      flexItem.appendChild(secondaryImg);
      flexItem.appendChild(message3);
      message3.appendChild(resultNum);
    }
  }
});
