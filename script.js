let videoElement = document.getElementById('countdown-video');
const headerDiv = document.querySelector('.header');
const containerDiv = document.querySelector('.container');
const footerDiv = document.querySelector('.footer');

// Yuklanish sahifasi va asosiy kontentni tanlash
let loadingScreen = document.getElementById('loading-screen');
let mainContent = document.getElementById('main-content');

// Foydalanuvchi harakati orqali videoni boshlatish
document.body.addEventListener('click', function () {
    // Agar video boshlanmagan bo'lsa, uni boshlatish
    if (videoElement.paused) {
        videoElement.play();
    }
});

// Video tugagandan so'ng asosiy sahifani ko'rsatish
videoElement.onended = function() {
    loadingScreen.style.display = 'none';
    mainContent.style.display = 'block';
    bodyShow(headerDiv);
    bodyShow(containerDiv);
    bodyShow(footerDiv);
};

// Classlarni to'g'rilab beradigan funksiya
function bodyShow(e) {
    e.classList.add('show');
    e.classList.remove('hide');
}
