// cards
let cards = [
    {
    src: 'IMAGES/banana.jpeg',
    name: 'WISE OLD MAN',
    attack: 1,
    defence: 1
    }
];


console.log(cards[0].name);
console.log(cards[0].attack);
console.log(cards[0].defense)

// get player card name
let playerCardName = document.querySelector('.card-name.player');
//  get the player attack stat html item
let playerAttack = document.querySelector('.attack-stat');

// get the player defence stat
let playerDefence = document.querySelector('.defence-stat');

// player-two container is the player card - when this is clicked, console.log
let PlayerCardContainer = document.querySelector('.player-two'); // index 0 is enemy player, index 1 is human player
console.log(PlayerCardContainer)
PlayerCardContainer.onclick = PlayerCardClick;

function PlayerCardClick() {
    console.log('Player card was clicked.')
    console.log(PlayerCardContainer)
    playerCardName.textContent = 'CARD: ' + cards[0].name;
    playerAttack.textContent = 'ATTACK: ' + cards[0].attack;
    playerDefence.textContent = 'DEFENCE: ' + cards[0].defence;
}


