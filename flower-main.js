document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-button");
    const startContainer = document.getElementById("start-container");
    const lyricsContainer = document.getElementById("lyrics-container");
    const finalMessage = document.getElementById("final-message");
    const audio = document.getElementById("background-audio");
    const firstLoad = document.querySelector(".first-load");
    const flowers = document.getElementById("main-content"); // Halaman main content
  
    const lyrics = [
      { text: "Come on", delay: 700 },
      { text: "Come on", delay: 700 },
      { text: "Come on", delay: 2000 },
      { text: "Number 1", delay: 2000 },
      { text: "Party Anthem", delay: 3900 },
      { text: "Before the moment's gone", delay: 2500 },
      { text: "Numberr 1", delay: 2000 },
      { text: "Party Anthemmm", delay: 500 },
    ];
  
    // Fungsi untuk efek fade-out
    function fadeOutElement(element, duration = 1000) {
      element.style.transition = `opacity ${duration}ms`;
      element.style.opacity = "0";
  
      setTimeout(() => {
        element.style.display = "none";
      }, duration);
    }
  
    // Fungsi untuk efek fade-in
    function fadeInElement(element, duration = 1000) {
      element.style.display = "flex"; // Tampilkan elemen
      element.style.opacity = "0";   // Mulai dari transparan
      element.style.transition = `opacity ${duration}ms`;
      setTimeout(() => {
        element.style.opacity = "1";
      }, 10);
    }
  
    startButton.addEventListener("click", () => {
      // Sembunyikan tombol mulai
      startContainer.style.display = "none";
  
      // Tampilkan lirik dan mulai audio
      lyricsContainer.style.display = "flex";
      audio.play();
  
      let currentIndex = 0;
  
      const showNextLyric = () => {
        if (currentIndex < lyrics.length) {
          const lyric = lyrics[currentIndex].text;
  
          // Jika lirik adalah "Come on", "Number 1", atau "Party Anthem", tampilkan sebagai satu baris
          if (lyric === "Come on" && currentIndex < 3) {
            // Gabungkan "Come on" menjadi satu baris
            const line = document.getElementById("lyric-line");
            if (!line) {
              const newLine = document.createElement("p");
              newLine.id = "lyric-line";
              newLine.classList.add("lyric-line");
              lyricsContainer.appendChild(newLine);
            }
            const currentLine = document.getElementById("lyric-line");
            currentLine.textContent += lyric + " ";
          } else if (lyric === "Number 1" || lyric === "Party Anthem") {
            // Gabungkan "Number 1" dan "Party Anthem" menjadi satu baris
            const line = document.getElementById("number-party-line");
            if (!line) {
              const newLine = document.createElement("p");
              newLine.id = "number-party-line";
              newLine.classList.add("lyric-line");
              lyricsContainer.appendChild(newLine);
            }
            const currentLine = document.getElementById("number-party-line");
            currentLine.textContent += lyric + " ";
          } else {
            // Untuk lirik lainnya, tampilkan seperti biasa
            const newLyric = document.createElement("p");
            newLyric.textContent = lyric;
            newLyric.classList.add("lyric-line");
            lyricsContainer.appendChild(newLyric);
          }
  
          setTimeout(() => {
            currentIndex++;
            showNextLyric();
          }, lyrics[currentIndex].delay);
        } else {
          // Setelah lirik selesai
          setTimeout(() => {
            fadeOutElement(firstLoad, 1000); // Fade-out firstLoad (lirik)
            setTimeout(() => {
              fadeInElement(flowers, 1000); // Fade-in halaman flowers (main content)
            }, 1000); // Tunggu hingga fade-out selesai
          }, 2000);
        }
      };
  
      showNextLyric();
    });
  });
  