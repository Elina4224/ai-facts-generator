function displayFact(response) {
  let cleanText = response.data.answer.replace(/```html|```/g, "");

  new Typewriter("#fact", {
    strings: cleanText,
    autoStart: true,
    loop: false,
    delay: 1,
    cursor: "",
  });
}

function generateFact(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "4t7238554e2bo320fcfcf12415f753fa";
  let context =
    "You are a travel expert and know a lot of interesting and funny facts about different cities. Your mission is to generate an interesting/funny fact about the city in basic HTML. Sign the fact with bold SheCodes AI below it. Make sure to follow the user instructions.";
  let prompt = `Generate a fact about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let factElement = document.querySelector("#fact");
  factElement.classList.remove("hidden");
  factElement.innerHTML = `<div class="blink">Generating a fact about ${instructionsInput.value}</div>`;
  axios.get(apiURL).then(displayFact);
}

let factFormElement = document.querySelector("#fact-generator-form");
factFormElement.addEventListener("submit", generateFact);
