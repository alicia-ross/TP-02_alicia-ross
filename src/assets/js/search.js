document.addEventListener('DOMContentLoaded', () => {
    /**
     * @type {HTMLElement}
     */
    const gridContainer = document.getElementById('grid-container');

    /**
     * @type {HTMLInputElement}
     */
    const searchInput = document.getElementById('search-input');

    if (gridContainer && searchInput) {
        /**
         * @type {HTMLElement[]}
         */
        const cards = Array.from(gridContainer.getElementsByClassName('card'));

        /**
         * Filtre les cartes en fonction de la valeur de recherche entrée
         */
        const filterCards = () => {
            /**
             * @type {string}
             */
            const searchValue = searchInput.value.trim().toLowerCase();

            cards.forEach(card => {
                /**
                 * @type {HTMLElement}
                 */
                const titleElement = card.querySelector('.card-title');

                /**
                 * @type {HTMLElement>}
                 */
                const descriptionElements = card.querySelectorAll('p');

                /**
                 * @type {boolean}
                 */
                let matchFound = false;

                // Vérifie le titre de la carte
                if (titleElement) {
                    /**
                     * @type {string}
                     */
                    const titleSearchData = titleElement.dataset.search.toLowerCase();
                    if (titleSearchData.includes(searchValue)) {
                        matchFound = true;
                    }
                }

                // Vérifie les descriptions de la carte
                descriptionElements.forEach(descriptionElement => {
                    /**
                     * @type {string}
                     */
                    const descriptionSearchData = descriptionElement.textContent.trim().toLowerCase();
                    if (descriptionSearchData.includes(searchValue)) {
                        matchFound = true;
                    }
                });

                // Affiche ou cache la carte en fonction de ce qui est trouvé
                if (matchFound) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        };

        /**
         * Gère l'événement d'entrée pour la recherche
         */
        searchInput.addEventListener('input', filterCards);

        // Initialise le filtre au chargement de la page
        filterCards();
    }
});