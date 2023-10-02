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

function saveNumbers() {
  if (currentNumbers) {
    const saved = JSON.parse(localStorage.getItem("lotteryNumbers") || "[]");
    saved.push(currentNumbers);
    localStorage.setItem("lotteryNumbers", JSON.stringify(saved));
  }
}

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

function deleteNumber(index) {
  const saved = JSON.parse(localStorage.getItem("lotteryNumbers") || "[]");
  saved.splice(index, 1);
  localStorage.setItem("lotteryNumbers", JSON.stringify(saved));
  displaySavedNumbers();
}
