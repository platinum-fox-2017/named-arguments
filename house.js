'use strict'

class House {
  
  constructor(obj) {
    this.address = coolHouse.address
    this.square_feet = coolHouse.square_feet
    this.num_bedrooms = coolHouse.num_bedrooms || 3
    this.num_baths = coolHouse.num_baths || 2
    this.cost = coolHouse.cost || 320000
    this.down_payment = coolHouse.down_payment || 0.20
    this.sold = coolHouse.sold || false
    this.short_sale = coolHouse.short_sale
    this.has_tenants = coolHouse.has_tenants || false
  }
  
  obscure_address() {
    this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit) {
      this.sold = true
    }
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

let coolHouse={
  address:'address',
  square_feet:100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 12345,
  down_payment : 12345,
  sold : true,
  short_sale : true,
  has_tenants: true,
}

const cool = new House(coolHouse);
console.log(cool.to_s())
