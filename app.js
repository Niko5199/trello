require("dotenv").config();
const Trello = require("./main");
const trello = new Trello(process.env.KEY, process.env.TOKEN);
const cardTitle = `Card Nueva ${new Date()}`;

console.log("Ejecutando!");

trello.addCard(
  cardTitle,
  "LaunchX Card Description",
  "6283c400fdbc9c56bf2d797e",
  function (error, trelloCard) {
    if (error) {
      console.log("Could not add card:", error);
    } else {
      console.log("Added card:", trelloCard);
    }
  }
);
