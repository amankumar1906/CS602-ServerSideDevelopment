// Fetches a new set of lottery numbers from the server
function getNumbers() {
  fetch("http://localhost:3001/getNumbers")
    .then((response) => response.json())
    .then((data) => {
      currentNumbers = data;
      document.getElementById(
        "display"
      ).innerText = `Numbers: ${data.numbers.join(", ")} | Powerball: ${
        data.powerball
      }`;
    });
}

// Saves the current set of numbers to the browser's local storage
function saveNumbers() {
  if (currentNumbers) {
    const saved = JSON.parse(localStorage.getItem("lotteryNumbers") || "[]");
    saved.push(currentNumbers);
    localStorage.setItem("lotteryNumbers", JSON.stringify(saved));
  }
}

// Displays all the saved sets of lottery numbers from the local storage
function displaySavedNumbers() {
  const saved = JSON.parse(localStorage.getItem("lotteryNumbers") || "[]");
  let html = "";
  saved.forEach((set, index) => {
    html += `<p>Numbers: ${set.numbers.join(", ")} | Powerball: ${
      set.powerball
    } <button onclick="deleteNumber(${index})">Delete</button></p>`;
  });
  document.getElementById("savedNumbers").innerHTML = html;
}

// Deletes a saved set of numbers from the local storage based on its index
function deleteNumber(index) {
  const saved = JSON.parse(localStorage.getItem("lotteryNumbers") || "[]");
  saved.splice(index, 1);
  localStorage.setItem("lotteryNumbers", JSON.stringify(saved));
  displaySavedNumbers();
}
