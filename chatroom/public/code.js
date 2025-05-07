(function () {
    const app = document.querySelector(".app");
    const socket = io();

    let uname;

    // Join chat
    app.querySelector("#join-user").addEventListener("click", () => {
        const usernameInput = app.querySelector("#username");
        const username = usernameInput.value.trim();
        if (!username) return;

        socket.emit("newuser", username);
        uname = username;

        app.querySelector(".join-screen").classList.remove("active");
        app.querySelector(".chat-screen").classList.add("active");
    });

    // Send message
    app.querySelector("#send-message").addEventListener("click", () => {
        const messageInput = app.querySelector("#message-input");
        const message = messageInput.value.trim();
        if (!message) return;

        renderMessage("my", {
            username: uname,
            text: message
        });

        socket.emit("chat", {
            username: uname,
            text: message
        });

        messageInput.value = "";
    });

    // Exit chat
    app.querySelector("#exit-chat").addEventListener("click", () => {
        socket.emit("exituser", uname);
        window.location.reload();
    });

    // Receive update
    socket.on("update", (update) => {
        renderMessage("update", update);
    });

    // Receive message
    socket.on("chat", (message) => {
        renderMessage("other", message);
    });

    // Render message
    function renderMessage(type, message) {
        const messageContainer = app.querySelector(".messages");
        const el = document.createElement("div");

        if (type === "my") {
            el.className = "message my-message";
            el.innerHTML = `
                <div>
                    <div class="name">You</div>
                    <div class="text">${message.text}</div>
                </div>
            `;
        } else if (type === "other") {
            el.className = "message other-message";
            el.innerHTML = `
                <div>
                    <div class="name">${message.username}</div>
                    <div class="text">${message.text}</div>
                </div>
            `;
        } else if (type === "update") {
            el.className = "update";
            el.innerText = message;
        }

        messageContainer.appendChild(el);
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
})();
