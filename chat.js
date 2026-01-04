// chat.js
const chatHTML = `
<div id="whatsapp-widget" style="position:fixed; bottom:30px; right:30px; z-index:9999; font-family: sans-serif;">
    <a href="https://wa.me/254113271924?text=IIG_START_JOURNEY" 
       target="_blank" 
       style="text-decoration: none; display: flex; align-items: center; background: #25D366; padding: 12px 20px; border-radius: 50px; box-shadow: 0 10px 25px rgba(0,0,0,0.15); transition: all 0.3s ease; border: 2px solid white;"
       onmouseover="this.style.transform='scale(1.05)'; this.style.background='#128C7E';"
       onmouseout="this.style.transform='scale(1)'; this.style.background='#25D366';">
        
        <i class="fab fa-whatsapp" style="color: white; font-size: 24px; margin-right: 12px;"></i>
        
        <span style="color: white; font-weight: 700; font-size: 14px; letter-spacing: 0.5px; text-transform: uppercase;">
            Talk to our Bot
        </span>
       
        <span style="position: absolute; top: 0; right: 0; height: 12px; width: 12px; background: #ff4d4d; border-radius: 50%; border: 2px solid white; display: block;"></span>
    </a>
</div>

<style>
    @keyframes pulse-animation {
        0% { box-shadow: 0 0 0 0px rgba(37, 211, 102, 0.5); }
        100% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
    }
    #whatsapp-widget a {
        animation: pulse-animation 2s infinite;
    }
</style>
`;

document.body.insertAdjacentHTML('beforeend', chatHTML);