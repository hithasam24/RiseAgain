// Resume Builder Functionality
function buildResume() {
    // Get form values
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let summary = document.getElementById('summary').value;
    let skills = document.getElementById('skills').value;
    
    // Create resume preview HTML
    let resumeHTML = `<h3>${fullName}</h3>`;
    resumeHTML += `<p><strong>Email:</strong> ${email}</p>`;
    resumeHTML += `<p><strong>Professional Summary:</strong> ${summary}</p>`;
    resumeHTML += `<p><strong>Skills:</strong> ${skills}</p>`;
    
    document.getElementById('resumePreview').innerHTML = resumeHTML;
}

// Chat Bot Functionality
function sendMessage() {
    let input = document.getElementById('chatInput');
    let message = input.value.trim();
    if (message === "") return;
    
    // Add user message
    addChatMessage(message, 'user-message');
    input.value = "";
    
    // Simulate bot response after a delay
    setTimeout(() => {
        let response = getBotResponse(message);
        addChatMessage(response, 'bot-message');
    }, 1000);
}

function addChatMessage(message, className) {
    let chatContainer = document.getElementById('chatContainer');
    let messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', className);
    messageElement.innerText = message;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Simple Chat Bot Responses
function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    if (userMessage.includes('hello') || userMessage.includes('hi')) {
        return 'Hello! How can I help you with your resume today?';
    } else if (userMessage.includes('help')) {
        return 'Sure, I can help you build a compelling resume. Please fill in your details and click "Build Resume".';
    } else if (userMessage.includes('thank')) {
        return 'You\'re welcome! I\'m happy to assist.';
    } else {
        return 'I\'m not sure I understand. Could you please elaborate?';
    }
}