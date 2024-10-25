const Scooter = require("./Scooter.js");
const User = require("./User.js");

class ScooterApp {
  // ScooterApp code here
  constructor() {
    this.stations = {
      'station1' : [],
      'station2' : [],
      'station3': [],
    }
    this.registeredUsers = []
  }

  registerUser(username, password, age) {
    for(let i = 0; i <= this.registeredUsers.length; i++) {
      if (this.registeredUsers[i].username === username) {
        throw new Error('Already registered')
      }else if (age < 18) {
        throw new Error('Too young to register')
      }else {
        let newUser = new User(username, password, age);
        this.registeredUsers.push(newUser)
        console.log(`${newUser} has been registered`)
        return newUser
        
      }
    }

  }
  
  loginUser(username, password) {
    let flag = false;
    for(let i = 0; i <= this.registeredUsers.length; i++) {
      if (this.registeredUsers[i].username === username) {
        flag = true
        if (this.registeredUsers[i].password === password) {
          let user = this.registeredUsers[i].username;
          user.login(user.password)
          console.log(`${user} has been logged in`)
        }else {
          throw new Error('Incorrect password')
        }
      }  
    }
    if (flag === false) {
      console.log('Username or password incorrect')
      }
  }

  createScooter(station) {
    let flag1 = false;
    for (let i = 0; i <= this.registeredUsers.length; i++) {
      if (this.registeredUsers[i].station === station) {
        flag1 = true
        let newScooter = new Scooter(station, Scooter.nextSerial, 100, false);
        Scooter.nextSerial += 1
        console.log('Created new scooter')
      }
    }
    if (flag1 === false) {
      throw new Error('No such station found')
    }
  }
  
  dockScooter(scooter, station) {
    let flag3 = false;
    if (!this.stations[station]) {
      throw new Error('Station does not exist')
    }else {
      for (let i = 0; i <= this.stations[station].length; i++) {
        flag3 = true
        if (this.stations[i].serial === scooter.serial) {
          throw new Error('Scooter already at station')
        }
      }
      if (flag3 === false) {
        this.stations[station].push(scooter)
        console.log('Scooter is docked')
      }
    }
  }

  rentScooter(scooter, user) {
    
  }

  
}


module.exports = ScooterApp;
