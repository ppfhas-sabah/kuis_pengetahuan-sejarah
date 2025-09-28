// --- 1. DATA SOAL (20 SOAL TENTANG MAULID NABI) ---
const quizData = [
    {
        question: "Siapakah nama Ibunda Nabi Muhammad SAW?",
        options: ["Fatimah", "Aminah", "Khadijah", "Aisyah"],
        answer: 1 // Aminah
    },
    {
        question: "Nabi Muhammad SAW dilahirkan di kota...",
        options: ["Madinah", "Makkah", "Yaman", "Thaif"],
        answer: 1 // Makkah
    },
    {
        question: "Tahun kelahiran Nabi dikenal sebagai Tahun...",
        options: ["Gajah", "Unta", "Nabi", "Cahaya"],
        answer: 0 // Gajah
    },
    {
        question: "Siapakah nama kakek Nabi yang merawat beliau setelah sang kakek?",
        options: ["Abu Thalib", "Abdullah", "Abu Bakar", "Hamzah"],
        answer: 0 // Abu Thalib
    },
    {
        question: "Berapakah usia Nabi Muhammad SAW saat Ibundanya, Aminah, wafat?",
        options: ["2 tahun", "4 tahun", "6 tahun", "8 tahun"],
        answer: 2 // 6 tahun
    },
    {
        question: "Siapakah nama paman Nabi yang dikenal sangat menyayangi beliau sejak kecil?",
        options: ["Hamzah", "Abu Thalib", "Abbas", "Abu Lahab"],
        answer: 1 // Abu Thalib
    },
    {
        question: "Suku (Kabilah) manakah Nabi Muhammad SAW berasal?",
        options: ["Bani Israil", "Bani Tamim", "Bani Hasyim", "Bani Saud"],
        answer: 2 // Bani Hasyim
    },
    {
        question: "Siapakah nama wanita yang menjadi ibu susuan pertama Nabi Muhammad SAW?",
        options: ["Halimah As-Sa'diyah", "Tsuwaibah Al-Aslamiyah", "Khadijah binti Khuwailid", "Ummu Aiman"],
        answer: 1 // Tsuwaibah Al-Aslamiyah
    },
    {
        question: "Peristiwa besar apa yang terjadi pada Tahun Gajah?",
        options: ["Kelahiran Nabi Isa AS", "Penyerangan Ka'bah oleh Raja Abrahah", "Pembangunan kembali Ka'bah", "Perang Badar"],
        answer: 1 // Penyerangan Ka'bah oleh Raja Abrahah
    },
    {
        question: "Tanggal berapakah Nabi Muhammad SAW lahir dalam kalender Hijriah?",
        options: ["1 Ramadhan", "17 Ramadhan", "12 Rabiul Awal", "10 Dzulhijjah"],
        answer: 2 // 12 Rabiul Awal
    },
    {
        question: "Nabi Muhammad SAW dilahirkan pada hari...",
        options: ["Jumat", "Sabtu", "Senin", "Rabu"],
        answer: 2 // Senin
    },
    {
        question: "Siapakah nama Kakek Nabi yang memberikan nama 'Muhammad'?",
        options: ["Abdullah", "Abu Thalib", "Abdul Muththalib", "Hamzah"],
        answer: 2 // Abdul Muththalib
    },
    {
        question: "Apa nama kota tempat Nabi Muhammad SAW wafat?",
        options: ["Makkah", "Yatsrib (Madinah)", "Thaif", "Yerusalem"],
        answer: 1 // Yatsrib (Madinah)
    },
    {
        question: "Saat kecil, Nabi Muhammad SAW diasuh oleh Halimah As-Sa'diyah di desa...",
        options: ["Quba'", "Bani Sa'ad", "Badar", "Uhud"],
        answer: 1 // Bani Sa'ad
    },
    {
        question: "Apa pekerjaan Nabi Muhammad SAW sebelum menerima wahyu (kenabian)?",
        options: ["Pedagang", "Nelayan", "Petukang", "Guru"],
        answer: 0 // Pedagang
    },
    {
        question: "Peristiwa 'Pembelahan Dada' Nabi Muhammad SAW terjadi saat beliau diasuh oleh...",
        options: ["Abdul Muththalib", "Abu Thalib", "Halimah As-Sa'diyah", "Ibundanya"],
        answer: 2 // Halimah As-Sa'diyah
    },
    {
        question: "Ketika Nabi lahir, berhala di Ka'bah dikatakan...",
        options: ["Mengeluarkan cahaya", "Berbicara", "Terguling jatuh", "Menari"],
        answer: 2 // Terguling jatuh
    },
    {
        question: "Siapakah pendamping Nabi Muhammad SAW yang pertama kali masuk Islam (istri)?",
        options: ["Aisyah", "Fatimah", "Khadijah", "Hafsah"],
        answer: 2 // Khadijah
    },
    {
        question: "Gelaran apakah yang diberikan penduduk Makkah kepada Nabi Muhammad SAW karena kejujuran beliau?",
        options: ["Al-Mubarak", "Al-Amin", "As-Siddiq", "Al-Faruk"],
        answer: 1 // Al-Amin
    },
    {
        question: "Berapa usia Nabi Muhammad SAW ketika beliau diutus menjadi Rasul (menerima wahyu pertama)?",
        options: ["25 tahun", "30 tahun", "35 tahun", "40 tahun"],
        answer: 3 // 40 tahun
    }
];

