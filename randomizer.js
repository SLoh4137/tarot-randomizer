jQuery(document).ready(function(e){

    // Have a separate dictionary that maps these titles to their images and descriptions
    // Since grabbing images and descriptions is only done for cards that you flip over
    // it's more efficient to just keep track of these titles for now
    const allCards = [
        "Ace of Cups",
        "Ace of Swords",
        "Ace of Wands",
        "Death",
        "Eight of Cups",
        "Eight of Pentacles",
        "Eigh of Swords",
        "Eight of Wands",
        "Five of Cups",
        "Five of Pentacles",
        "Five of Swords",
        "Five of Wands",
        "Four of Cups",
        "Four of Pentacles",
        "Four of Swords",
        "Four of Wands",
        "Judgement",
        "Justice",
        "King of Cups",
        "King of Pentacles",
        "King of Swords",
        "King of Wands",
        "Knight of Cups",
        "Knight of Pentacles",
        "Knight of Swords",
        "Knight of Wands",
        "Nine of Cups",
        "Nine of Pentacles",
        "Nine of Swords",
        "Nine of Wands",
        "Page of Cups",
        "Page of Pentacles",
        "Page of Swords",
        "Page of Wands",
        "Queen of Cups",
        "Queen of Pentacles",
        "Queen of Swords",
        "Queen of Wands",
        "Seven of Cups",
        "Seven of Pentacles",
        "Seven of Swords",
        "Seven of Wands",
        "Six of Cups",
        "Six of Pentacles",
        "Six of Swords",
        "Six of Wands",
        "Strength",
        "Temperance",
        "Ten of Cups",
        "Ten of Pentacles",
        "Ten of Swords",
        "Ten of Wands",
        "The Chariot",
        "The Devil",
        "The Empress",
        "The Fool",
        "The Hierophant (Pope)",
        "The Hermit",
        "The High Priestess",
        "The Lovers",
        "The Magician",
        "The Moon",
        "The Star",
        "The Sun",
        "The Tower",
        "The Wheel of Fortune",
        "Three of Cups",
        "Three of Pentacles",
        "Three of Swords",
        "Three of Wands",
        "Two of Cups",
        "Two of Pentacles",
        "Two of Swords",
        "Two of Wands",
    ];

    /**
     * Returns an array of numCardsToReturn random items from the specified array.
     * Randomizes elements in-place using the Fisher-Yates shuffling algorithm
     * Source: https://bost.ocks.org/mike/shuffle/
     * Source: https://codesandbox.io/s/3-card-tarot-reading-by-dr-derek-austin-github-master-nejui?from-embed 
     */
    function shuffleDeckAndReturnCards(array, numCardsToReturn){
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // swaps the two elements according to ES6 standards 
        }

        return array.splice(0, numCardsToReturn);
    }

    const TOTAL_CARDS = 72;

    let cardsToDisplay = shuffleDeckAndReturnCards(allCards, TOTAL_CARDS);
    let selectedCards = []; // equivalent of new Array();
    let totalCards = jQuery(".mytarots-row").attr("total"); // allows the user to decide how many cards they want to choose, modified by a different script
    // There's a misspelling in the original code where total is spelled "totol"

    /** 
     * Code for displaying the cards in rows would be here
     * From cardsToDisplay, create HTML elements with ID or some attribute with the 
     * values from the array
     */

    // The following is all psuedocode

    /**
     * When a card is clicked, add it to selectedCards
     * Pull the image from the database by using the k 
     */

    jQuery(".select").click(function() {
        const cardTitle = jQuery(this).attr("title"); // An example of getting the card name 
        if(jQuery(this).attr("isFlipped")) {
            // Flip the card back over and remove the card from selectedCards
            const index = //index of cardTitle in selectedCards
            totalCards++; 
        } else {
            // Card hasn't been selected yet so flip it over

            // Pull the image from the database using the cardTitle as the key

            selectedCards.push(cardTitle);
            totalCards--;
        }
    });

    

    




}