// --- DATA SOAL ---
const quizData = [
    { question: "Siapakah nama Ibunda Nabi Muhammad SAW?", options: ["Fatimah", "Aminah", "Khadijah", "Aisyah"], answer: 1 },
    { question: "Nabi Muhammad SAW dilahirkan di kota...", options: ["Madinah", "Makkah", "Yaman", "Thaif"], answer: 1 },
    { question: "Tahun kelahiran Nabi dikenal sebagai Tahun...", options: ["Gajah", "Unta", "Nabi", "Cahaya"], answer: 0 },
    { question: "Siapakah nama kakek Nabi yang merawat beliau setelah sang kakek?", options: ["Abu Thalib", "Abdullah", "Abu Bakar", "Hamzah"], answer: 0 },
    { question: "Berapakah usia Nabi Muhammad SAW saat Ibundanya, Aminah, wafat?", options: ["2 tahun", "4 tahun", "6 tahun", "8 tahun"], answer: 2 },
    { question: "Siapakah nama paman Nabi yang dikenal sangat menyayangi beliau sejak kecil?", options: ["Hamzah", "Abu Thalib", "Abbas", "Abu Lahab"], answer: 1 },
    { question: "Suku (Kabilah) manakah Nabi Muhammad SAW berasal?", options: ["Bani Israil", "Bani Tamim", "Bani Hasyim", "Bani Saud"], answer: 2 },
    { question: "Siapakah nama wanita yang menjadi ibu susuan pertama Nabi Muhammad SAW?", options: ["Halimah As-Sa'diyah", "Tsuwaibah Al-Aslamiyah", "Khadijah binti Khuwailid", "Ummu Aiman"], answer: 1 },
    { question: "Peristiwa besar apa yang terjadi pada Tahun Gajah?", options: ["Kelahiran Nabi Isa AS", "Penyerangan Ka'bah oleh Raja Abrahah", "Pembangunan kembali Ka'bah", "Perang Badar"], answer: 1 },
    { question: "Tanggal berapakah Nabi Muhammad SAW lahir dalam kalender Hijriah?", options: ["1 Ramadhan", "17 Ramadhan", "12 Rabiul Awal", "10 Dzulhijjah"], answer: 2 },
    { question: "Nabi Muhammad SAW dilahirkan pada hari...", options: ["Jumat", "Sabtu", "Senin", "Rabu"], answer: 2 },
    { question: "Siapakah nama Kakek Nabi yang memberikan nama 'Muhammad'?", options: ["Abdullah", "Abu Thalib", "Abdul Muththalib", "Hamzah"], answer: 2 },
    { question: "Apa nama kota tempat Nabi Muhammad SAW wafat?", options: ["Makkah", "Yatsrib (Madinah)", "Thaif", "Yerusalem"], answer: 1 },
    { question: "Saat kecil, Nabi Muhammad SAW diasuh oleh Halimah As-Sa'diyah di desa...", options: ["Quba'", "Bani Sa'ad", "Badar", "Uhud"], answer: 1 },
    { question: "Apa pekerjaan Nabi Muhammad SAW sebelum menerima wahyu (kenabian)?", options: ["Pedagang", "Nelayan", "Petukang", "Guru"], answer: 0 },
    { question: "Peristiwa 'Pembelahan Dada' Nabi Muhammad SAW terjadi saat beliau diasuh oleh...", options: ["Abdul Muththalib", "Abu Thalib", "Halimah As-Sa'diyah", "Ibundanya"], answer: 2 },
    { question: "Ketika Nabi lahir, berhala di Ka'bah dikatakan...", options: ["Mengeluarkan cahaya", "Berbicara", "Terguling jatuh", "Menari"], answer: 2 },
    { question: "Siapakah pendamping Nabi Muhammad SAW yang pertama kali masuk Islam (istri)?", options: ["Aisyah", "Fatimah", "Khadijah", "Hafsah"], answer: 2 },
    { question: "Gelaran apakah yang diberikan penduduk Makkah kepada Nabi Muhammad SAW karena kejujuran beliau?", options: ["Al-Mubarak", "Al-Amin", "As-Siddiq", "Al-Faruk"], answer: 1 },
    { question: "Berapa usia Nabi Muhammad SAW ketika beliau diutus menjadi Rasul (menerima wahyu pertama)?", options: ["25 tahun", "30 tahun", "35 tahun", "40 tahun"], answer: 3 }
];

