const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected:", socket.id);

  // Send the message to all clients except the sender: socket.broadcast.emit is used for this purpose instead of io.emit
  socket.on("message", (msg) => {
    socket.broadcast.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected:", socket.id);
  });
});

app.use(express.static("public"));

server.listen(3000, () => {
  console.log("listening on *:3000");
});
