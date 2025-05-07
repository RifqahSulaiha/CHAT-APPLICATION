# CHAT-APPLICATION

COMPANY: CIDETECH IT SOLUTIONS

NAME: RIFQAH SULAIHA N

INTERN ID: CT04DA506

DOMAIN: FULL STACK WEB DEVELOPMENT

DURATION: 4 WEEKS

MENTOR: NEELA SANTHOSH

This real-time chat application is developed using Node.js, Express.js, and Socket.IO, with the user interface built using HTML, CSS, and vanilla JavaScript. The entire development process was carried out in 
Visual Studio Code (VS Code), which provided a streamlined environment for editing and managing the project files. The application allows users to join a chatroom by entering a username, send messages, receive 
updates when other users join or leave, and exit the chat, all through real-time communication enabled by WebSockets via Socket.IO. The server logic is contained in the `server.js` file, which initializes an 
Express application, serves static files from a designated public directory, and sets up a Socket.IO server to handle incoming socket connections. Upon establishing a connection, the server listens for specific
events such as 'newuser', 'exituser', 'chat', and 'disconnect'. When a new user joins, the server broadcasts a message to all other connected users to notify them. Similarly, when a user leaves the chat or
disconnects unexpectedly, an update is sent out indicating their departure. The server also handles the 'chat' event by rebroadcasting the message received from one client to all other clients.

On the client side, the `code.js` file is responsible for managing the interaction between the user interface and the WebSocket server. When a user enters their name and clicks the join button, the application 
emits a 'newuser' event along with the username to the server and transitions the view from the join screen to the chat screen. When a message is typed and the send button is clicked, the message is both rendered 
in the user's own chat window and sent to the server using a 'chat' event. The server then distributes it to all other connected clients, who display it using the same rendering logic. If the user decides to 
leave the chat, an 'exituser' event is sent and the page reloads to bring the user back to the initial join screen. Messages in the chat window are dynamically generated using JavaScript based on their type—
messages sent by the user are styled differently from those sent by others, and system updates like user join or exit events appear as italicized, centered messages.

The HTML file, `index.html`, provides the structural layout of the application with two main sections: a join screen and a chat screen. The CSS in `style.css` ensures that the user interface is clean, modern, and
responsive, with distinct styling for different types of messages and interface components such as buttons, headers, and input fields. The app container is centered and restricted to a maximum width for better
readability, and the chat messages are styled to differentiate between the user's own messages and those of others.

To run the project, the user needs to initialize a Node.js environment by running `npm init -y` in the terminal and then install the necessary packages using `npm install express socket.io`. After ensuring that 
all frontend files (`index.html`, `style.css`, and `code.js`) are placed inside a `public` directory, the server can be started with the command `node server.js`. Once the server is running, the application can
be accessed through a browser by navigating to `http://localhost:5000`. This makes the chat application fully functional in a web browser environment without needing any additional setup beyond Node.js and a 
modern browser. Although the current version of the application is simple and does not include features like user authentication or persistent message storage, it effectively demonstrates real-time communication
and can serve as a solid foundation for building more complex chat systems in the future.

Output:

![Image](https://github.com/user-attachments/assets/5c954958-8ab0-4829-9633-84a04a3e8818)

![Image](https://github.com/user-attachments/assets/5ba41345-16b3-4d9b-9435-ca4f7fe5aaf1)

![Image](https://github.com/user-attachments/assets/8acf3516-e772-45db-a71a-d0341be1aa29)
