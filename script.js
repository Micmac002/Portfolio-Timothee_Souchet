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
