export async function getNewNames(gender) {
  const response = await fetch("/new-names", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ gender }),
  });
  return await response.json();
}

export async function likeName(name) {
  const response = await fetch("/like-name", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  return await response.json();
}

export async function getLikedNames() {
  const response = await fetch("/liked-names");
  return await response.json();
}
