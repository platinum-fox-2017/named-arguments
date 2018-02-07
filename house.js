'use strict'

class House {

  constructor(house_param) {
    this.address = house_param.address
    this.square_feet = house_param.square_feet
    this.num_bedrooms = house_param.num_bedrooms || 3
    this.num_baths = house_param.num_baths || 2
    this.cost = house_param.cost || 320000
    this.down_payment = house_param.down_payment || 0.20
    this.sold = house_param.sold || false
    this.short_sale = house_param.short_sale
    this.has_tenants = house_param.has_tenants || false
  }

  obscure_address() {
    return this.address.replace(/.{35}$/g, '****')
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

const house_param = {
    address: 'Griya Sunyaragi permai blok k no 3',
    square_feet: 100,
    num_bedrooms: 2,
    num_baths: 2,
    cost: 12345,
    down_payment: 12345,
    sold: true,
    short_sale: true,
    has_tenants: true
  }
const cool = new House(house_param)

console.log(cool.to_s())
