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

function toggleWhatsApp() {
    const chatWindow = document.getElementById('wa-chat-window');
    chatWindow.classList.toggle('active');
}

function openWhatsAppChat(message = '') {
    const chatWindow = document.getElementById('wa-chat-window');
    if (chatWindow) {
        chatWindow.classList.add('active');
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
        // Usar el número global si existe, si no el por defecto
        const phoneNumber = window.GLOBAL_WHATSAPP_NUMBER || '34604885296'; 
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber.replace(/\s+/g, '')}&text=${encodeURIComponent(message)}`;
        
        // Abrir en una ventana emergente (popup) flotante centrada
        const width = 800;
        const height = 600;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);
        
        window.open(url, 'whatsapp_popup', `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,resizable=yes`);
        
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
