// scripts.js
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;

    if (username && message) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message');

        const messageUser = document.createElement('h3');
        messageUser.textContent = username;

        const messageContent = document.createElement('p');
        messageContent.textContent = message;

        messageContainer.appendChild(messageUser);
        messageContainer.appendChild(messageContent);

        document.getElementById('messages').appendChild(messageContainer);

        document.getElementById('messageForm').reset();
    } else {
        alert('Please enter both a name and a message.');
    }
});
