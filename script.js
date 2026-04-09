// JavaScript functionality for handling anonymous message submissions

// Function to submit a message
function submitMessage() {
    const messageInput = document.getElementById('messageInput');
    const colorSelect = document.getElementById('colorSelect');
    const messagesContainer = document.getElementById('messagesContainer');

    // Retrieve the message and color
    const message = messageInput.value;
    const color = colorSelect.value;

    if (message) {
        // Create a message object
        const messageObject = {
            text: message,
            color: color,
            date: new Date().toISOString()
        };

        // Store the message in local storage
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push(messageObject);
        localStorage.setItem('messages', JSON.stringify(messages));

        // Clear the input
        messageInput.value = '';

        // Display the new message
        displayMessages();
    }
}

// Function to display all messages
function displayMessages() {
    const messagesContainer = document.getElementById('messagesContainer');
    messagesContainer.innerHTML = '';

    // Retrieve messages from local storage
    const messages = JSON.parse(localStorage.getItem('messages')) || [];

    // Iterate over messages and display them
    messages.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.textContent = msg.text;
        messageElement.style.color = msg.color;
        messagesContainer.appendChild(messageElement);
    });
}

// Initialize example messages
window.onload = function() {
    const exampleMessages = [
        {text: 'Hello, world!', color: 'black'},
        {text: 'How are you?', color: 'blue'},
        {text: 'Anonymous messages are cool!', color: 'green'},
    ];

    // Store example messages in local storage
    localStorage.setItem('messages', JSON.stringify(exampleMessages));
    displayMessages();
};

// Attach submit event to a button
document.getElementById('submitButton').onclick = submitMessage;