import '../css/style.css';

class Card {
    constructor(title, numero, size) {
        /**@type {string} */
        this.title = title;
        /** @type {string} */
        this.numero = numero;
        /** @type {string} */
        this.size = size;
    }

    /**
     * @returns {HTMLDivElement} - L'élément HTML représentant la carte.
     */

    toHtml() {
        /** @type {HTMLDivElement} */
        const div = document.createElement('div');
        div.classList.add('card', 'bg-black', 'flex', 'gap-3', 'flex-col', 'text-white', 'justify-center', 'items-center', 'p-3', 'text-base', 'lg:text-lg', 'rounded', 'w-[200px]', 'h-[200px]', 'lg:w-[300px]', 'lg:h-[300px]');

        const title = document.createElement('h1');
        title.textContent = this.title;

        /** @type {HTMLSpanElement} */
        const spanNumero = document.createElement('span');
        spanNumero.textContent = this.numero;

        /** @type {HTMLSpanElement} */
        const spanSize = document.createElement('span');

        // Fonction pour mettre à jour le texte en fonction de la largeur de l'écran
        const updateText = () => {
            if (window.innerWidth >= 1024) {
                spanSize.textContent = '300px / 300px';
            } else {
                spanSize.textContent = this.size;
            }
        }

        // Appeler la fonction
        updateText();

        // Écouteur d'événement pour mettre à jour le texte lorsque la taille de l'écran change sinon ça ne change pas automatiquement
        // Je ne suis pas fan de cette technique. J'aurais prefere que tu utilises tailwind
        window.addEventListener('resize', updateText);

        div.appendChild(title);
        div.appendChild(spanNumero);
        div.appendChild(spanSize);

        return div;
    }

}

/** @type {Card[]} */
// Un tableau d'object de card
const cards = [
    new Card('title', '1', '200px / 200px'),
    new Card('title','2', '200px / 200px'),
    new Card('title','3', '200px / 200px'),
    new Card('title','4', '200px / 200px'),
    new Card('title','5', '200px / 200px'),
    new Card('title','6', '200px / 200px'),
    new Card('title','7', '200px / 200px'),
    new Card('title','8', '200px / 200px'),
    new Card('title','9', '200px / 200px'),
];

/** @type {HTMLElement} */
const cartes_container = document.querySelector('.cartes_container');

cards.forEach(card => {
    cartes_container.appendChild(card.toHtml());
});


/**@type {HTMLElement} */
const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', () => {
    // Toggle couleur pour le body
    document.body.classList.toggle('bg-black');
    document.body.classList.toggle('bg-green-100');

    // Toggle couleur pour les cartes
    document.querySelectorAll('.card').forEach(card => {
        card.classList.toggle('bg-pink-500');
        card.classList.toggle('bg-black');
    });

    //Toggle couleur pour le bouton
    toggleButton.classList.toggle('bg-pink-500');
    toggleButton.classList.toggle('bg-black');
});

const hideBtn = document.getElementById('hideButton');
hideBtn.addEventListener('click', () => {
    cartes_container.classList.toggle('hidden');
    cartes_container.classList.toggle('grid');
});