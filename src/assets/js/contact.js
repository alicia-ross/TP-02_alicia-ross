/**
 * @type {HTMLFormElement}
 */
const contactForm = document.getElementById('contactForm');

/**
 * @type {HTMLElement}
 */
const confirmationMessage = document.getElementById('confirmationMessage');

/**
 * @type {HTMLElement}
 */
const errorMessage = document.getElementById('errorMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        /**
         * @type {string}
         */
        const firstName = document.getElementById('firstName').value;

        /**
         * @type {string}
         */
        const lastName = document.getElementById('lastName').value;

        /**
         * @type {string}
         */
        const email = document.getElementById('email').value;

        /**
         * @type {string}
         */
        const subject = document.getElementById('subject').value;

        /**
         * @type {string}
         */
        const description = document.getElementById('description').value;


        if (firstName && lastName && email && subject && description) {

            if (confirmationMessage) {
                confirmationMessage.classList.remove('hidden');
            }
            if (errorMessage) {
                errorMessage.classList.add('hidden');
            }
        } else {
            if (confirmationMessage) {
                confirmationMessage.classList.add('hidden');
            }
            if (errorMessage) {
                errorMessage.classList.remove('hidden');
            }
        }
    });
}