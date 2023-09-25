export const ItemStatus = {
  AVAILABLE: "available",
  CHECKED_OUT: "checked out",
  ON_LOAN: "on loan",
};

export class Item {
  constructor(ID, title) {
    this.ID = ID;
    this.title = title;
    this.status = ItemStatus.AVAILABLE; // default status
  }

  getID() {
    return this.ID;
  }

  getDescription() {
    throw new Error("Method 'getDescription()' must be implemented.");
  }

  setStatus(status) {
    if (Object.values(ItemStatus).includes(status)) {
      this.status = status;
    } else {
      throw new Error("Invalid status value provided.");
    }
  }

  getStatus() {
    return this.status;
  }

  checkOut() {
    this.setStatus(ItemStatus.CHECKED_OUT);
  }

  loan() {
    this.setStatus(ItemStatus.ON_LOAN);
  }
}

export class Book extends Item {
  constructor(ID, title, author, ISBN) {
    super(ID, title);
    this.author = author;
    this.ISBN = ISBN;
  }

  getDescription() {
    return `${this.title} by ${this.author} (Status: ${this.status})`;
  }

  getAuthor() {
    return this.author;
  }

  getISBN() {
    return this.ISBN;
  }
}

export class Magazine extends Item {
  constructor(ID, title, issue) {
    super(ID, title);
    this.issue = issue;
  }

  getDescription() {
    return `${this.title} - Issue: ${this.issue} (Status: ${this.status})`;
  }
}

export class DVD extends Item {
  constructor(ID, title, director) {
    super(ID, title);
    this.director = director;
  }

  getDescription() {
    return `${this.title} directed by ${this.director} (Status: ${this.status})`;
  }
}

export class CD extends Item {
  constructor(ID, title, artist) {
    super(ID, title);
    this.artist = artist;
  }

  getDescription() {
    return `${this.title} by ${this.artist} (Status: ${this.status})`;
  }
}

export class Newspaper extends Item {
  constructor(ID, title, date) {
    super(ID, title);
    this.date = date;
  }

  getDescription() {
    return `${this.title} - Date: ${this.date} (Status: ${this.status})`;
  }
}

export class Journal extends Item {
  constructor(ID, title, volume) {
    super(ID, title);
    this.volume = volume;
  }

  getDescription() {
    return `${this.title} - Volume: ${this.volume} (Status: ${this.status})`;
  }
}

//Ebook: Subclass of Item class
export class Ebook extends Item {
  constructor(ID, title, author, fileSize) {
    super(ID, title);
    this.author = author;
    this.fileSize = fileSize;
  }

  getDescription() {
    return `${this.title} by ${this.author} (File Size: ${this.fileSize}MB) (Status: ${this.status})`;
  }

  read() {
    console.log(`Reading ${this.title} by ${this.author}...`);
  }
}

//Bluray: Subclass of DVD class
export class Bluray extends DVD {
  constructor(ID, title, director, resolution) {
    super(ID, title, director);
    this.resolution = resolution;
  }

  getDescription() {
    return `${super.getDescription()} (Resolution: ${
      this.resolution
    } (Status: ${this.status}))`;
  }
}

//Videgame: Subclass of Item class
export class VideoGame extends Item {
  constructor(ID, title, platform) {
    super(ID, title);
    this.platform = platform;
  }

  getDescription() {
    return `${this.title} for ${this.platform} (Status: ${this.status})`;
  }

  play() {
    console.log(`Playing ${this.title} on ${this.platform}...`);
  }
}
