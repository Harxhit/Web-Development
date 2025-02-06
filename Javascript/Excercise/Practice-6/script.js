//Example - 1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.innerHTML = "This paragraph is changed";
  });

// Example - 2

document
  .getElementById("highlightFirstCityButton")
  .addEventListener("click", function () {
    let first = document.getElementById("firstCity");
    first.style.backgroundColor = "yellow";
  });

//Example - 3

document
  .getElementById("changeOrderButton")
  .addEventListener("click", function () {
    let text = document.getElementById("changeText");
    text.textContent = "Order:Expresso";
  });

//Example - 4 ;
document.getElementById("addItemButton").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

// Example - 5

document
  .getElementById("removeElementButton")
  .addEventListener("click", function () {
    let list = document.getElementById("taskList");
    list.lastElementChild.remove();
  });

//Example - 6

document
  .getElementById("handlingButton")
  .addEventListener("dblclick", function () {
    alert("Nigga");
  });

// Example - 7

document
  .getElementById("listOfTea")
  .addEventListener("click", function (event) {
    if (event.target) {
      alert(`The tea you selected is: ${event.target.textContent}`);
    }
  });

// Example - 8

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let input = document.getElementById("feedbackInput").value;
    let display = document.getElementById("feedbackDisplay");
    display.textContent = `Your feedback is: ${input}`;
  });

//Example - 9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").innerHTML = "DOM Fully Loaded";
});

//Example - 10

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let pTag = document.getElementById("descriptionText");
    pTag.style.backgroundColor = "yellow";
  });
