class User {
  // User code here
  static loggedIn = false
  constructor(username, password, age) {
    this.username = username
    this.password = password
    this.age = age
  }

  login(password) {
    if (this.password === password) {
      this.loggedIn = true
    }else {
      throw new Error('Incorrect password')
    }
  }

  logout() {
    this.loggedIn = false
  }
}

module.exports = User;
