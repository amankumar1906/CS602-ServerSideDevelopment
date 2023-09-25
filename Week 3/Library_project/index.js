class Item {
  constructor(ID, title) {
    this.ID = ID;
    this.title = title;
  }

  getID() {
    return this.ID;
  }

  getDescription() {
    throw new Error("Method 'getDescription()' must be implemented.");
  }
}

// Book Class
class Book extends Item {
  constructor(ID, title, author, ISBN) {
    super(ID, title);
    this.author = author;
    this.ISBN = ISBN;
    this.status = "available";
  }

  getDescription() {
    return `${this.title} by ${this.author} (Status: ${this.status})`;
  }

  checkOut() {
    this.status = "checked out";
  }

  getAuthor() {
    return this.author;
  }

  getISBN() {
    return this.ISBN;
  }

  getStatus() {
    return this.status;
  }
}

class Magazine extends Item {
  constructor(ID, title, issue) {
    super(ID, title);
    this.issue = issue;
  }

  getDescription() {
    return `${this.title} - Issue: ${this.issue}`;
  }
}

class DVD extends Item {
  constructor(ID, title, director) {
    super(ID, title);
    this.director = director;
    this.status = "available";
  }

  getDescription() {
    return `${this.title} directed by ${this.director} (Status: ${this.status})`;
  }

  checkOut() {
    this.status = "checked out";
  }
}

class CD extends Item {
  constructor(ID, title, artist) {
    super(ID, title);
    this.artist = artist;
    this.isPlaying = false;
  }

  getDescription() {
    return `${this.title} by ${this.artist}`;
  }

  play() {
    this.isPlaying = true;
  }
}

class Newspaper extends Item {
  constructor(ID, title, date) {
    super(ID, title);
    this.date = date;
  }

  getDescription() {
    return `${this.title} - Date: ${this.date}`;
  }
}

class Journal extends Item {
  constructor(ID, title, volume) {
    super(ID, title);
    this.volume = volume;
  }

  getDescription() {
    return `${this.title} - Volume: ${this.volume}`;
  }
}

class Ebook extends Item {
  constructor(ID, title, author, fileSize) {
    super(ID, title);
    this.author = author;
    this.fileSize = fileSize;
  }

  getDescription() {
    return `${this.title} by ${this.author} (File Size: ${this.fileSize}MB)`;
  }

  read() {
    console.log(`Reading ${this.title} by ${this.author}...`);
  }
}

class Bluray extends DVD {
  constructor(ID, title, director, resolution) {
    super(ID, title, director);
    this.resolution = resolution;
  }

  getDescription() {
    return `${super.getDescription()} (Resolution: ${this.resolution}p)`;
  }
}

class VideoGame extends Item {
  constructor(ID, title, platform) {
    super(ID, title);
    this.platform = platform;
  }

  getDescription() {
    return `${this.title} for ${this.platform}`;
  }

  play() {
    console.log(`Playing ${this.title} on ${this.platform}...`);
  }
}

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
    delete this.items[ID];
  }

  getAllItems() {
    return this.items;
  }
}

// Helper function to print the contents of the library
function printLibraryContents(library) {
  const items = library.getAllItems();
  const tableArray = [];

  for (const id in items) {
    const item = items[id];
    let details = "";
    let action = "";

    if (item instanceof Book) {
      details = `${item.author}, ISBN: ${item.ISBN}`;
      action = item.getStatus();
    } else if (item instanceof Magazine) {
      details = `Issue: ${item.issue}`;
    } else if (item instanceof DVD) {
      details = `Directed by: ${item.director}`;
      action = item.status;
    } else if (item instanceof CD) {
      details = `Artist: ${item.artist}`;
      action = item.isPlaying ? "Playing" : "";
    } else if (item instanceof Newspaper) {
      details = `Date: ${item.date}`;
    } else if (item instanceof Journal) {
      details = `Volume: ${item.volume}`;
    } else if (item instanceof Ebook) {
      details = `${item.author}, File Size: ${item.fileSize}MB`;
    } else if (item instanceof Bluray) {
      details = `Directed by: ${item.director}, Resolution: ${item.resolution}p`;
    } else if (item instanceof VideoGame) {
      details = `Platform: ${item.platform}`;
      action = "Ready to Play";
    }

    tableArray.push({
      ID: item.getID(),
      Title: item.title,
      Type: item.constructor.name,
      Details: details,
      Status_Action: action,
    });
  }

  if (tableArray.length === 0) {
    console.log("Library is empty.");
  } else {
    console.table(tableArray);
  }
  console.log("-".repeat(30));
}

// Functional Tests
function testLibraryFunctions() {
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
  cd1.play();
  printLibraryContents(library);

  // 8. Read an Ebook
  const ebook1 = new Ebook(6, "Digital Fortess", "Dan Brown", 5);
  library.addItem(ebook1);
  ebook1.read();
  printLibraryContents(library);

  // 9. Play a Blu-ray
  const bluray1 = new Bluray(7, "Avatar", "James Cameron", 1080);
  library.addItem(bluray1);
  printLibraryContents(library);

  // 10. Play a video game
  const game1 = new VideoGame(8, "The Witcher 3", "PC");
  library.addItem(game1);
  game1.play();
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
}

// Run the tests
testLibraryFunctions();
