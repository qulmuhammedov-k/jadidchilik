// Video elementini tanlash
let videoElement = document.getElementById('countdown-video');
const headerDiv = document.querySelector('.header')
const containerDiv = document.querySelector('.container')
const footerDiv = document.querySelector('.footer')

function bodyShow(e){
    e.classList.add('show')
    e.classList.remove('hide')
}
// Yuklanish sahifasi va asosiy kontentni tanlash
let loadingScreen = document.getElementById('loading-screen');
let mainContent = document.getElementById('main-content');

// Video tugagandan so'ng asosiy sahifani ko'rsatish
videoElement.onended = function() {
    loadingScreen.style.display = 'none';
    mainContent.style.display = 'block';
    bodyShow(headerDiv)
    bodyShow(containerDiv)
    bodyShow(footerDiv)
};
