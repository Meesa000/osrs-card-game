// cards
let cards = [
    {
        src: 'IMAGES/130px-Wise_Old_Man.webp',
        name: 'THE WISE OLD MAN',
        attack: 1,
        defence: 1
    },

    {
        src: 'IMAGES/banana.jpeg',
        name: 'BANANA',
        attack: 0,
        defence: 0
    }
];

let enemyInfoContainer = document.querySelector('.info-container.enemy');

// get enemy card name
let enemyCardName = document.querySelector('.card-name.enemy');
//get enemy attack
let enemyAtkStat = document.querySelector('.attack-stat.enemy');
//get enemy defence
let enemyDefStat = document.querySelector('.defence-stat.enemy');


// when user clicks enemy info container, run enemy info display function
console.log(enemyCardName);
enemyInfoContainer.onclick = enemyInfoDisplay;

function enemyInfoDisplay() {
    console.log('Enemy card was clicked.');
    enemyCardName.textContent = 'CARD: ' + cards[0].name;
    enemyAtkStat.textContent = `ATTACK: ` + cards[0].attack;
    enemyDefStat.textContent = 'DEFENCE: ' + cards[0].defence;

}

