const socket = io("http://localhost:3000");

function sendMessage() {
  socket.emit("message", "Hello, World!");
}

socket.on("message", (msg) => {
  console.log("Received:", msg);
});
