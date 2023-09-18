import { getNewNames, likeName, getLikedNames } from "./api.js";
import { displayNames, updateLikedNamesList } from "./domutils.js";

async function updateLikedNames() {
  const names = await getLikedNames();
  updateLikedNamesList(names);
}

document.getElementById("fetchNames").addEventListener("click", async () => {
  const gender = document.getElementById("genderSelector").value;
  const names = await getNewNames(gender);
  displayNames(names, async (name) => {
    await likeName(name);
    updateLikedNames();
  });
});

updateLikedNames();
