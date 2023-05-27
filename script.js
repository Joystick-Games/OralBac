document.addEventListener("DOMContentLoaded", function() {
    var lectures = {
        "1. Les Liaisons Dangereuses Lettre 81 - M1": "une femme qui créée ses propres règles en dehors de toute morale sociale et s’attache à respecter cette discipline personnelle.",
        "1. Les Liaisons Dangereuses Lettre 81 - M2": "la naissance d’une actrice sociale",
        "2. Albert CAMUS, L’Etranger, 1942, épilogue - M1": "la révolte de Meursault",
        "2. Albert CAMUS, L’Etranger, 1942, épilogue - M2": "le regard de Meursault sur sa vie",
        "2. Albert CAMUS, L’Etranger, 1942, épilogue - M3": "le regard de Meursault sur la vie",
        "3. PREVOST, Manon Lescaut, 1731, La Rencontre avec Manon - M1": "les circonstances de la rencontre",
        "3. PREVOST, Manon Lescaut, 1731, La Rencontre avec Manon - M2": "la fascination de Des Grieux",
        "3. PREVOST, Manon Lescaut, 1731, La Rencontre avec Manon - M3": "les premières paroles échangées",
        "4. PREVOST, Manon Lescaut, 1731, La Dispute avec Tiberge - M1": "la définition du bonheur et de la vertu",
        "4. PREVOST, Manon Lescaut, 1731, La Dispute avec Tiberge - M2": "la manière dont il affirme son droit à l’amour avec Manon",
        "5. PREVOST, Manon Lescaut, 1731, La Mort de Manon - M1": "le silence et le renoncement de Des Grieux",
        "5. PREVOST, Manon Lescaut, 1731, La Mort de Manon - M2": "de la prostration à l’action",
        "5. PREVOST, Manon Lescaut, 1731, La Mort de Manon - M3": "la dimension rituelle et religieuse",
        "6. Déclaration des droits de la femme et de la citoyenne - M1": "Une adresse aux hommes combattive et polémique",
        "6. Déclaration des droits de la femme et de la citoyenne - M2": "La remise en cause des pouvoirs et de la supériorité des hommes",
        "6. Déclaration des droits de la femme et de la citoyenne - M3": "Le préambule : un préambule qui sert à présenter et justifier la Déclaration qui va suivre",
        "7. Olympe DE GOUGES, Postambule, La Déclaration des droits de la femme et de la citoyenne - M1": "Une vigoureuse incitation à l’action dont la femme doit être l’actrice",
        "7. Olympe DE GOUGES, Postambule, La Déclaration des droits de la femme et de la citoyenne - M2": "Les marques de l’émotion prennent place",
        "8. Olympe DE GOUGES, Escalvage, La Déclaration des droits de la femme et de la citoyenne - M1": "Introduction au thème de l'esclavage",
        "8. Olympe DE GOUGES, Escalvage, La Déclaration des droits de la femme et de la citoyenne - M2": "Un tableau de l'Amérique qui traduit les horreurs commises",
        "8. Olympe DE GOUGES, Escalvage, La Déclaration des droits de la femme et de la citoyenne - M3": "Les nouvelles propositions de répartition des pouvoirs d’ODG",
        "9. Montesquieu, De L’esprit des lois, 1748, Livre XV, chapitre 5 - M1": "Montesquieu brosse un portrait cruel des mœurs occidentales",
        "9. Montesquieu, De L’esprit des lois, 1748, Livre XV, chapitre 5 - M2": "Montesquieu souligne que le débat ne se situe pas sur le plan de la raison",
        "9. Montesquieu, De L’esprit des lois, 1748, Livre XV, chapitre 5 - M3": "Montesquieu questionne la mentalité de son époque",
        "10. Beaumarchais, Le Mariage de Figaro, 1785 - M1": "Colère et attaque de Figaro envers le Comte",
        "10. Beaumarchais, Le Mariage de Figaro, 1785 - M2": "Portrait et parcours de vie de Figaro",
        "10. Beaumarchais, Le Mariage de Figaro, 1785 - M3": "L’appel à la liberté d’expression",
        "11. Racine, Phèdre, acte I scène 3, 1677 - M1": "Tout se déclenche par un regard",
        "11. Racine, Phèdre, acte I scène 3, 1677 - M2": "En appeler aux dieux, bâtir des temples pour conjurer le mal",
        "11. Racine, Phèdre, acte I scène 3, 1677 - M3": "Un combat contre soi-même",
        "12. Incendies, Wajdi Mouawad - M1": "Lettre à Simon, une invitation à la guérison",
        "12. Incendies, Wajdi Mouawad - M2": "Lettre à Jeanne, se libérer du joug familial",
        "12. Incendies, Wajdi Mouawad - M3": "Nawal pousse ses enfants vers une acceptation et une réconciliation",
        "13. Juste la Fin du Monde, Jean Luc Lagarce, Prologue - M1": "L’attente de la mort",
        "13. Juste la Fin du Monde, Jean Luc Lagarce, Prologue - M2": "La décision de l’annoncer à sa famille",
        "13. Juste la Fin du Monde, Jean Luc Lagarce, Prologue - M3": "Une manière de défier le destin",
        "14. Juste la Fin du Monde, Jean Luc Lagarce, Le souvenir des dimanches - M1": "Un récit morcelé : la difficulté à dire",
        "14. Juste la Fin du Monde, Jean Luc Lagarce, Le souvenir des dimanches - M2": "La violence des rapports familiaux",
        "14. Juste la Fin du Monde, Jean Luc Lagarce, Le souvenir des dimanches - M3": "Derrière le souvenir des dimanches, le récit de la rencontre amoureuse des parents",
        "15. Juste la Fin du Monde, Jean Luc Lagarce, Monologue d’Antoine - M1": "L’enfance, entre compassion et culpabilité",
        "15. Juste la Fin du Monde, Jean Luc Lagarce, Monologue d’Antoine - M2": "Un secret étouffant : ne pas dire, dire insuffisamment, l’amour",
        "15. Juste la Fin du Monde, Jean Luc Lagarce, Monologue d’Antoine - M3": "Vivre une injustice : Se faire modeste pour laisser place à un faux-malade",
        "16. Baudelaire, une Charogne - M1": "L’exposition, l’ouverture sur le cadavre",
        "16. Baudelaire, une Charogne - M2": "Le processus de transformation",
        "16. Baudelaire, une Charogne - M3": "Le poète voyant",
        "17. Baudelaire, Le Poison - M1": "Le vin et son pouvoir de transformation",
        "17. Baudelaire, Le Poison - M2": "L’opium et la dilatation de l’espace et du temps",
        "17. Baudelaire, Le Poison - M3": "La femme, entre Eros et Thanatos"
    };

    var lectureSelect = document.getElementById("lecture-select");
    var movementInput = document.getElementById("movement-input");
    var submitButton = document.getElementById("submit-button");
    var resultContainer = document.getElementById("result-container");

    var currentLectureIndex;

    submitButton.addEventListener("click", function() {
        var selectedLecture = lectureSelect.value;
        var userMovement = movementInput.value.trim().toLowerCase();
        var correctMovement = lectures[selectedLecture].toLowerCase();

        if (userMovement === correctMovement) {
            resultContainer.innerHTML = "<span class='result-animation'>Bonne réponse !</span>";
        } else {
            var similarity = calculateSimilarity(userMovement, correctMovement);
            if (similarity >= 0.8) {
                resultContainer.innerHTML = "<span class='result-animation'>Bonne réponse !</span>";
            } else {
                resultContainer.textContent = "Mauvaise réponse ! La réponse correcte était : " + correctMovement;
            }
        }

        // Générer une nouvelle question
        generateQuestion();
    });

    movementInput.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            submitButton.click();
        }
    });

    function generateQuestion() {
        var lectureKeys = Object.keys(lectures);
        var selectedLecture = lectureSelect.value;

        currentLectureIndex = lectureKeys.indexOf(selectedLecture);

        lectureSelect.innerHTML = "";
        for (var i = 0; i < lectureKeys.length; i++) {
            var option = document.createElement("option");
            option.value = lectureKeys[i];
            option.text = lectureKeys[i];
            lectureSelect.appendChild(option);
        }

        movementInput.value = "";

        currentLectureIndex++;
        if (currentLectureIndex >= lectureKeys.length) {
            currentLectureIndex = 0;
        }

        lectureSelect.value = lectureKeys[currentLectureIndex];
    }

    function calculateSimilarity(a, b) {
        var maxLength = Math.max(a.length, b.length);
        var distance = levenshteinDistance(a, b);
        var similarity = 1 - distance / maxLength;
        return similarity;
    }

    function levenshteinDistance(a, b) {
        var matrix = [];
        var aLength = a.length;
        var bLength = b.length;

        if (aLength === 0) return bLength;
        if (bLength === 0) return aLength;

        for (var i = 0; i <= aLength; i++) {
            matrix[i] = [i];
        }

        for (var j = 0; j <= bLength; j++) {
            matrix[0][j] = j;
        }

        for (var i = 1; i <= aLength; i++) {
            for (var j = 1; j <= bLength; j++) {
                var cost = a[i - 1] === b[j - 1] ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1, // Suppression
                    matrix[i][j - 1] + 1, // Insertion
                    matrix[i - 1][j - 1] + cost // Substitution
                );
            }
        }

        return matrix[aLength][bLength];
    }

    // Générer une question au chargement de la page
    generateQuestion();
});
