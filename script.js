document.getElementById('copyEmailButton').addEventListener('click', function(event) {
    event.preventDefault();
    const emailText = document.getElementById('emailAddress').innerText;
    const textarea = document.createElement('textarea');
    textarea.value = emailText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Adresse e-mail copiée : ' + emailText);
});

function addClickListener(elementId, url) {
    var element = document.getElementById(elementId);
    if (element) {
        element.addEventListener('click', function(e) {
            if (e.ctrlKey) {
                return;
            } else {
                var newTab = window.open('about:blank', '_blank');
                newTab.document.write('<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body><iframe frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0%;left:0px;right:0px;bottom:0px" height="100%" width="100%" src="' + url + '"></iframe></body></html>');
            }
        });
    }
}

if (/Mobi|Android|iPad|iPhone/i.test(navigator.userAgent)) {
    document.getElementById('2.securityboot').addEventListener('click', function() {
        window.location.href = 'https://thunderos.glitch.me/app';
    });
} else {
    addClickListener('2.securityboot', 'https://t0s.pages.dev/locker/index.html?hash=U2FsdGVkX190JI5N6nwLCu6NtGr4wsXYzw40Zh52Cqs1L2a3S4hmrozNfScJNHqAvxo7p1L2u3SkbhJe9alAfwBbp6p1L2u3S9K3bHlA6ge1Q2u3A4le1Q2u3A4l');
}

addClickListener('1.securityboot', 'https://t0s.pages.dev/locker/index.html?hash=U2FsdGVkX1p1L2u3SMCT72RGDR12GAinII5fJe5ZWHa8jwumBsu8BcjAhqym6zzaw18QdO');
addClickListener('3.securityboot', 'https://raw.githack.com/Shadowolfofficial/Tos/main/peb.html');
addClickListener('4.securityboot', 'https://t0s.pages.dev/locker/index.html?hash=U2FsdGVkX1p1L2u3SL6Xtjb6JifeNJkcGZJw9R1QvSOs1L2a3S4hmwrARJzXX11zKoHsV9mWffb1qM');

// Page 404

const errorTitles = [
    "On a cherché, mais rien. Nada",
    "Cette page a pris une pause café",
    "La page est partie promener le chien",
    "La page est coincée dans un embouteillage internet",
    "Cette page a été kidnappée par des extraterrestres",
    "Cette page s’est cachée pour jouer à cache-cache",
    "Même Google ne sait pas où elle est",
    "Cette page a pris la fuite",
    "Elle est tombée dans un trou noir",
    "Cette page est devenue un ninja"
];

// Suggestions éducatives
const suggestions = [
    "Apprendre les bases de l'algèbre",
    "Comment écrire une rédaction en français",
    "Les 100 mots les plus utilisés en anglais",
    "Découvrir la Révolution française",
    "Résoudre des problèmes géométriques",
    "Conjuguer les verbes au subjonctif",
    "Apprendre à prononcer les sons en anglais",
    "Comprendre la Seconde Guerre mondiale",
    "Réviser les fractions et les pourcentages",
    "Explorer la mythologie grecque",
    "Maîtriser les accords sujet-verbe en français",
    "Améliorer son vocabulaire anglais",
    "Découvrir l'histoire de l'Empire romain"
];

// Fonds dégradés prédéfinis
const gradients = [
    "linear-gradient(120deg, #ff7e5f, #feb47b)",
    "linear-gradient(120deg, #6a11cb, #2575fc)",
    "linear-gradient(120deg, #36d1dc, #5b86e5)",
    "linear-gradient(120deg, #ff9966, #ff5e62)",
    "linear-gradient(120deg, #56ab2f, #a8e063)",
    "linear-gradient(120deg, #3a1c71, #d76d77, #ffaf7b)",
    "linear-gradient(120deg, #f7971e, #ffd200)",
    "linear-gradient(120deg, #4facfe, #00f2fe)"
];

// Appliquer un dégradé aléatoire au fond
const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
document.body.style.background = randomGradient;

// Sélection aléatoire du titre d'erreur
const randomTitle = errorTitles[Math.floor(Math.random() * errorTitles.length)];
document.getElementById("error-title").textContent = randomTitle;

// Générer des suggestions éducatives aléatoires
const suggestionsList = document.getElementById("suggestions-list");
const shuffledSuggestions = suggestions.sort(() => 0.5 - Math.random()).slice(0, 5);
shuffledSuggestions.forEach(topic => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = `https://www.google.com/search?q=${encodeURIComponent(topic)}`;
    link.target = "_blank";
    link.textContent = topic;
    listItem.appendChild(link);
    suggestionsList.appendChild(listItem);
});

// Fonction de redirection au double-clic avec l'ID spécifique pour les ordinateurs et mobiles
document.body.addEventListener('dblclick', function() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const newTab = window.open('about:blank', '_blank'); // Ouvre un nouvel onglet
    if (isMobile) {
        newTab.document.write('<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body><iframe frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0%;left:0px;right:0px;bottom:0px" height="100%" width="100%" src="https://thunderos.glitch.me/app"></iframe></body></html>'); // Lien pour mobile
    } else {
        newTab.document.write('<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body><iframe frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0%;left:0px;right:0px;bottom:0px" height="100%" width="100%" src="https://t0s.pages.dev/locker/index.html?hash=U2FsdGVkX190JI5N6nwLCu6NtGr4wsXYzw40Zh52Cqs1L2a3S4hmrozNfScJNHqAvxo7p1L2u3SkbhJe9alAfwBbp6p1L2u3S9K3bHlA6ge1Q2u3A4le1Q2u3A4l"></iframe></body></html>'); // Lien pour ordinateur
    }
});
