   const questionText = {};
        const answerText = {};
        const correctAnswers = {};

        subjects.forEach(subject => {
            subject.questions.forEach((question, index) => {
                const qId = `q${subjects.indexOf(subject) + 1}_${index + 1}`;
                questionText[qId] = question.text;
                answerText[qId] = {
                    a: question.options[0],
                    b: question.options[1],
                    c: question.options[2],
                    d: question.options[3]
                };
                correctAnswers[qId] = String.fromCharCode(97 + question.correctOptionIndex); // a, b, c, d
            });
        });

        function getExplanation(qId) {
            const [section, index] = qId.split("_");
            const subjectIndex = parseInt(section.replace("q", "")) - 1;
            const questionIndex = parseInt(index) - 1;
            return subjects[subjectIndex]?.questions[questionIndex]?.explainAnswer || "İzahat mövcud deyil.";
        }

        class Question {
            constructor(text, options, correctOptionIndex, explainAnswer) {
                this.text = text;
                this.options = options;
                this.correctOptionIndex = correctOptionIndex;
                this.explainAnswer = explainAnswer;
            }

            getCorrectAnswer() {
                return String.fromCharCode(97 + this.correctOptionIndex); // a, b, c, d
            }
        }

        class Subject {
            constructor(name, questions) {
                this.name = name;
                this.questions = questions.map(q => new Question(q.text, q.options, q.correctOptionIndex, q.explainAnswer));
                this.sectionId = `section${subjects.findIndex(s => s.name === this.name) + 1}`;
            }
        }

        class Quiz {
            constructor(subjects) {
                this.subjects = subjects.map(s => new Subject(s.name, s.questions));
                this.currentSectionIndex = 0;
                this.userAnswers = new Map();
                this.totalQuestions = this.subjects.reduce((sum, s) => sum + s.questions.length, 0);
            }

            getCurrentSubject() {
                return this.subjects[this.currentSectionIndex];
            }

            switchSection(index) {
                if (index >= 0 && index < this.subjects.length) {
                    this.currentSectionIndex = index;
                    return this.getCurrentSubject();
                }
                return null;
            }

            nextSection() {
                return this.switchSection(this.currentSectionIndex + 1);
            }

            prevSection() {
                return this.switchSection(this.currentSectionIndex - 1);
            }

            setAnswer(qId, answer) {
                this.userAnswers.set(qId, answer);
            }

            getAnswer(qId) {
                return this.userAnswers.get(qId);
            }

            calculateResults() {
                let totalScore = 0;
                const sectionScores = new Map();
                const sectionDetails = new Map();
                const incorrectAnswers = [];

                this.subjects.forEach(subject => {
                    const section = subject.sectionId;
                    sectionScores.set(section, 0);
                    sectionDetails.set(section, { correct: 0, incorrect: 0, unanswered: 0 });

                    subject.questions.forEach((question, index) => {
                        const qId = `${section}_${index + 1}`;
                        const userAnswer = this.getAnswer(qId);
                        if (userAnswer) {
                            if (userAnswer === question.getCorrectAnswer()) {
                                totalScore++;
                                sectionScores.set(section, sectionScores.get(section) + 1);
                                sectionDetails.get(section).correct++;
                            } else {
                                sectionDetails.get(section).incorrect++;
                                incorrectAnswers.push({
                                    question: qId,
                                    userAnswer,
                                    correctAnswer: question.getCorrectAnswer(),
                                    text: question.text,
                                    userAnswerText: question.options[question.options.findIndex(opt => opt === question.options[parseInt(userAnswer.charCodeAt(0)) - 97])],
                                    correctAnswerText: question.options[question.correctOptionIndex],
                                    explanation: question.explainAnswer
                                });
                            }
                        } else {
                            sectionDetails.get(section).unanswered++;
                        }
                    });
                });

                return { totalScore, sectionScores, sectionDetails, incorrectAnswers };
            }
        }

        class QuizUI {
            constructor(quiz) {
                this.quiz = quiz;
                this.icons = ['fa-code', 'fa-object-group', 'fa-globe', 'fa-database', 'fa-rocket'];
            }

            init() {
                this.renderHeaderStats();
                this.renderTabs();
                this.renderQuestions();
                this.renderConfirmationModal();
                this.bindEvents();
            }

            renderHeaderStats() {
                const headerStats = document.getElementById('headerStats');
                headerStats.innerHTML = `
                    <div class="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm sm:text-base">
                        <i class="fas fa-list-ol"></i>
                        <span>${this.quiz.totalQuestions} Sual</span>
                    </div>
                    <div class="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm sm:text-base">
                        <i class="fas fa-star"></i>
                        <span>${this.quiz.subjects.length} Bölmə</span>
                    </div>
                `;
            }

            renderTabs() {
                const tabBar = document.getElementById('tabBar');
                tabBar.innerHTML = '';
                this.quiz.subjects.forEach((subject, index) => {
                    const tab = document.createElement('div');
                    tab.className = `tab flex items-center gap-2 px-4 sm:px-6 py-3 cursor-pointer transition-all hover:bg-blue-50 ${index === 0 ? 'active' : ''}`;
                    tab.setAttribute('data-section', subject.sectionId);
                    tab.innerHTML = `
                        <i class="fas ${this.icons[index] || 'fa-code'}"></i>
                        <span>${subject.name}</span>
                        <span class="tab-progress bg-gray-500 text-white text-xs rounded-full px-2 py-1">0/${subject.questions.length}</span>
                    `;
                    tabBar.appendChild(tab);
                });
            }

            renderQuestions() {
                const container = document.getElementById('questionsContainer');
                container.innerHTML = '';
                this.quiz.subjects.forEach((subject, sIndex) => {
                    const sectionDiv = document.createElement('div');
                    sectionDiv.className = `section ${sIndex === 0 ? 'active animate-fade-in' : 'hidden'}`;
                    sectionDiv.id = subject.sectionId;
                    sectionDiv.innerHTML = `<h2 class="text-xl sm:text-2xl font-bold text-blue-600 mb-4 border-b-2 border-gray-200 pb-2">${subject.name}</h2>`;
                    subject.questions.forEach((question, qIndex) => {
                        const qId = `${subject.sectionId}_${qIndex + 1}`;
                        const questionDiv = document.createElement('div');
                        questionDiv.className = 'question bg-gray-50 rounded-lg p-5 mb-4 shadow-sm hover:shadow-md transition-transform hover:-translate-y-1';
                        questionDiv.innerHTML = `
                            <p class="font-medium mb-4"><strong>Sual ${qIndex + 1}:</strong> ${question.text}</p>
                            <div class="options grid grid-cols-1 sm:grid-cols-2 gap-4">
                                ${question.options.map((opt, i) => `
                                    <label class="option flex items-center p-3 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all">
                                        <input type="radio" name="${qId}" value="${String.fromCharCode(97 + i)}" class="mr-2">
                                        <span>${String.fromCharCode(97 + i)}) ${opt}</span>
                                    </label>
                                `).join('')}
                            </div>
                        `;
                        sectionDiv.appendChild(questionDiv);
                    });
                    container.appendChild(sectionDiv);
                });
            }

            renderConfirmationModal() {
                // Remove existing modal if it exists
                const existingModal = document.getElementById('confirmationModal');
                if (existingModal) {
                    existingModal.remove();
                }

                // Create confirmation modal dynamically
                const modalDiv = document.createElement('div');
                modalDiv.id = 'confirmationModal';
                modalDiv.className = 'modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center hidden';
                modalDiv.innerHTML = `
                    <div class="modal-content bg-white p-6 sm:p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
                        <h3 class="text-xl sm:text-2xl font-bold text-blue-600 mb-4">Testi Təsdiqlə</h3>
                        <p class="mb-4 text-sm sm:text-base">Testi təsdiqləmək istədiyinizə əminsiniz?</p>
                        <div class="modal-stats flex justify-around mb-6">
                            <div class="stat">
                                <span class="stat-number text-3xl font-bold text-green-500" id="answeredCount">0</span>
                                <span>Cavablandırılmış</span>
                            </div>
                            <div class="stat">
                                <span class="stat-number text-3xl font-bold text-red-500" id="unansweredCount">0</span>
                                <span>Cavablandırılmamış</span>
                            </div>
                        </div>
                        <div class="modal-buttons flex justify-center gap-4">
                            <button id="confirmSubmit" class="btn flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                                <i class="fas fa-check"></i> Təsdiqlə
                            </button>
                            <button id="cancelSubmit" class="btn flex items-center gap-2 px-4 py-2 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                                <i class="fas fa-times"></i> Ləğv et
                            </button>
                        </div>
                        <div id="submitLoader" class="mt-4 hidden">
                            <i class="fas fa-spinner fa-spin"></i> Yüklənir...
                        </div>
                    </div>
                `;
                document.querySelector('.container').appendChild(modalDiv);

                // Bind modal button events
                document.getElementById('confirmSubmit').addEventListener('click', () => {
                    document.getElementById('submitLoader').classList.remove('hidden');
                    setTimeout(() => {
                        this.showResults(this.quiz.calculateResults());
                        document.getElementById('submitLoader').classList.add('hidden');
                        this.hideConfirmationModal();
                    }, 1000);
                });

                document.getElementById('cancelSubmit').addEventListener('click', () => {
                    this.hideConfirmationModal();
                });
            }

            updateProgress() {
                this.quiz.subjects.forEach((subject, index) => {
                    const answered = subject.questions.filter((_, i) => this.quiz.getAnswer(`${subject.sectionId}_${i + 1}`)).length;
                    const tabProgress = document.querySelectorAll('.tab-progress')[index];
                    tabProgress.textContent = `${answered}/${subject.questions.length}`;
                    tabProgress.classList.toggle('bg-green-500', answered === subject.questions.length);
                    tabProgress.classList.toggle('bg-gray-500', answered !== subject.questions.length);
                });
            }

            switchSection(sectionId) {
                document.querySelectorAll('.tab').forEach(tab => {
                    tab.classList.toggle('active', tab.getAttribute('data-section') === sectionId);
                });
                document.querySelectorAll('.section').forEach(section => {
                    section.classList.toggle('hidden', section.id !== sectionId);
                    section.classList.toggle('active', section.id === sectionId);
                    section.classList.toggle('animate-fade-in', section.id === sectionId);
                });
                window.scrollTo({ top: document.getElementById('questionsContainer').offsetTop, behavior: 'smooth' });
            }

            showConfirmationModal(answered, unanswered) {
                this.renderConfirmationModal();
                document.getElementById('answeredCount').textContent = answered;
                document.getElementById('unansweredCount').textContent = unanswered;
                document.getElementById('confirmationModal').classList.remove('hidden');
            }

            hideConfirmationModal() {
                const modal = document.getElementById('confirmationModal');
                if (modal) {
                    modal.classList.add('hidden');
                }
            }

            showResults({ totalScore, sectionScores, sectionDetails, incorrectAnswers }) {
                // Remove existing result section if it exists
                const existingResult = document.getElementById('result');
                if (existingResult) {
                    existingResult.remove();
                }

                // Create result section dynamically
                const resultDiv = document.createElement('div');
                resultDiv.id = 'result';
                resultDiv.className = 'result-container p-6 sm:p-8 hidden';
                resultDiv.innerHTML = `
                    <div class="result-header text-center mb-8">
                        <h2 class="text-2xl sm:text-3xl font-bold text-blue-600">Test Nəticələri</h2>
                        <p class="text-gray-600 text-sm sm:text-base" id="resultSummary"></p>
                    </div>
                    <div class="overall-score flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">
                        <div class="progress-circle relative w-40 h-40">
                            <svg class="w-full h-full transform -rotate-90">
                                <circle class="circle-bg" cx="80" cy="80" r="70"></circle>
                                <circle class="circle-fg" cx="80" cy="80" r="70" id="progressCircle"></circle>
                            </svg>
                            <span class="percentage absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-blue-600" id="percentage">0%</span>
                        </div>
                        <div class="score-details text-center">
                            <h3 class="text-xl sm:text-2xl font-bold text-blue-600 mb-2">Ümumi Bal</h3>
                            <p class="text-lg sm:text-xl font-semibold" id="totalScore">0/0</p>
                            <p id="levelMessage" class="mt-4 p-4 rounded-lg text-lg font-medium"></p>
                            <div class="level-progress mt-4">
                                <div class="progress-bar w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                    <div class="progress-bar-fill h-full bg-blue-600 rounded-full transition-all" id="levelProgress" style="width: 0%;"></div>
                                </div>
                                <p class="text-sm text-gray-600 mt-2" id="nextLevelText"></p>
                            </div>
                        </div>
                    </div>
                    <div class="section-scores grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" id="sectionScores"></div>
                    <div id="incorrectAnswers" class="incorrect-container bg-white rounded-lg p-6 sm:p-8 shadow-md mb-6"></div>
                    <div class="result-actions text-center flex justify-center gap-4">
                        <button id="resetBtn" class="btn flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                            <i class="fas fa-redo"></i> Testi Sıfırla
                        </button>
                    </div>
                `;
                document.querySelector('.container').appendChild(resultDiv);

                // Show the result section
                document.getElementById('testForm').classList.add('hidden');
                document.getElementById('header').classList.add('hidden');
                document.getElementById('tabBar').classList.add('hidden');
                document.getElementById('result').classList.remove('hidden');

                // Populate result content
                document.getElementById('resultSummary').textContent = `${this.quiz.totalQuestions} sual üzrə performans nəticələriniz`;
                document.getElementById('totalScore').textContent = `${totalScore}/${this.quiz.totalQuestions}`;
                const percentage = ((totalScore / this.quiz.totalQuestions) * 100).toFixed(2);
                document.getElementById('percentage').textContent = `${percentage}%`;

                const circumference = 2 * Math.PI * 70;
                const offset = circumference - (percentage / 100 * circumference);
                const progressCircle = document.getElementById('progressCircle');
                progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
                progressCircle.style.strokeDashoffset = offset;

                let levelMessage, levelColor, nextLevelThreshold;
                if (percentage >= 90) {
                    levelMessage = 'Əla! Siz C# üzrə Ekspert səviyyəsindəsiniz.';
                    levelColor = 'green-500';
                    nextLevelThreshold = 100;
                } else if (percentage >= 70) {
                    levelMessage = 'Yaxşı! Siz C# üzrə Qabaqcıl səviyyədəsiniz.';
                    levelColor = 'blue-500';
                    nextLevelThreshold = 90;
                } else if (percentage >= 50) {
                    levelMessage = 'Orta! Siz C# üzrə Orta səviyyədəsiniz.';
                    levelColor = 'yellow-500';
                    nextLevelThreshold = 70;
                } else {
                    levelMessage = 'Zəif! Siz C# üzrə Başlanğıc səviyyəsindəsiniz.';
                    levelColor = 'red-500';
                    nextLevelThreshold = 50;
                }

                const levelMessageElement = document.getElementById('levelMessage');
                levelMessageElement.textContent = levelMessage;
                levelMessageElement.className = `mt-4 p-4 rounded-lg text-lg font-medium text-${levelColor} bg-${levelColor}/20`;
                document.getElementById('levelProgress').style.width = `${(percentage / nextLevelThreshold) * 100}%`;
                document.getElementById('nextLevelText').textContent = `Növbəti səviyyəyə ${((nextLevelThreshold - percentage) * (this.quiz.totalQuestions / 100)).toFixed(0)} sual qalıb`;

                const sectionScoresContainer = document.getElementById('sectionScores');
                sectionScoresContainer.innerHTML = '';
                this.quiz.subjects.forEach((subject, index) => {
                    const scoreCard = document.createElement('div');
                    scoreCard.className = 'section-score-card bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1';
                    scoreCard.innerHTML = `
                        <h4 class="text-lg sm:text-xl font-bold text-blue-600 flex items-center justify-between mb-4">
                            <span><i class="fas ${this.icons[index] || 'fa-code'} mr-2"></i>${subject.name}</span>
                        </h4>
                        <p class="text-lg sm:text-xl font-semibold">${sectionScores.get(subject.sectionId)}/${subject.questions.length}</p>
                        <p class="text-sm text-gray-600">Düzgün: ${sectionDetails.get(subject.sectionId).correct}, Səhv: ${sectionDetails.get(subject.sectionId).incorrect}, Cavabsız: ${sectionDetails.get(subject.sectionId).unanswered}</p>
                        <div class="section-progress mt-4">
                            <div class="progress-bar w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                <div class="progress-bar-fill h-full bg-blue-600 rounded-full transition-all" style="width: ${(sectionScores.get(subject.sectionId) / subject.questions.length) * 100}%"></div>
                            </div>
                        </div>
                    `;
                    sectionScoresContainer.appendChild(scoreCard);
                });

                const incorrectContainer = document.getElementById('incorrectAnswers');
                incorrectContainer.innerHTML = incorrectAnswers.length
                    ? '<h4 class="text-lg sm:text-xl font-bold text-blue-600 mb-4 border-b-2 border-gray-200 pb-2">Səhv Cavablar:</h4>'
                    : '<p class="text-gray-600">Bütün suallara düzgün cavab vermisiniz!</p>';
                incorrectAnswers.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'incorrect-item bg-gray-50 rounded-lg p-5 mb-4 shadow-sm';
                    div.innerHTML = `
                        <p class="mb-2"><strong>Sual:</strong> ${item.text}</p>
                        <p class="mb-2"><strong>Sizin cavabınız:</strong> <span class="text-red-500 font-medium">${item.userAnswerText}</span></p>
                        <p class="mb-2"><strong>Düzgün cavab:</strong> <span class="text-green-500 font-medium">${item.correctAnswerText}</span></p>
                        <p><strong>İzahat:</strong> <span class="italic text-gray-500">${item.explanation}</span></p>
                    `;
                    incorrectContainer.appendChild(div);
                });

                window.scrollTo({ top: 0, behavior: 'smooth' });

                // Bind result button events
                document.getElementById('resetBtn').addEventListener('click', () => {
                    this.reset();
                });
            }

            reset() {
                document.getElementById('testForm').reset();
                const resultDiv = document.getElementById('result');
                if (resultDiv) {
                    resultDiv.remove();
                }
                const modalDiv = document.getElementById('confirmationModal');
                if (modalDiv) {
                    modalDiv.remove();
                }
                document.getElementById('testForm').classList.remove('hidden');
                document.getElementById('header').classList.remove('hidden');
                document.getElementById('tabBar').classList.remove('hidden');
                this.quiz.userAnswers.clear();
                this.quiz.currentSectionIndex = 0;
                this.switchSection(this.quiz.subjects[0].sectionId);
                this.updateProgress();
                document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            }

            bindEvents() {
                document.querySelectorAll('.tab').forEach(tab => {
                    tab.addEventListener('click', () => {
                        const sectionId = tab.getAttribute('data-section');
                        this.quiz.currentSectionIndex = this.quiz.subjects.findIndex(s => s.sectionId === sectionId);
                        this.switchSection(sectionId);
                    });
                });

                document.querySelectorAll('.option input[type="radio"]').forEach(radio => {
                    radio.addEventListener('change', () => {
                        this.quiz.setAnswer(radio.name, radio.value);
                        this.updateProgress();
                        const option = radio.closest('.option');
                        option.classList.add('selected');
                        option.parentElement.querySelectorAll('.option').forEach(opt => {
                            if (opt !== option) opt.classList.remove('selected');
                        });
                    });
                });

                document.getElementById('prevBtn').addEventListener('click', () => {
                    const subject = this.quiz.prevSection();
                    if (subject) this.switchSection(subject.sectionId);
                });

                document.getElementById('nextBtn').addEventListener('click', () => {
                    const subject = this.quiz.nextSection();
                    if (subject) this.switchSection(subject.sectionId);
                });

                document.getElementById('testForm').addEventListener('submit', e => {
                    e.preventDefault();
                    const answered = this.quiz.userAnswers.size;
                    const unanswered = this.quiz.totalQuestions - answered;
                    this.showConfirmationModal(answered, unanswered);
                });
            }
        }

        const quiz = new Quiz(subjects);
        const quizUI = new QuizUI(quiz);

        window.onload = () => {
            quizUI.init();
        };