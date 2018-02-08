'use strict'

class House {

  constructor(houseProfile) {
    this.address = houseProfile.address
    this.square_feet = houseProfile.square_feet
    this.num_bedrooms = houseProfile.num_bedrooms || 3
    this.num_baths = houseProfile.num_baths || 2
    this.cost = houseProfile.cost || 320000
    this.down_payment = houseProfile.down_payment || 0.20
    this.sold = houseProfile.sold || false
    this.short_sale = houseProfile.short_sale
    this.has_tenants = houseProfile.has_tenants || false
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
let objHouse = {
  address: 'address yang oke di bekasi',
  square_feet: 100,
  num_bedrooms: 2,
  num_baths: 2,
  cost: 12345,
  down_payment: 12345,
  short_sale: true,
  has_tenants: true
}
const cool = new House(objHouse)

console.log(cool.to_s())
