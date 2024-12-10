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