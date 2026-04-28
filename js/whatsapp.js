function toggleWhatsApp() {
    const chatWindow = document.getElementById('wa-chat-window');
    chatWindow.classList.toggle('active');
}

function openWhatsAppChat(message = '') {
    const chatWindow = document.getElementById('wa-chat-window');
    if (chatWindow) {
        chatWindow.classList.add('active');
        console.log('Chat window opened via button');
    }
    
    const input = document.getElementById('wa-chat-input');
    if (input) {
        if (message) {
            input.value = message;
        }
        input.focus();
    }
}

function sendWhatsAppMessage() {
    const input = document.getElementById('wa-chat-input');
    const message = input.value.trim();
    if (message) {
        const phoneNumber = '34600000000'; // Número de la cafetería
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        input.value = '';
        toggleWhatsApp();
    }
}

// Close chat if clicked outside
document.addEventListener('click', (e) => {
    const chatWindow = document.getElementById('wa-chat-window');
    const btn = document.querySelector('.wa-btn');
    if (chatWindow && chatWindow.classList.contains('active') && !chatWindow.contains(e.target) && !btn.contains(e.target)) {
        chatWindow.classList.remove('active');
    }
});
