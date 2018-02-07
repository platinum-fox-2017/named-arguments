'use strict'

class House {

  constructor(objectHouse) {
    this.address = objectHouse.address
    this.square_feet = objectHouse.square_feet
    this.num_bedrooms = objectHouse.num_bedrooms || 3
    this.num_baths = objectHouse.num_baths || 2
    this.cost = objectHouse.cost || 320000
    this.down_payment = objectHouse.down_payment || 0.20
    this.sold = objectHouse.sold || false
    this.short_sale = objectHouse.short_sale
    this.has_tenants = objectHouse.has_tenants || false
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
let newObj = {
  address:'address',
  square_feet:100,
  num_bedrooms:2,
  num_baths:2,
  cost:12345,
  down_payment:12345,
  sold: true,
  short_sale: true
}

const cool = new House(newObj);

console.log(cool.to_s())
console.log(cool);
