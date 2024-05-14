class Human {
    constructor(name, hairColor="brown"){
        this.name = name
        this.age = 0
        this.hairColor = hairColor
    }
}

// const carlos = new Human("Carlos")
// const carlos = new Human("Carlos", "blonde")

// console.log(carlos)
// console.log(carlos.name)



class Car {
    // Constructor function fires when a new instance of any class is created
    constructor(make, model, price, color){
        this.make = make
        this.model = model
        this.price = price
        this.color = color
        this.mileage = 0
        this.tank = 100
    }

    driveTo(location, distance){
        this.mileage += distance
        this.tank -= distance / 4
        console.log(`${this.make} ${this.model} arrived at the ${location}`)
    }

    fillUpTank = () => {
        this.tank = 100
    }

    race(opponent){
        console.log(`${this.make} ${this.model} is racing a ${opponent.make} ${opponent.model}`)
        const random = Math.random()
        // console.log(random)
        if(random > .5){
            console.log(`${this.make} ${this.model} is the winner! Told you I was fast.`)
        } else {
            console.log(`${opponent.make} ${opponent.model} is the winner! I got you this time.`)
        }
    }
}

const honda = new Car("Honda", "Accord", 25000, "black")
const ford = new Car("Ford", "F150", 50000, "red")

// honda.driveTo('airport', 50)
// honda.driveTo("home", 80)
// honda.fillUpTank()

// console.log(honda)

honda.race(ford)