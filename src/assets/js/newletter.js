/**
 * la gestion du formulaire de newsletter
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * @type {HTMLFormElement}
     */
    const newsletterForm = document.getElementById('newsletter-form');

    if (newsletterForm) {
        /**
         * @param {Event} - L'événement de soumission du formulaire
         */
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();

            /**
             * @type {HTMLElement}
             */
            const confirmationMessage = document.getElementById('confirmation-message');

            if (confirmationMessage) {
                confirmationMessage.classList.remove('hidden');
            }
        });
    }
});