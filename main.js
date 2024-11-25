// LOGIN FUNC
document.querySelector(".submitBtn").addEventListener("click", function(){
    const outputUser = document.querySelector("input").value.trim().toLowerCase();

    const validName = ["aurellia","nayla","ramadhani", "ella"]
    const isValid = validName.some(name => outputUser.includes(name));

    if(isValid){
        var elemen = document.querySelectorAll(".home-section");
        elemen.forEach(function(element){
            element.style.display = "block";
        });
        document.querySelector(".verification-section").style.display = "none";
    }else{
        alert("Tolong masukan nama lengkap mu :)")
    }
})


// MUSIC FUNC
let progress = document.getElementById("progress");
        let song = document.getElementById("song");
        let ctrlIcon = document.getElementById("ctrlIcon");

        song.onloadedmetadata = function(){
            progress.max = song.duration;
            progress.value = song.currentTime;
        }

        function playPause(){
            if(ctrlIcon.classList.contains("fa-pause")){
                song.pause();
                ctrlIcon.classList.remove("fa-pause");
                ctrlIcon.classList.add("fa-play");

            }
            else {
                song.play();
                ctrlIcon.classList.add("fa-pause");
                ctrlIcon.classList.remove("fa-play");
            }
        }

        if(song.play()){
            setInterval(()=>{
                progress.value = song.currentTime;
            },500)
        }

        progress.onchange = function(){
            song.play();
            song.currentTime = progress.value;
            ctrlIcon.classList.add("fa-pause");
            ctrlIcon.classList.remove("fa-play");
        }


// Fungsi Lightbox
let lightbox = document.querySelector(".lightbox");
let lightboxImg = document.querySelectorAll(".lightbox img");
let controls = document.querySelector(".controls");
lightbox.addEventListener("click", (event)=> {
    if(event.target !== lightboxImg){
        lightbox.style.display = "none";
        song.pause();
   }else if(event.target !== controls){
    lightbox.style.display = "none";
    song.pause();
}
})
// Lightbox Dewa
let dewa19 = () =>{
    document.querySelector(".lightbox").style.display = "block";
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}