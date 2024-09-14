// script.js
const productImage = 
    document.getElementById('productImage');
const nextBtn = 
    document.getElementById('nextBtn');
const prevBtn = 
    document.getElementById('prevBtn');
const topBtn = 
    document.getElementById('topBtn');
const bottomBtn = 
    document.getElementById('bottomBtn');

let currentFrame = 1;
const totalFrames = 36;
nextBtn.addEventListener('click', () => {
    if (currentFrame < totalFrames) {
        currentFrame++;
        update();
    }
});
prevBtn.addEventListener('click', () => {
    if (currentFrame > 1) {
        currentFrame--;
        update();
    }
});
function update() {
    const rotation = (currentFrame - 1) * (360 / totalFrames);
    productImage.style.transform = `rotateY(${rotation}deg)`;
}