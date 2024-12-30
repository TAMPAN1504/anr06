// LOGIN FUNC
document.querySelector(".submitBtn").addEventListener("click", function(){
    const outputUser = document.querySelector("input").value.trim().toLowerCase();

    const validName = ["aurellia","nayla","ramadhani", "ella"]
    const isValid = validName.some(name => outputUser.includes(name));
    var nama = document.querySelector(".namaInput");
    var nama2 = document.querySelector(".namaInput2");
    var nama3 = document.querySelector(".namaInput3");

    if(isValid){
        var elemen = document.querySelectorAll(".home-section, .gallery-section, .confession-section");
        elemen.forEach(function(element){
            element.style.display = "flex";
        });
        document.querySelector(".verification-section").style.display = "none";
        nama.innerHTML = outputUser;
        nama2.innerHTML = outputUser;
        nama3.innerHTML = outputUser;
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
const targetDate = new Date('January 01, 2025 00:00:00').getTime();
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
        document.getElementById("finalButton").style.display="block";
        document.querySelector(".readmeItem2").style.display="none";
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


document.querySelector(".readmeItem3").addEventListener("click", () =>{
    document.querySelector("#paperSfx").load();
    document.querySelector("#paperSfx").play();
    document.querySelector(".readmeMsg3").style.display = "flex";
});

document.querySelector(".readmeMsg3").addEventListener("click", () =>{
    if (event.target !== document.querySelector(".paper-bg")) {
        document.querySelector("#paperSfx").load();
        document.querySelector("#paperSfx").play();
        document.querySelector(".readmeMsg3").style.display = "none";
    }
    });


function warningSwitch(){
    document.querySelector(".warning-general").style.display="block";
};

function cancelWarning(){
    document.querySelector(".warning-general").style.display="none";
}

// KODE SEMENTARA !!!

// Simpan posisi scroll sebelum refresh
// window.addEventListener("beforeunload", () => {
//     localStorage.setItem("scrollPosition", window.scrollY);
//   });
  
//   // Ambil dan tetapkan posisi scroll setelah halaman dimuat
//   document.addEventListener("DOMContentLoaded", () => {
//     const scrollPosition = localStorage.getItem("scrollPosition");
//     if (scrollPosition) {
//       window.scrollTo(0, parseInt(scrollPosition));
//     }
//   });
  