import registerComponent from "./utils/componentRegistration.js";

registerComponent();

// noise effect (little pixels)
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.noise-container');
    for (let i = 0; i < 100; i++) {
        setInterval(() => {
            const noise = document.createElement('div');
            noise.className = 'noise';
            noise.style.left = Math.random() * 100 + 'vw';
            noise.style.top = Math.random() * 100 + 'vh';
            content.appendChild(noise);
            setTimeout(() => {
                noise.remove();
            }, 100);
        }, 200);
    }
});

function removeEffects() {
    const noises = document.querySelectorAll('.noise');
    const noiseContainer = document.querySelector('.noise-container');
    const scanLines = document.querySelector('.scanlines');
    for (const noise of noises) {
        noise.remove();
    }
    noiseContainer.remove();
    scanLines.remove();

}

const removeEffectButton = document.querySelector('#remove-effects');

removeEffectButton.addEventListener('click', removeEffects);
