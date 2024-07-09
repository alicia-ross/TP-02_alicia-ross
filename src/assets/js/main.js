import '../css/style.css';

class Card {
    constructor(numero, size) {
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
        window.addEventListener('resize', updateText);

        div.appendChild(spanNumero);
        div.appendChild(spanSize);

        return div;
    }

}

/** @type {Card[]} */
// Un tableau d'object de card
const cards = [
    new Card('1', '200px / 200px'),
    new Card('2', '200px / 200px'),
    new Card('3', '200px / 200px'),
    new Card('4', '200px / 200px'),
    new Card('5', '200px / 200px'),
    new Card('6', '200px / 200px'),
    new Card('7', '200px / 200px'),
    new Card('8', '200px / 200px'),
    new Card('9', '200px / 200px'),
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