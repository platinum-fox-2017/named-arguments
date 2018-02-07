'use strict'

class House {

  constructor(target) {
    this.address = target.address
    this.square_feet = target.square_feet
    this.num_bedrooms = target.num_bedrooms || 3
    this.num_baths = target.num_baths || 2
    this.cost = target.cost || 320000
    this.down_payment = target.down_payment || 0.20
    this.sold = target.sold || false
    this.short_sale = target.short_sale
    this.has_tenants = target.has_tenants || false
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
var target ={
  address: 'Jl. H. Nawi Raya No. 45A',
  square_feet: 100,
  num_bedrooms: 2,
  num_baths: 2,
  cost: 12345,
  down_payment: 12345,
  sold: true,
  short_sale: true
}
const cool = new House(target);

console.log(cool.to_s());
