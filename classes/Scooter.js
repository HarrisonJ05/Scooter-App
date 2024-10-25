const User = require('./User.js')


class Scooter extends User{
  // Scooter code here
  static nextSerial = 1
  constructor(station, serial, charge, isBroken) {
    this.station = station
    this.user = null
    this.serial = serial
    this.charge = charge
    this.isBroken = isBroken
  }

  rent(user) {
    if (this.charge > 20 && this.isBroken === false) {
      this.station = null
      this. user = user
    }else if (this.charge <= 20) {
      throw new Error('Scooter needs to charge')
    }else if (this.isBroken === true) {
      throw new Error('Scooter is broken')
    }
  }

  dock(station) {
    this.station = station
    this.user = null
  }

}

module.exports = Scooter;