// --- VARIABEL GLOBAL ---
let currentQuestionIndex = 0;
let score = 0;
let participantName = '';
let participantAnswers = Array(quizData.length).fill(null); 
const totalQuestions = quizData.length;

// --- DOM ELEMENTS ---
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const nameForm = document.getElementById('name-form');
const initialInput = document.getElementById('initial-input');
const questionContainer = document.getElementById('question-container');
const questionCounter = document.getElementById('question-counter');
const nextButton = document.getElementById('next-button');
const submissionForm = document.getElementById('submission-form');
const exitButton = document.getElementById('exit-button');
const menuButton = document.getElementById('menu-button');
const submissionStatus = document.getElementById('submission-status');

// --- FUNGSI ---
function changeScreen(showElement) {
    const screens = [startScreen, quizScreen, resultScreen];
    screens.forEach(screen => {
        screen.classList.remove('active');
        screen.classList.add('hidden');
    });
    showElement.classList.remove('hidden');
    setTimeout(() => {
        showElement.classList.add('active');
    }, 50);
}

function loadQuestion() {
    const q = quizData[currentQuestionIndex];
    questionCounter.textContent = `Soal ${currentQuestionIndex + 1} / ${totalQuestions}`;
    nextButton.textContent = (currentQuestionIndex === totalQuestions - 1) ? "Lihat Hasil" : "Lanjut";

    let htmlContent = `<div class="question-slide">
        <p class="question-text">${q.question}</p>`;
    
    q.options.forEach((option, index) => {
        const isSelected = participantAnswers[currentQuestionIndex] === index;
        const selectedClass = isSelected ? 'selected' : '';

        htmlContent += `
            <div class="option ${selectedClass}" data-index="${index}">
                ${String.fromCharCode(65 + index)}. ${option}
            </div>
        `;
    });
    
    htmlContent += '</div>';
    
    questionContainer.style.opacity = '0';
    setTimeout(() => {
        questionContainer.innerHTML = htmlContent;
        questionContainer.style.opacity = '1';
        document.querySelectorAll('.option').forEach(opt => opt.addEventListener('click', handleOptionClick));
        nextButton.disabled = participantAnswers[currentQuestionIndex] === null;
    }, 300);
}

function handleOptionClick(event) {
    const selectedElement = event.currentTarget;
    const selectedIndex = parseInt(selectedElement.getAttribute('data-index'));
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    selectedElement.classList.add('selected');
    participantAnswers[currentQuestionIndex] = selectedIndex;
    nextButton.disabled = false;
}

function calculateResults() {
    score = 0;
    const correctQuestionNumbers = []; 

    quizData.forEach((q, i) => {
        if (participantAnswers[i] === q.answer) {
            score++;
            correctQuestionNumbers.push(i + 1);
        }
    });

    document.getElementById('result-name').textContent = participantName;
    document.getElementById('result-score').textContent = `${score} / ${totalQuestions}`;
    document.getElementById('result-correct-count').textContent = score;
    document.getElementById('result-correct-list').textContent = correctQuestionNumbers.join(', ');

    document.getElementById('form-name').value = participantName;
    document.getElementById('form-score').value = `${score}/${totalQuestions}`;
    document.getElementById('form-correct-list').value = correctQuestionNumbers.join(', ');
    submissionForm.submit();

    changeScreen(resultScreen);
    submissionStatus.textContent = '✅ Hasil Berhasil Dikirim!';
}

// --- EVENT LISTENER ---
nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    participantName = initialInput.value.trim();
    if (participantName) {
        changeScreen(quizScreen);
        loadQuestion();
    }
});

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        calculateResults();
    }
});

exitButton.addEventListener('click', () => {
    window.location.href = 'https://instagram.com/assabah07'; 
});

menuButton.addEventListener('click', () => {
    window.location.href = 'https://ppfhas-sabah.github.io/laman_quizz/';
});
