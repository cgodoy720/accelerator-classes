// Create a deck of cards using classes. We should have a Deck class as well as a Card class.
// A deck has 52 cards in it with faces of 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace
// Values should be 2-10 for the numbered cards, 10 for the face cards, and 11 for the Aces
// A deck has four suits: Hearts, Diamonds, Clubs, Spades - each with 13 cards


class Deck {
    constructor(){
        this.cards = []
        this.suits = ["Hearts", 'Diamonds', "Spades", "Clubs"]
        this.values = [2,3,4,5,6,7,8,9,10, "Jack", "Queen", "King", "Ace"]
    }

    createDeck(){
        this.suits.forEach(suit => {
            this.values.forEach(value => {
                let val = typeof value === "number" ? value : value === "Ace" ? 11 : 10
                const card = new Card(suit, value, val)
                this.cards.push(card)
            })
        })
    }

    shuffle(){
        const shuffledDeck = []
        const length = [...this.cards].length
        for(let i = 0; i < length; i++){
            // Got a random number between 0 and the length of the array
            const random = Math.floor(Math.random() * this.cards.length)
            // Spliced a card out using the random index
            const card = this.cards.splice(random, 1)
            // Push that random card into our new array. Need to use card[0] because "splice" returns an array to us
            shuffledDeck.push(card[0])
        }
        // Reassign this.cards to be the newly shuffled deck
        this.cards = shuffledDeck
    }
}

class Card {
    constructor(suit, face, val){
        this.suit = suit
        this.face = face
        this.val = val
    }
}

const pokerDeck = new Deck()
// pokerDeck.createDeck()
// pokerDeck.shuffle()

// console.log(pokerDeck.cards)


class Car {
    constructor(make, model, color="black"){
        this.make = make
        this.model = model
        this.color = color
        this.mileage = 0
        this.gas = 100
    }

    driveTo(location, distanceInMiles){
        this.mileage += distanceInMiles
        this.gas -= distanceInMiles / 4
        return `Arrived at ${location}.\nMileage: ${this.mileage}\nTank: ${this.gas}\n-------------`

    }

    fillUpTank = () => {
        this.gas = 250
        console.log(this.make, this.model)
        return `Filled Tank.\nMileage: ${this.mileage}\nTank: ${this.gas}\n-------------`
    }
    
}


// const bmw = new Car("BMW", "540xi", "black")

// console.log(bmw.driveTo("airport", 50))
// console.log(bmw.driveTo("home", 50))
// console.log(bmw.fillUpTank())

class Deck {
    constructor(){
        this.deck = []
        this.suits = ["Hearts", "Diamonds", "Spades", "Clubs"]
        this.values = [2,3,4,5,6,7,8,9,10, "Jack", "Queen", "King", "Ace"]
    }

    createDeck(){
        this.suits.forEach((suit) => {
            this.values.forEach(val => {
                const card = {
                    suit: suit,
                    face: val,
                    value: typeof val === 'number' ? val : val === "Ace" ? 11 : 10
                }
                this.deck.push(card)
            })
        })
    }

    shuffle(){
        const length = [...this.deck].length
        const shuffledDeck = []
        for(let i = 0; i < length; i++){
            let randomIndex = Math.floor(Math.random() * this.deck.length)
            const randomCard = this.deck.splice(randomIndex, 1)
            // console.log('random card', ...randomCard)
            // console.log(this.deck)
            shuffledDeck.push(randomCard[0])
        }
        this.deck = shuffledDeck
    }
}

const deck = new Deck()
deck.createDeck()
deck.shuffle()
// console.log(deck.deck)




// Static Methods in Classes
// Methods that we call on the class itself and not on an instance of the class. Ex: Math.pow(), Math.random(), Math.ceil() <- we call the methods on the Math class itself.
class Maf {
    constructor(){}

    static addTen(num){
        return num + 10
    }
}

// console.log(Maf.addTen(10))


// Here is an example of how we can extend the String class by adding a method that we can call on any instance of a String.
String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
console.log("yodog".reverse())







