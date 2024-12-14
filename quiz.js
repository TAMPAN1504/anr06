// script.js
let questionIndex = 0;

const questions = [
    {
        question: "Apakah kau menyukainya?",
        answers: ["Suka bangettt 😍", "Biasa saja 😒"],
        noResponse: "So sad to hear that answer 😔.. its okay semoga hari mu menyenangkan 👋"
    },
    {
        question: "Kira kira berapa nilai untuk website ini?",
        answers: ["1000/100", "10/100"],
        noResponse: "Yahhh, padahal aku udah effort loh! 😢"
    },
    {
        question: "Apa kah sudah ada yang pernah memberikan hal semacam ini di hidupmu?",
        answers: ["Belum pernah", "Sudah pernah"],
        noResponse: "Oh, semoga ini jadi pengalaman pertama yang berkesan! 😊"
    },
    {
        question: "Apa kesan mu melihat konten yang ku berikan?",
        answers: ["Terharu", "Biasa aja"],
        noResponse: "Yahh, maaf ya kalo terkesan biasa aja 🤔"
    },
    {
        question: "Bagus! Kira kira kamu mau kenal aku lebih dalam ga?",
        answers: ["Boleh", "Nanti aja deh"],
        noResponse: "Oke 😊"
    }
];

function handleAnswer(answer) {
    const questionContainer = document.getElementById('question-container');

    // Jika pengguna memilih "Biasa saja", tampilkan respons sesuai pertanyaan
    if (answer === 'no') {
        const currentQuestion = questions[questionIndex];
        questionContainer.innerHTML = `
            <p>${currentQuestion.noResponse}</p>
        `;
        return; // Akhiri sesi
    }

    // Jika pertanyaan terakhir sudah dijawab
    if (questionIndex === questions.length - 1) {
        questionContainer.innerHTML = `
            <p>Wowowowo Terimakasih udah berpartisipasi Aurell!</p>
        `;
        return; // Akhiri sesi
    }

   // Lanjutkan ke pertanyaan berikutnya
   questionIndex++;
   const currentQuestion = questions[questionIndex];

   questionContainer.innerHTML = `
       <p>${currentQuestion.question}</p>
       <button class="answer-btn" onclick="handleAnswer('yes')">${currentQuestion.answers[0]}</button>
       <button class="answer-btn" onclick="handleAnswer('no')">${currentQuestion.answers[1]}</button>
   `;
}

// Inisialisasi pertanyaan pertama
document.addEventListener("DOMContentLoaded", () => {
   const questionContainer = document.getElementById('question-container');
   questionContainer.innerHTML = `
       <p>${questions[questionIndex].question}</p>
       <button class="answer-btn" onclick="handleAnswer('yes')">${questions[questionIndex].answers[0]}</button>
       <button class="answer-btn" onclick="handleAnswer('no')">${questions[questionIndex].answers[1]}</button>
   `;
});
