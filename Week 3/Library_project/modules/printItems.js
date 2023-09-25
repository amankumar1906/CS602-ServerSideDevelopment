import {
  ItemStatus,
  Item,
  Book,
  Magazine,
  DVD,
  CD,
  Newspaper,
  Journal,
  Ebook,
  Bluray,
  VideoGame,
} from "./libraryItem.js";

// Helper function to print the contents of the library
export function printLibraryContents(library) {
  const items = library.getAllItems();
  const tableArray = [];

  for (const id in items) {
    const item = items[id];
    let details = "";
    let status = item.getStatus();

    if (item instanceof Book) {
      details = `${item.author}, ISBN: ${item.ISBN}`;
    } else if (item instanceof Magazine) {
      details = `Issue: ${item.issue}`;
    } else if (item instanceof DVD || item instanceof Bluray) {
      details = `Directed by: ${item.director}`;
      if (item instanceof Bluray) {
        details += `, Resolution: ${item.resolution}p`;
      }
    } else if (item instanceof CD) {
      details = `Artist: ${item.artist}`;
    } else if (item instanceof Newspaper) {
      details = `Date: ${item.date}`;
    } else if (item instanceof Journal) {
      details = `Volume: ${item.volume}`;
    } else if (item instanceof Ebook) {
      details = `${item.author}, File Size: ${item.fileSize}MB`;
    } else if (item instanceof VideoGame) {
      details = `Platform: ${item.platform}`;
    }

    tableArray.push({
      ID: item.getID(),
      Title: item.title,
      Type: item.constructor.name,
      Details: details,
      Status: status,
    });
  }

  if (tableArray.length === 0) {
    console.log("Library is empty.");
  } else {
    console.table(tableArray);
  }
  console.log("-".repeat(30));
}
