const { describe, expect, it } = require("@jest/globals");
const User = require("../classes/User.js");

describe("user.login(password)", () => {
  it.skip("logs a user in if the password is correct", () => {
    // Arrange
    let newUser = new User('User1', 'password', 19);
    // Act
    newUser.login('password')
    // Assert
    expect(newUser.loggedIn).toBe(true)
  });

  it.skip("throws an error if the password is incorrect", () => {
    // Arrange
    let newUser1 = new User('User2', 'password', 19);
    // Act
    newUser1.login('whoops')
    // Assert
    expect.toThrow('Incorrect password')
  });
});

describe("user.logout()", () => {
  it.skip("logs a user out", () => {
    // Arrange
    let newUser2 = new User('User3', 'password', 19);
    // Act
    newUser2.logout()
    // Assert
    expect(newUser2.loggedIn).toBe(false)
  });
});
