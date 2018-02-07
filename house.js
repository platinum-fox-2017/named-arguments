'use strict'

class House {

  constructor(address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, short_sale, has_tenants) {
    this.address = objek.address
    this.square_feet = objek.square_feet
    this.num_bedrooms = objek.num_bedrooms || 3
    this.num_baths = objek.num_baths || 2
    this.cost = objek.cost || 320000
    this.down_payment = objek.down_payment || 0.20
    this.sold = objek.sold || false
    this.short_sale = objek.short_sale
    this.has_tenants = objek.has_tenants || false
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

var objek = {};
objek.address = 'address';
objek.square_feet = 100;
objek.num_bedrooms = 2;
objek.num_baths = 2;
objek.cost = 12345;
objek.down_payment = 12345;
objek.sold = true;
objek.short_sale = true;

const cool = new House(objek)

console.log(cool.to_s())
