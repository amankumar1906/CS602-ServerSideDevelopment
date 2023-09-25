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

import { printLibraryContents } from "./printItems.js";

// Library Class
class Library {
  constructor() {
    this.items = {};
  }

  addItem(item) {
    if (item instanceof Item) {
      this.items[item.getID()] = item;
    }
  }

  removeItem(ID) {
    if (this.items[ID]) {
      delete this.items[ID];
    } else {
      console.warn(`Item with ID ${ID} does not exist in the library.`);
    }
  }

  getAllItems() {
    return this.items;
  }
}

// Functional Tests
export function testLibraryFunctions() {
  const library = new Library();

  // Initial state
  printLibraryContents(library);

  // 1. Add books
  const book1 = new Book(1, "Merchant of Venice", "Shakespeare", "5354125987");
  const book2 = new Book(2, "The Alchemist", "Paulo Coelho", "7462848283");
  library.addItem(book1);
  library.addItem(book2);
  printLibraryContents(library);

  // 2. Remove a book
  library.removeItem(1);
  printLibraryContents(library);

  // 3. Check out a book
  book2.checkOut();
  printLibraryContents(library);

  // 4. Add a magazine
  const mag1 = new Magazine(3, "National Geographic", "June 2023");
  library.addItem(mag1);
  printLibraryContents(library);

  // 5. Remove a magazine
  library.removeItem(3);
  printLibraryContents(library);

  // 6. Check out a DVD
  const dvd1 = new DVD(4, "Inception", "Christopher Nolan");
  library.addItem(dvd1);
  dvd1.checkOut();
  printLibraryContents(library);

  // 7. Play a CD
  const cd1 = new CD(5, "Dark Side of the Moon", "Pink Floyd");
  library.addItem(cd1);
  printLibraryContents(library);

  // 8. Read an Ebook
  const ebook1 = new Ebook(6, "Digital Fortess", "Dan Brown", 5);
  library.addItem(ebook1);
  printLibraryContents(library);

  // 9. Play a Blu-ray
  const bluray1 = new Bluray(7, "Avatar", "James Cameron", 1080);
  library.addItem(bluray1);
  printLibraryContents(library);

  // 10. Play a video game
  const game1 = new VideoGame(8, "The Witcher 3", "PC");
  library.addItem(game1);
  printLibraryContents(library);

  // 11. Add a Newspaper
  const newspaper1 = new Newspaper(9, "The New York Times", "24 Sep 2023");
  library.addItem(newspaper1);
  printLibraryContents(library);

  // 12. Remove a Newspaper
  library.removeItem(9);
  printLibraryContents(library);

  // 13. Add a Journal
  const journal1 = new Journal(10, "Nature Physics", "Vol. 123 No. 9");
  library.addItem(journal1);
  printLibraryContents(library);

  // 14. Remove a Journal
  library.removeItem(10);
  printLibraryContents(library);

  // 15. Add more items
  const cd2 = new CD(11, "Abbey Road", "The Beatles");
  const game2 = new VideoGame(12, "Red Dead Redemption 2", "PS5");
  library.addItem(cd2);
  library.addItem(game2);
  printLibraryContents(library);

  // 16. Loan out a CD and Book
  cd2.loan();
  book2.loan();
  printLibraryContents(library);

  // 17. Return the Book
  book2.setStatus(ItemStatus.AVAILABLE);
  printLibraryContents(library);
}
