document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            // Replace with the actual WhatsApp group link
            const groupLink = 'https://chat.whatsapp.com/example';
            window.open(groupLink, '_blank');
        });
    }

    // Add a slight perspective shift on mouse move for desktop
    const newspaper = document.querySelector('.newspaper');
    if (newspaper && window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 100;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 100;
            newspaper.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
    }
});
