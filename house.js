'use strict'

class House {

  constructor(dataObj) {
    this.address = dataObj.address
    this.square_feet = dataObj.square_feet
    this.num_bedrooms = dataObj.num_bedrooms || 3
    this.num_baths = dataObj.num_baths || 2
    this.cost = dataObj.cost || 320000
    this.down_payment = dataObj.down_payment || 0.20
    this.sold = dataObj.sold || false
    this.short_sale = dataObj.short_sale
    this.has_tenants = dataObj.has_tenants || false
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

var newObj = {
  address : 'bandung',
  square_feet : 100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 12345,
  down_payment : 12345,
  short_sale : true,
  has_tenants : true
}

const cool = new House(newObj)

console.log(cool.to_s())
