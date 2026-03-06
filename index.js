const volume = document.getElementById('volume');
const weight = document.getElementById('weight');
const rope = document.getElementById('rope');
const valueText = document.getElementById('value');

// Fareye basıldığı an (Çekerken)
volume.addEventListener('mousedown', () => {
    volume.style.transition = "0.1s"; // Kullanıcı çekerken hızlı tepki
    weight.style.transition = "0.1s";
    rope.style.transition = "0.1s";
});

// Fare bırakıldığı an (Yerçekimi devreye girer)
volume.addEventListener('mouseup', () => {
    volume.style.transition = "3s linear"; // 3 saniyede yavaşça düşme
    weight.style.transition = "3s linear";
    rope.style.transition = "3s linear";
    
    // Değerleri sıfıra çek
    volume.value = 0;
    updateVisuals(0);
});

// Görsel güncellemeler
volume.addEventListener('input', (e) => {
    updateVisuals(e.target.value);
});

function updateVisuals(val) {
    valueText.innerText = val + "%";
    // Ağırlığı yukarı çek (Ses arttıkça ağırlık yükselir)
    const moveAmount = val * 0.8; 
    weight.style.transform = `translateY(-${moveAmount}px)`;
    rope.style.height = (50 - moveAmount) + "px";
}