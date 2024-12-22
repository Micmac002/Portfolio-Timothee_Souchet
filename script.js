// Sélection des éléments avec la classe "appear-on-scroll"
const scrollElements = document.querySelectorAll(".appear-on-scroll");

const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const displayScrollElement = (element) => {
    element.classList.add("appear");
};

const hideScrollElement = (element) => {
    element.classList.remove("appear");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 150)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

// Ajouter un écouteur pour l'événement "scroll"
window.addEventListener("scroll", () => {
    handleScrollAnimation();
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Sélection des éléments avec la classe "appear-on-scroll"

// Récupère tous les éléments <a> dans le <ul>
const items = document.querySelectorAll('ul a'); // Sélectionne tous les <a> dans la liste

// Contenus dynamiques à afficher lors du clic (par id de l'élément <a>)
const contenusFlipped = {
    Langages: "<p class='nouvelleclass'>Développement d'un site web avec HTML et CSS dans le cadre d'un cours OpenClassroom. Mise en place d'un jeu TypeRacer avec JavaScript pour tester la rapidité de frappe des utilisateurs. Écriture de scripts Python pour récupérer des informations via Socket et automatisation de la collecte de données avec du web scraping. Script bash pour hasher une chaîne et vérifier sa correspondance. </p>",
    Réseaux: "<p class='nouvelleclass'>Mise en place d'un serveur Samba pour le partage de fichiers et d'un serveur NIS en mode serveur/client. Configuration de l'adressage IP sous Linux pour gérer des réseaux et attribuer des adresses IP, et apprentissage du modèle OSI et TCP / IP</p>",
    Systèmes: "<p class='nouvelleclass'>Installation de Linux (Mint, Debian) sur machines physiques et virtuelles via clé bootable. Configuration de machines virtuelles avec VirtualBox et analyse des architectures Linux (répertoires racine, commandes de base).</p>",
    Outils: "<p class='nouvelleclass'>Utilisation de Wireshark pour analyser la fragmentation des paquets, ainsi que dans le cadre de projets sur Root-Me. Finalisation d'un cours OpenClassroom avec une initiation à Packet Tracer pour la simulation et l'analyse de réseaux.</p>",
};

// Sauvegarde le contenu initial de chaque <a>
const contenusInitiaux = {};
items.forEach((item) => {
    const id = item.id;
    if (id) {
        contenusInitiaux[id] = item.querySelector('li').innerHTML; // Sauvegarde le contenu initial du <li>
    }

    // Ajoute un écouteur d'événement à chaque <a>
    item.addEventListener('click', function (event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        item.classList.toggle('flipped'); // Bascule la classe "flipped"

        const liElement = item.querySelector('li'); // Récupère le <li> à l'intérieur du <a>

        if (item.classList.contains('flipped')) {
            // Change le contenu du <li> avec le contenu spécifique pour cet id
            liElement.innerHTML = contenusFlipped[id] || '<p>Contenu par défaut</p>';
        } else {
            // Restaure le contenu initial du <li>
            liElement.innerHTML = contenusInitiaux[id];
        }
    });
});

const translations = {
    fr: {
        home: "Accueil",
        about: "À propos",
        education: "Éducation",
        skills: "Compétences",
        title: "Étudiant en réseaux & télécommunication.",
        welcome: "Bienvenue chez moi ! Je m'intéresse à l'informatique et à la compréhension des systèmes et des réseaux, je suis un étudiant en réseaux et télécommunication à l'IUT de Béziers et j'aime explorer différents domaines qui m'aident à progresser dans mes compétences, y compris dans des sujets comme la cybersécurité.",
        iut: "Diplôme Universitaire de Technologie - Réseaux et Télécommunication (2024-2027)",
        lycee: "Baccalauréat Maths, Physique-Chimie - Mention Bien (2024)",
        langages: "Langages",
        reseaux: "Réseaux",
        systemes: "Systèmes",
        outils: "Outils",
        button: "🇫🇷 Français"
    },
    en: {
        home: "Home",
        about: "About",
        education: "Education",
        skills: "Skills",
        title: "Student in Networks & Telecommunications.",
        welcome: "Welcome to my website! I am passionate about IT and understanding systems and networks. I am a student in Networks and Telecommunications at IUT Béziers, and I enjoy exploring different fields that help me grow my skills, including topics like cybersecurity.",
        iut: "University Diploma of Technology - Networks and Telecommunications (2024-2027)",
        lycee: "High School Diploma in Maths, Physics-Chemistry - Honors (2024)",
        langages: "Languages",
        reseaux: "Networks",
        systemes: "Systems",
        outils: "Tools",
        button: "🇬🇧 English"
    }
};

// Langue par défaut
let currentLanguage = "fr";

document.getElementById("toggle-language").addEventListener("click", () => {
    currentLanguage = currentLanguage === "fr" ? "en" : "fr";
    updateLanguage();
});

function updateLanguage() {
    const lang = translations[currentLanguage];

    // Mise à jour des liens du menu
    document.querySelector('a[href="#home"]').textContent = lang.home;
    document.querySelector('a[href="#a-propos"]').textContent = lang.about;
    document.querySelector('a[href="#education"]').textContent = lang.education;
    document.querySelector('a[href="#competences"]').textContent = lang.skills;

    // Mise à jour des titres <h2> avec la classe 'titre'
    const titles = document.querySelectorAll("h2.titre");
    titles[0].textContent = lang.about;
    titles[1].textContent = lang.education;
    titles[2].textContent = lang.skills;

    // Mise à jour de la balise <span> dans la section d'accueil
    document.querySelector(".FondSurImage span").textContent = lang.title;

    // Mise à jour du paragraphe "À propos"
    document.querySelector("#a-propos p").textContent = lang.welcome;

    // Mise à jour des titres H2 des compétences
    document.querySelector("#Langages strong").textContent = lang.langages + " :";
    document.querySelector("#Réseaux strong").textContent = lang.reseaux + " :";
    document.querySelector("#Systèmes strong").textContent = lang.systemes + " :";
    document.querySelector("#Outils strong").textContent = lang.outils + " :";

    // Mise à jour des descriptions dans la section "Éducation"
    const educationItems = document.querySelectorAll("#education ul li p");
    educationItems[0].textContent = lang.iut;
    educationItems[1].textContent = lang.lycee;

    // Mise à jour du texte du bouton de langue
    document.getElementById("toggle-language").textContent = lang.button;
}
