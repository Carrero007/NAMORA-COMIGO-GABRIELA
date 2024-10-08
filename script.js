// Carrossel de imagens
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showSlide(index) {
    slides.style.transform = `translateX(-${index * 300}px)`;
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 3000);
// Função quando clicar em "SIM"
function sim() {
    alert("Você aceitou namorar comigo!");
    // Redireciona para um vídeo romântico no YouTube
    location.href = "https://youtube.com/clip/Ugkxti7N3SjMtFXfIXHi6mMVqPI0D5CQ4768?si=QL1bmUTVDM2tt95D";
}
// Função para o botão "NÃO" desviar ao tentar clicar
function desvia(btn) {
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

// Função que gera uma posição aleatória para o botão "NÃO"
function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}

