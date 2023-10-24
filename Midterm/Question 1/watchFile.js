const fs = require("fs");
const { EventEmitter } = require("events");
const path = require("path");

class FileWatcher extends EventEmitter {
  constructor(dir) {
    super();
    this.dir = dir;
    this.startWatching();
  }

  startWatching() {
    fs.watch(this.dir, (eventType, filename) => {
      if (filename) {
        if (eventType === "rename") {
          const filePath = path.join(this.dir, filename);
          fs.access(filePath, (err) => {
            if (err) {
              this.emit("fileRemoved", filename);
            } else {
              this.emit("fileAdded", filename);
            }
          });
        }
      }
    });
  }
}

// Set up the watcher for the '/uploads' folder
const watcher = new FileWatcher("./uploads");

watcher.on("fileAdded", (filename) => {
  console.log(`File added: ${filename}`);
});

watcher.on("fileRemoved", (filename) => {
  console.log(`File removed: ${filename}`);
});

console.log("Watching '/uploads' for file changes...");
