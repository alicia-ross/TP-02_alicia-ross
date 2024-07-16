document.addEventListener('DOMContentLoaded', () => {

    /** @type {Dog[]} */
    const dogs = [
        {
            name: 'Marley',
            gender: 'Mâle',
            age: '1 an',
            image: 'https://lespattesjaunes.com/wp-content/uploads/2024/06/plumeau-site-800x800-1.jpg',
            breed: 'Terrier croisé',
            description: 'Très joueur, enthousiaste, très intelligent et d’une sociabilité exceptionnelle, il sera un excellent compagnon de vie! Il est très affectueux avec tous les humains qu’il rencontre!',
            compatibility: 'Il s’entend bien avec les autres chiens de toutes tailles. Bien que sa compatibilité avec les chats soit inconnue, une cohabitation pourrait être possible suite à une introduction et une formation appropriées.'
        },
        {
            name: 'Suki',
            gender: 'Femelle',
            age: '7 ans',
            image: 'https://spcasaguenay.com/wp-content/uploads/2024/06/lily-site-800x800.jpg',
            breed: 'Caniche X Golden',
            description: 'Cette grande et magnifique demoiselle est encore craintive. Elle veut tellement entrer en contact avec l’humain qu’elle brave ses peurs pour venir chercher des gâteries et des câlins.',
            compatibility: 'Comme elle est encore insécure lorsqu’il y a des bruits forts et des mouvements brusques, une famille calme sans jeunes enfants serait préférable pour elle. Vous devez également avoir une cour clôturée sécuritaire.'
        },
        {
            name: 'Luna',
            gender: 'Femelle',
            age: '2 ans',
            image: 'https://spcasaguenay.com/wp-content/uploads/2024/07/Fiona-site-800x800.jpg',
            breed: 'Boston Terrier',
            description: 'Sa nature douce et affectueuse en fait une compagne idéale pour ceux et celles qui cherchent à établir un lien profond avec leur chien.',
            compatibility: 'Elle pourrait cohabiter avec d’autres chiens, en particulier ceux qui sont plus petits qu’elle. Sa nature bienveillante et son comportement sociable facilitent les interactions avec ses congénères.'
        },
        {
            name: 'Zuko',
            gender: 'Mâle',
            age: '8 ans',
            image: 'https://spcasaguenay.com/wp-content/uploads/2024/07/Paulo-site-800x800.jpg',
            breed: 'Caniche X Terrier',
            description: 'Zuko est un adorable compagnon de race mixte ayant un véritable attachement pour les humains. Actuellement sous anxiolytiques pour faciliter son adaptation en refuge, ce charmant chien peut sembler hésitant au premier abord.',
            compatibility: 'Il est important de noter que Zuko ne peut pas vivre avec des chats ou d’autres petits animaux, car il a un instinct de poursuite prononcé.'
        },
        {
            name: 'Coco',
            gender: 'Mâle',
            age: '3 ans',
            image: 'https://spcasaguenay.com/wp-content/uploads/2024/07/kaman-800x800.jpg',
            breed: 'Pitbull',
            description: 'Je suis un chien très énergique mais je deviens plus tranquille une fois mon énergie dépensée. J’adore jouer à la balle et cacher mes jouets. Je suis libre dans la maison, je ne détruis pas et je reste calme.',
            compatibility: 'Je suis habitué avec les enfants et je suis doux avec eux malgré ma taille imposante. Je ne pourrai pas cohabiter avec des chats ou des petits chiens. Je m’entends bien par contre avec des chiens de ma taille.'
        },
        {
            name: 'Togepi',
            gender: 'Mâle',
            age: '10 ans',
            image: 'https://spcasaguenay.com/wp-content/uploads/2024/05/Gwendoline-800x800.jpg',
            breed: 'Husky',
            description: 'Je suis un chien affectueux, colleux et intelligent. Avec moi, vous n’allez pas vous ennuyer! Malgré mon âge, je suis encore en très bonne santé malgré mon allergie au poulet et peux encore jouer beaucoup!',
            compatibility: 'Je ne pourrai pas vivre avec d’autres animaux. Je pourrais cohabiter avec des adolescents qui sont habitués aux chiens. Et comme on ne m’a jamais vu interagir avec de jeunes enfants.'
        },
        {
            name: 'Maya',
            gender: 'Femelle',
            age: '5 ans',
            image: 'https://spcasaguenay.com/wp-content/uploads/2024/06/koa-site-800x800.jpg',
            breed: ' Shih tzu X Caniche',
            description: 'Je suis le meilleur des deux mondes : parfois indépendante, parfois joueuse. Je peux facilement m’occuper toute seule si on me laisse assez d’activités à ma disposition. J’ai aussi mes moments d’affections où je viendrai chercher les gratouilles. J’aime aussi beaucoup jouer.',
            compatibility: 'Ne peut pas cohabiter avec de jeunes enfants, adoptant patient et respectueux de son indépendance recommandé'
        },
        {
            name: 'Lou',
            gender: 'Femelle',
            age: '4 mois',
            image: 'https://lespattesjaunes.com/wp-content/uploads/2024/06/swiffer-site-800x800-1.jpg',
            breed: 'Terrier croisé',
            description: 'Un chiot demande du temps et de l’énergie. Elle doit se dépenser au quotidien avec de l’activité physique, travail mental et masticatoire. Elle doit apprendre les bases d’éducation en renforcement positif; elle peut mordiller pour jouer, elle saute lorsqu’elle veut votre attention, etc.',
            compatibility: 'Elle est compatible avec les chats et les chiens. Elle peut cohabiter avec des enfants de 5 ans et plus.'
        },
        {
            name: 'Eevee',
            gender: 'Femelle',
            age: '9 ans',
            image: 'https://spcasaguenay.com/wp-content/uploads/2024/07/raccoon-800x800.jpg',
            breed: 'Husky',
            description: 'Je suis une belle fille qui a besoin de beaucoup d’amour et d’attention. Je suis aussi gourmande et je peux être vocale. Il faut savoir que j’ai un peu de difficulté à demeurer seule.',
            compatibility: 'Je peux cohabiter avec des enfants de plus de 5 ans. Pour une cohabitation avec les chats et les autres chiens, cela pourrait être possible suite à une intégration progressive.'
        },
    ];

    /**
     * @type {HTMLElement}
     */
    const modal = document.getElementById('modal');
    
    /**
     * @type {HTMLElement}
     */
    const modalTitle = document.getElementById('modalTitle');
    
    /**
     * @type {HTMLElement}
     */
    const modalGender = document.getElementById('modalGender');
    
    /**
     * @type {HTMLElement}
     */
    const modalAge = document.getElementById('modalAge');
    
    /**
     * @type {HTMLImageElement}
     */
    const modalImage = document.getElementById('modalImage');
    
    /**
     * @type {HTMLElement}
     */
    const modalBreed = document.getElementById('modalBreed');
    
    /**
     * @type {HTMLElement}
     */
    const modalDescription = document.getElementById('modalDescription');
    
    /**
     * @type {HTMLElement}
     */
    const modalCompatibility = document.getElementById('modalCompatibility');
    
    /**
     * @type {HTMLElement}
     */
    const closeModalBtn = document.getElementById('closeModalBtn');
    
    /**
     * @type {HTMLElement}
     */
    const adoptBtn = document.getElementById('adoptBtn');
    
    /**
     * @type {HTMLElement}
     */
    const overlay = document.getElementById('overlay');

    /**
     * Ouvre la modale avec les informations du chien sélectionné
     * @param {Dog} dog - Les informations du chien à afficher dans la modale
     */
    const openModal = (dog) => {
        if (!modal || !modalTitle || !modalGender || !modalAge || !modalImage || !modalBreed || !modalDescription || !modalCompatibility || !overlay) return;

        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        modalTitle.textContent = dog.name;
        modalGender.textContent = `Genre: ${dog.gender}`;
        modalAge.textContent = `Âge: ${dog.age}`;
        modalImage.src = dog.image;
        modalBreed.textContent = `Race: ${dog.breed}`;
        modalDescription.textContent = `Description: ${dog.description}`;
        modalCompatibility.textContent = `Compatibilité: ${dog.compatibility}`;
    };

    /**
     * Ferme la modale
     */
    const closeModal = () => {
        if (!modal || !overlay) return;

        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    };

    // Associe chaque bouton à son chien correspondant
    /**
     * @type {<HTMLElement>}
     */
    const buttons = document.querySelectorAll('.btn-en-savoir-plus');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            openModal(dogs[index]);
        });
    });

    // Ajoute un événement pour fermer la modale
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }
});
