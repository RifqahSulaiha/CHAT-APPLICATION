const express = require("express");
const path = require("path");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Socket.IO logic
io.on("connection", (socket) => {
    socket.on("newuser", (username) => {
        socket.username = username;
        socket.broadcast.emit("update", `${username} joined the conversation`);
    });

    socket.on("exituser", (username) => {
        socket.broadcast.emit("update", `${username} left the conversation`);
    });

    socket.on("chat", (message) => {
        socket.broadcast.emit("chat", message);
    });

    socket.on("disconnect", () => {
        if (socket.username) {
            socket.broadcast.emit("update", `${socket.username} left the conversation`);
        }
    });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

