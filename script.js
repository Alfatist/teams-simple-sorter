let participants = document.querySelector(".participants");
let main = document.querySelector("main");
let body = document.querySelector("body");
let first_screen = document.querySelector(".first_screen");
let theme_selector = document.querySelector(".theme_selector");
let themes = ["", "orange_mode", "dark_mode", "purple_mode"];
let counter = 0;
let versus = document.querySelector("#versus");
let second_screen = document.querySelector(".second_screen");
let table = document.querySelector("#table");
let form = document.querySelector("form");

function trocaCor() {
  let botao = document.querySelector(".theme-circle:checked");
  botao.nextElementSibling ? (botao.nextElementSibling.checked = true) : (document.querySelector(".theme-circle").checked = true);
}

function createNewParticipant(buttonTrue = true) {
  let li = document.createElement("li");

  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Participante";
  li.appendChild(input);

  if (buttonTrue) {
    let button = document.createElement("button");
    button.type = "button";
    button.innerText = "❌";
    button.tabIndex = -1;
    li.appendChild(button);
    button.addEventListener("click", function () {
      li.remove();
    });
  } else {
    input.required = true;
  }

  participants.appendChild(li);
}

function secondScreen(array = []) {
  first_screen.style.display = "none";
  second_screen.style.display = "flex";
  let bye = array.length % 2;
  let texto = "";
  for (let i = 0; i < array.length - 1; i += 2) {
    texto += `<li><span>${array[i]}</span> <input type="number" min="0" required /> vs <input type="number" min="0" required /> <span>${
      array[i + 1]
    }</span></li>`;
  }
  bye ? (texto += `<li>Bye: <span class="bye">${array[array.length - 1]}</span></li>`) : null;

  let tableCell = [];
  let tableHead = table.querySelector("thead tr");
  let tableBody = table.querySelector("tbody");
  let arraySorted = array.sort();
  for (let i = 0; i < arraySorted.length; i++) {
    tableCell.push(`<tr><td>${arraySorted[i]}</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>`);
  }
  versus.innerHTML = texto;
  tableBody.innerHTML = tableCell.join("");
}

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

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let rounds = +document.querySelector("#rounds").value;

  let arrayParticipants = [];
  for (let i = 0; i < +participants.childElementCount; ++i) {
    arrayParticipants.sort(() => Math.random() - 0.5);
    let input = participants.children[i].firstChild.value;
    input !== "" && arrayParticipants.push(input);
  }
  arrayParticipants.sort(() => Math.random() - 0.5);

  secondScreen(arrayParticipants);
});

class Player {
  tablePosition;
  j;
  v;
  d;
  bye;

  constructor(name) {
    this.name = name;
  }
}

document.onkeyup = function (event) {
  if (event.key === "AltGraph" && event.ctrlKey) {
    trocaCor();
  }
};

createNewParticipant(false);
createNewParticipant(false);

function showSelector() {
  theme_selector.style.transform = "translate(0%, -50%)";
}

function hideSelector() {
  theme_selector.style.transform = "translate(100%, -50%)";
}

showSelector();
setTimeout(hideSelector, 2000);
