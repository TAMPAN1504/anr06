function finishQuiz() {
    const memorableMoment = document.getElementById('memorable-moment').value;
    const score = calculateScore(); // Fungsi untuk menghitung skor
    const answers = collectAnswers(); // Fungsi untuk mengumpulkan jawaban

    fetch('http://localhost/quiz_app/save_results.php', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            score: score,
            answers: JSON.stringify(answers)
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Hasil kuis berhasil disimpan!');
        } else {
            alert('Gagal menyimpan hasil: ' + data.message);
        }
    })
    .catch(error => console.error('Error:', error));
}
