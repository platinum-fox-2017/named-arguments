'use strict'

class House {

  constructor(cool) {
    this.address = cool.address
    this.square_feet = cool.square_feet
    this.num_bedrooms = cool.num_bedrooms || 3
    this.num_baths = cool.num_baths || 2
    this.cost = cool.cost || 320000
    this.down_payment = cool.down_payment || 0.20
    this.sold = cool.sold || false
    this.short_sale = cool.short_sale
    this.has_tenants = cool.has_tenants || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
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
var obj={
  address:'address',
  square_feet:100,
  num_bedrooms:2,
  num_baths:2,
  cost:12345,
  down_payment:12345,
  sold:true,
  short_sale:true,
  has_tenants:true
}
const cool = new House(obj)
// console.log(cool)
console.log(cool.to_s())
