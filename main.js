// LOGIN FUNC
document.querySelector(".submitBtn").addEventListener("click", function(){
    const outputUser = document.querySelector("input").value.trim().toLowerCase();

    const validName = ["aurellia","nayla","ramadhani", "ella"]
    const isValid = validName.some(name => outputUser.includes(name));

    if(isValid){
        var elemen = document.querySelectorAll(".home-section, .gallery-section, .confession-section");
        elemen.forEach(function(element){
            element.style.display = "flex";
        });
        document.querySelector(".verification-section").style.display = "none";
    }else{
        alert("Tolong masukan nama lengkap mu :)")
    }
})

// Paper Message Function

document.querySelector(".readmeItem").addEventListener("click", () =>{
    document.querySelector("#paperSfx").load();
    document.querySelector("#paperSfx").play();
    document.querySelector(".readmeMsg").style.display = "flex";
});

// fungsi ketika paper diklik di luar area gambar;
document.querySelector(".readmeMsg").addEventListener("click", () =>{
    if (event.target !== document.querySelector(".paper-bg")) {
        document.querySelector("#paperSfx").load();
        document.querySelector("#paperSfx").play();
        document.querySelector(".readmeMsg").style.display = "none";
    }
    });


// Konfigurasi awal untuk tanggal target (01 Januari 2025)
const targetDate = new Date('January 1, 2025 00:00:00').getTime();
let intervalId;

// Fungsi untuk memperbarui timer
function updateTimer() {
    // Mendapatkan waktu saat ini
    const now = new Date().getTime();

    // Menghitung selisih antara target date dan waktu sekarang
    const diff = targetDate - now;

    // Jika waktu sudah mencapai atau melewati target date
    if (diff <= 0) {
        clearInterval(intervalId);
        document.querySelector('.countdown').innerHTML = '<button onclick="alert(\'Tombol Kosong!\')">Tombol Kosong!</button>';
        return;
    }

    // Menghitung hari, jam, menit, dan detik
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Menampilkan hasil di elemen HTML
    document.getElementById('hari').innerHTML = pad(days);
    document.getElementById('jam').innerHTML = pad(hours);
    document.getElementById('menit').innerHTML = pad(minutes);
    document.getElementById('detik').innerHTML = pad(seconds);
}

// Fungsi untuk menambahkan nol di depan angka jika kurang dari 10
function pad(value) {
    return String(value).padStart(2, '0');
}

// Memulai interval untuk memperbarui timer setiap detik
intervalId = setInterval(updateTimer, 1000);

// Memanggil fungsi updateTimer sekali untuk menampilkan waktu awal
updateTimer();


document.querySelector(".readmeItem2").addEventListener("click", () =>{
    document.querySelector("#paperSfx").load();
    document.querySelector("#paperSfx").play();
    document.querySelector(".readmeMsg2").style.display = "flex";
});

document.querySelector(".readmeMsg2").addEventListener("click", () =>{
    if (event.target !== document.querySelector(".paper-bg")) {
        document.querySelector("#paperSfx").load();
        document.querySelector("#paperSfx").play();
        document.querySelector(".readmeMsg2").style.display = "none";
    }
    });


function warningSwitch(){
    document.querySelector(".warning-general").style.display="block";
};

function cancelWarning(){
    document.querySelector(".warning-general").style.display="none";
}