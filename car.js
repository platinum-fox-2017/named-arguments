'use strict'

class Car {

  start_car(options) {
    if (options && this.hasOwnProperty('headlights')) {
      this.headlights = options['headlights']
    } else {
      this.headlights = true
    }

    if (options && this.hasOwnProperty['gear']) {
      this.gear = options['gear']
    } else {
      this.gear = 1
    }
  }
}

const herbie = new Car()

// When we start the car, the headlights should be on by default
herbie.start_car()

console.log(herbie.headlights) // true

// But what happens when we want to start without headlights?
herbie.start_car({
  headlights: false
})

console.log(herbie.headlights) // true ...KOK BISA?!

herbie.start_car({
  headlights: false,
  gear: 4
})

console.log(herbie)
