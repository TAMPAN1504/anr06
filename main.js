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