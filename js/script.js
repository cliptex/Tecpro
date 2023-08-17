document.addEventListener("DOMContentLoaded", function() {
    let texts = ["First Text", "Second Text", "Third Text"]; // Dinamik metinleri buraya ekleyin
    let currentIndex = 0;

    setInterval(function() {
        let dynamicContent = document.getElementById("dynamic-content");
        dynamicContent.innerText = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }, 2000);
});
