let questionIndex = 0;

const questions = [
    {
        question: "Apakah kau menyukainya?",
        answers: ["Suka bangettt 😍", "Biasa saja 😒"],
        noResponse: "So sad to hear that answer 😔.. its okay semoga hari mu menyenangkan 👋",
        gif: "https://media.giphy.com/media/P4GxohAK1vaKI2yH8E/giphy.gif?cid=ecf05e47m1451659mjp3q19cojxu13bko7dlwaj5rvg8p6pg&ep=v1_gifs_search&rid=giphy.gif&ct=g" // Ganti dengan URL GIF yang sesuai
    },
    {
        question: "Kira kira berapa nilai untuk website ini?",
        answers: ["1000/100", "10/100"],
        noResponse: "Yahhh, padahal aku udah effort loh! 😢",
        gif: "https://media.giphy.com/media/DA8op0omzFuwe14iyj/giphy.gif?cid=ecf05e47mhublffhg7pmk019dcjy1nwulquoo7wpamy3078o&ep=v1_gifs_search&rid=giphy.gif&ct=g" // Ganti dengan URL GIF yang sesuai
    },
    {
        question: "Apa kah sudah ada yang pernah memberikan hal semacam ini di hidupmu?",
        answers: ["Belum pernah", "Sudah pernah"],
        noResponse: "Oh, semoga ini jadi pengalaman pertama yang berkesan! 😊",
        gif: "https://media.giphy.com/media/bTvCkBTQDIPyE/giphy.gif?cid=ecf05e478xe571z6luhk7n73l7399dz4rtxo7iat1ylxxxw2&ep=v1_gifs_search&rid=giphy.gif&ct=g" // Ganti dengan URL GIF yang sesuai
    },
    {
        question: "Apa kesan mu melihat konten yang ku berikan?",
        answers: ["Terharu", "Biasa aja"],
        noResponse: "Hmm, aku harap bisa membuat konten yang lebih menarik! 🤔",
        gif: "https://media.giphy.com/media/nl5wVNRJSWcO4/giphy.gif?cid=ecf05e47svvdmty57t9jia4hpooxlbvufo2j5o19gyo4q0ou&ep=v1_gifs_search&rid=giphy.gif&ct=g" // Ganti dengan URL GIF yang sesuai
    },
    {
        question: "Bagus! Kira kira kamu mau kenal aku lebih dalam ga?",
        answers: ["Boleh", "Nanti aja deh"],
        noResponse: "Oke, nanti kita bisa ngobrol lebih banyak! 😊",
        gif: "https://media.giphy.com/media/f08cafueoCoRW/giphy.gif?cid=790b7611d3hz52yjn5ddjv6wo9leo6ks8ut0g5edhi9723d9&ep=v1_gifs_search&rid=giphy.gif&ct=g" // Ganti dengan URL GIF yang sesuai
    }
];

function handleAnswer(answer) {
    const questionContainer = document.getElementById('question-container');

    // Jika pengguna memilih "Biasa saja", tampilkan respons sesuai pertanyaan
    if (answer === 'no') {
        const currentQuestion = questions[questionIndex];
        questionContainer.innerHTML = `
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHdnZmUybmtsNHQ3N29ua2Q5NmludHZ6YzQxenp0c3hrYnBpaXUyNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3OhXBaoR1tVPW/giphy.gif" alt="GIF" style="width: 150px; aspect-ratio: 4/3; object-fit: cover; border-radius: 10px;">
            <p>${currentQuestion.noResponse}</p>
        `;
        return; // Akhiri sesi
    }

    // Jika pertanyaan terakhir sudah dijawab
    if (questionIndex === questions.length - 1) {
        questionContainer.innerHTML = `
            <img src="https://media.giphy.com/media/ToCRja2miF3Xi/giphy.gif?cid=790b7611mrho6u42kzyu335swenb5xojbsqlorl9texsrzor&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="GIF" style="width: 150px; aspect-ratio: 4/3; object-fit: cover; border-radius: 10px;">
            <p>Terima kasih telah berpartisipasi! Sesi pertanyaan selesai.</p>
        `;
        return; // Akhiri sesi
    }

    // Lanjutkan ke pertanyaan berikutnya
    questionIndex++;
    const currentQuestion = questions[questionIndex];

    questionContainer.innerHTML = `
        <img src="${currentQuestion.gif}" alt="GIF" style="width: 150px; aspect-ratio: 4/3; object-fit: cover; border-radius: 10px;"> 
       <p>${currentQuestion.question}</p>
       <button class="answer-btn" onclick="handleAnswer('yes')">${currentQuestion.answers[0]}</button>
       <button class="answer-btn" onclick="handleAnswer('no')">${currentQuestion.answers[1]}</button>
   `;
}

// Inisialisasi pertanyaan pertama
document.addEventListener("DOMContentLoaded", () => {
    const questionContainer = document.getElementById('question-container');
    const currentQuestion = questions[questionIndex];
    questionContainer.innerHTML = `
        <img src="${currentQuestion.gif}" alt="GIF" style="width: 150px; aspect-ratio: 4/3; object-fit: cover; border-radius: 10px;">
       <p>${currentQuestion.question}</p>
       <button class="answer-btn" onclick="handleAnswer('yes')">${currentQuestion.answers[0]}</button>
       <button class="answer-btn" onclick="handleAnswer('no')">${currentQuestion.answers[1]}</button>
   `;
});
