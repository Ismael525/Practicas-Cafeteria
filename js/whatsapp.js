function toggleWhatsApp() {
    const window = document.getElementById('wa-chat-window');
    window.classList.toggle('active');
}

function openWhatsAppChat() {
    const window = document.getElementById('wa-chat-window');
    if (!window.classList.contains('active')) {
        window.classList.add('active');
    }
    // Optional: focus the input
    const input = document.getElementById('wa-chat-input');
    if (input) input.focus();
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
    const window = document.getElementById('wa-chat-window');
    const btn = document.querySelector('.wa-btn');
    if (window.classList.contains('active') && !window.contains(e.target) && !btn.contains(e.target)) {
        window.classList.remove('active');
    }
});
