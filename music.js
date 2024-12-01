const dataLagu = [
    { title: "Aku milikmu", artis:"Dewa 19", src: "assets/audio/akumilikmu.mp3" },
    { title: "Terima kasih", artis:"Hal", src: "assets/audio/HAL - terima kasih (Official Lyric Video) - halstage (youtube).mp3" },
    { title: "Hal", artis:"HAL", src: "assets/audio/HAL - terima kasih (Official Lyric Video) - halstage (youtube).mp3" },
    { title: "Hal", artis:"HAL", src: "assets/audio/HAL - terima kasih (Official Lyric Video) - halstage (youtube).mp3" }
];

const laguPlayer = document.getElementById("laguPlayer");
const laguSource = document.getElementById("laguSource");

// Fungsi untuk memuat dan memainkan lagu berdasarkan indeks
function loadSong(index) {
    laguSource.src = dataLagu[index].src;
    laguPlayer.load();
    laguPlayer.play();
}

// Event listener untuk gambar di galeri
const GalleryImages = document.querySelectorAll(".music-box .gallery img");
GalleryImages.forEach((image) => {
    image.addEventListener("click", () => {
        const index = image.getAttribute("data-index");
        loadSong(index); // Memuat dan memainkan lagu
        openLightbox(image)
    });
});

function openLightbox(image) {
    const lightbox = document.querySelector(".lightbox");
    const lightboxImage = document.getElementById("lightboxImg"); // Perbaiki pemilihan elemen
    const Judul = document.getElementById("judulLagu");
    const Artis = document.getElementById("artisLagu");

    lightboxImage.src = image.src; // Set gambar di lightbox
    
    const index = image.getAttribute("data-index");
    Judul.innerText = dataLagu[index].title; // Set judul lagu di lightbox
    Artis.innerText = dataLagu[index].artis; // Set artis lagu di lightbox

    lightbox.style.display = "flex"; // Tampilkan lightbox
}

function closeLightbox() {
    const lightbox = document.querySelector(".lightbox");
    lightbox.style.display = "none"; // Sembunyikan lightbox
}

function playPause() {
    if (laguPlayer.paused) {
        laguPlayer.play();
        document.getElementById("ctrlIcon").classList.remove('fa-play');
        document.getElementById("ctrlIcon").classList.add('fa-pause');
    } else {
        laguPlayer.pause();
        document.getElementById("ctrlIcon").classList.remove('fa-pause');
        document.getElementById("ctrlIcon").classList.add('fa-play');
    }
}

function prevSong() {
    // Logika untuk lagu sebelumnya
}

function nextSong() {
    // Logika untuk lagu berikutnya
}