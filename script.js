// Fonction pour effacer les sélections
function clearSelections() {
    const form = document.getElementById('qcm-form');
    const radioButtons = form.querySelectorAll('input[type="radio"]');
    
    radioButtons.forEach(function (radio) {
        radio.checked = false;
    });
}

// Fonction pour afficher le corrigé
function showCorrection() {
    window.open('correction.html', '_blank');
}

// Fonction pour vérifier les réponses et afficher le score
function checkAnswers() {
    const form = document.getElementById('qcm-form');
    const radioButtons = form.querySelectorAll('input[type="radio"]');
    let correctAnswers = 0;
    
    // Réponses correctes pour chaque question
    const correctResponses = ['c', 'a', 'b']; // Ajoutez les réponses correctes ici
    
    for (let i = 0; i < radioButtons.length; i++) {
        const radio = radioButtons[i];
        const questionNumber = i + 1;
        const userResponse = radio.checked ? radio.value : '';
        const correctResponse = correctResponses[i];
        const questionElement = radio.closest('.question');
        
        if (userResponse === correctResponse) {
            questionElement.classList.remove('incorrect-answer');
            questionElement.classList.add('correct-answer');
            correctAnswers++;
        } else {
            questionElement.classList.remove('correct-answer');
            questionElement.classList.add('incorrect-answer');
        }
    }
    
    alert(`Vous avez ${correctAnswers} réponses correctes sur ${correctResponses.length}.`);
}

function clearSelections() {
    const form = document.getElementById('qcm-form');
    const radioButtons = form.querySelectorAll('input[type="radio"]');

    radioButtons.forEach(function (radio) {
        radio.checked = false;
    });
}

function validateQCM() {
    const form = document.getElementById('qcm-form');
    const radioButtons = form.querySelectorAll('input[type="radio"]');
    let allAnswered = true;

    // Vérifie si toutes les questions ont été répondues
    radioButtons.forEach(function (radio) {
        if (!radio.checked) {
            allAnswered = false;
        }
    });

    if (allAnswered) {
        // Toutes les questions ont été répondues, vous pouvez maintenant traiter les réponses
        checkAnswers();
    } else {
        alert("Veuillez répondre à toutes les questions avant de valider.");
    }
}

// Fonction pour générer les résultats
function generateResults(userAnswers, correctAnswers) {
    let score = 0;
    let resultsHTML = "<h2>Résultats :</h2>";

    for (let i = 0; i < userAnswers.length; i++) {
        const userAnswer = userAnswers[i];
        const correctAnswer = correctAnswers[i];

        resultsHTML += `<p><strong>Question ${i + 1} :</strong><br>`;
        resultsHTML += `Votre réponse : ${userAnswer}<br>`;
        resultsHTML += `Réponse correcte : ${correctAnswer}</p>`;

        if (userAnswer === correctAnswer.charAt(0)) {
            score++;
        }
    }

    resultsHTML += `<p><strong>Votre Score :</strong> ${score} / ${userAnswers.length}</p>`;
    document.getElementById('resultats').innerHTML = resultsHTML;
}

// Exemple d'utilisation de la fonction generateResults :
const userAnswers = ["a", "c", "b", "a", "b", "c", "a", "b", "c", "a"]; // Remplacez par les réponses de l'utilisateur
const correctAnswers = ["a) 5", "c) 3.05 mètres", "b) 12 minutes", "a) LeBron James", "b) NCAA", "c) Los Angeles Lakers", "a) Yao Ming", "c) 12 minutes", "c) États-Unis", "a) Giannis Antetokounmpo"];

generateResults(userAnswers, correctAnswers);


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('qcm-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Empêche la soumission du formulaire

        // Parcourez toutes les questions et vérifiez les réponses
        const questions = form.querySelectorAll('.question');

        questions.forEach(function (question, index) {
            const radios = question.querySelectorAll('input[type="radio"]');
            const correctAnswer = question.querySelector('.correct-answer');
            const userAnswer = Array.from(radios).find(radio => radio.checked);

            if (userAnswer) {
                if (userAnswer.value === correctAnswer.textContent.trim()) {
                    question.classList.add('correct');
                } else {
                    question.classList.add('incorrect');
                }
            }
        });
    });
});


 showCorrectButton.addEventListener('click', function () {
        window.open('corrigé.html', '_blank');
    });