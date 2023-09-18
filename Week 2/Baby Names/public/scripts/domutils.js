export function displayNames(names, callback) {
  const nameList = document.getElementById("nameList");
  nameList.innerHTML = "";

  names.forEach((name) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = name;
    row.appendChild(nameCell);

    const actionCell = document.createElement("td");
    const likeButton = document.createElement("i");
    likeButton.className = "fas fa-heart";
    likeButton.addEventListener("click", () => callback(name));

    actionCell.appendChild(likeButton);
    row.appendChild(actionCell);

    nameList.appendChild(row);
  });
}

export function updateLikedNamesList(names) {
  const likedNamesList = document.getElementById("likedNamesList");
  likedNamesList.innerHTML = "";

  names.forEach((name) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = name;
    row.appendChild(nameCell);
    likedNamesList.appendChild(row);
  });
}
