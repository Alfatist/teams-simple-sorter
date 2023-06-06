let participants = document.querySelector(".participants");
let main = document.querySelector("main");

function createNewParticipant(buttonTrue = true) {
  let li = document.createElement("li");

  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Participante";
  li.appendChild(input);

  if (buttonTrue) {
    let button = document.createElement("input");
    button.type = "button";
    button.value = "🚫";
    button.placeholder = "participante";
    li.appendChild(button);
    button.addEventListener("click", function () {
      li.remove();
    });
  } else {
    input.required = true;
  }

  participants.appendChild(li);
}

createNewParticipant(false);
createNewParticipant(false);

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let rounds = +document.querySelector("#rounds").value;

  let arrayParticipants = [];
  for (let i = 0; i < +participants.childElementCount; ++i) {
    let input = participants.children[i].firstChild.value;
    input !== "" && arrayParticipants.push(input);
    arrayParticipants.sort(() => Math.random() - 0.5);
  }
  arrayParticipants.sort(() => Math.random() - 0.5);
  let arrayPaired = combineParticipants(arrayParticipants);
  console.log(arrayPaired);
  let texto = "";
  for (let i = 0; i < arrayPaired.length; ++i) {
    texto += arrayPaired[i].length > 1 ? `<p>${arrayPaired[i][0]} vs ${arrayPaired[i][1]}</p>` : `<p>BYE: ${arrayPaired[i][0]}</p>`;
  }
  main.innerHTML = texto;
});

function combineParticipants(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i += 2) {
    const firstElement = array[i];
    const secondElement = array[i + 1];

    if (firstElement !== undefined && secondElement !== undefined) {
      newArray.push([firstElement, secondElement]);
    } else if (firstElement !== undefined) {
      newArray.push(firstElement);
    }
  }

  return newArray;
}
