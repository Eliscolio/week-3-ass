class Card{
    constructor(value,description,number){
        this.value = value
        this.description = description
        this.number = number
    }
    describe() {
        return `${this.description} has a value of ${this.value} in the game of war`
    }
}
class Deck{
    constructor(){
        this.cards = [];
    }

    shufflecards() {
        this.cards = this.cards.sort(() => Math.random() - 0.5)
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = [];
    }
    
    handshuffle() {
        this.hand = this.hand.sort(() => Math.random() - 0.5);
    }
}

function gamePlay (){
     let player1 = makePlayers();
     let player2 = makePlayers();

     let Suits = ['C', 'H', 'D', 'S'];
     let Values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
     const gameDeck = new Deck();
    //  console.log(card);
     for (let i = 0; i < Suits.length; i++){
          for (let j = 0; j < Values.length; j++){
             console.log(`${Values[j]} + ${Suits[i]}`);
             let card = new Card(Values[j],`${Values[j]} of ${Suits[i]}s`, [j]);
             console.log(card);
             gameDeck.cards.push(card);
             console.log(gameDeck.cards);
         }
         
     }
     gameDeck.shufflecards()
     console.log(gameDeck.cards)
     for(let i = 0;i < 26; i++){
         let p1 = gameDeck.cards.pop()
         let p2 = gameDeck.cards.pop()
    
         player1.hand.push(p1)
         player2.hand.push(p2)
         console.log(player1.hand.length);

     }
     
     }  


    //const card = new Card(`${Values} of ${suits}`)

function makePlayers() {
    const newPlayer = new Player(prompt("what's your name"));
    return newPlayer;
    }
gamePlay();
    