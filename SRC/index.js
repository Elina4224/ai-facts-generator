function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,

    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "4t7238554e2bo320fcfcf12415f753fa";
  let context =
    "You a romantic poem expert and love to write short poems. Your mission is to generate a 4 liner poem in basic HTML. Sign the poem with bold SheCodes AI after the poem. Make sure to follow the user instructions.";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