// --- 2. VARIABEL GLOBAL ---
let currentQuestionIndex = 0;
let score = 0;
let participantName = '';
let participantAnswers = Array(quizData.length).fill(null); 
const totalQuestions = quizData.length;

// --- 3. DOM ELEMENT SELECTION ---
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
const submissionStatus = document.getElementById('submission-status');

// --- 4. FUNGSI UTAMA ---

/**
 * Pindah Tampilan antar 'screen'
 */
function changeScreen(showElement) {
    const screens = [startScreen, quizScreen, resultScreen];
    screens.forEach(screen => {
        screen.classList.remove('active');
        screen.classList.add('hidden');
    });
    showElement.classList.remove('hidden');
    setTimeout(() => {
        showElement.classList.add('active');
    }, 10);
}

/**
 * Memuat dan menampilkan soal saat ini
 */
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
        document.querySelectorAll('.option').forEach(optionElement => {
            optionElement.addEventListener('click', handleOptionClick);
        });
        
        const selectedIndex = participantAnswers[currentQuestionIndex];
        nextButton.disabled = selectedIndex === null;
        
    }, 300);
}

/**
 * Handle ketika pilihan jawaban di-klik
 */
function handleOptionClick(event) {
    const selectedElement = event.currentTarget;
    const selectedIndex = parseInt(selectedElement.getAttribute('data-index'));

    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });

    selectedElement.classList.add('selected');
    participantAnswers[currentQuestionIndex] = selectedIndex;
    nextButton.disabled = false;
}

/**
 * Hitung skor akhir, tampilkan, dan OTOMATIS KIRIM DATA
 */
function calculateResults() {
    score = 0;
    const correctQuestionNumbers = []; 

    quizData.forEach((q, index) => {
        const participantAnswer = participantAnswers[index];
        if (participantAnswer === q.answer) {
            score++;
            correctQuestionNumbers.push(index + 1);
        }
    });

    // Tampilkan di Result Screen
    document.getElementById('result-name').textContent = participantName;
    document.getElementById('result-score').textContent = `${score} / ${totalQuestions}`;
    document.getElementById('result-correct-count').textContent = score;
    document.getElementById('result-correct-list').textContent = correctQuestionNumbers.join(', ');

    // --- LOGIKA PENGIRIMAN OTOMATIS ---
    // 1. Isi Form Tersembunyi
    document.getElementById('form-name').value = participantName;
    document.getElementById('form-score').value = `${score}/${totalQuestions}`;
    document.getElementById('form-correct-list').value = correctQuestionNumbers.join(', ');
    
    // 2. Picu pengiriman form ke Formspree (Otomatis!)
    submissionForm.submit();
    
    // 3. Pindah ke result screen
    changeScreen(resultScreen);
    
    // 4. Update status pesan pengiriman
    submissionStatus.textContent = '✅ Hasil Berhasil Dikirim!';
    
    // 5. Pastikan tombol keluar aktif dan terlihat
    exitButton.style.display = 'block';
}


// --- 5. EVENT LISTENERS ---

// 1. Handle Submit Nama/Inisial
nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    participantName = initialInput.value.trim();
    if (participantName) {
        changeScreen(quizScreen);
        loadQuestion();
    }
});

// 2. Handle Tombol Lanjut / Lihat Hasil
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        // Soal terakhir: hitung dan kirim hasil
        calculateResults();
    }
});

// 3. Handle Tombol Keluar
exitButton.addEventListener('click', () => {
    // URL Instagram yang lebih sederhana
    window.location.href = 'https://instagram.com/assabah07'; 
});


// --- 6. INISIALISASI ---
changeScreen(startScreen);