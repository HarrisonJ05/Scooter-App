const { describe, expect, it } = require("@jest/globals");
const Scooter = require("../classes/Scooter.js");

describe("scooter.rent(user)", () => {
  it("checks a scooter out to a user", () => {
    // Arrange
    let newScooter = new Scooter('station1', null, 1, 1, 55, false);
    // Act
    newScooter.rent(user)
    // Assert
    expect(newScooter.user).toBe(user)
  });

  it("throws an error if battery dead or scooter broken", () => {
    // Arrange
    let newScooter1 = new Scooter('station1', null, 1, 1, 18, true);
    // Act
    newScooter1.rent(user)
    // Assert
    expect.toThrow('Scooter needs to charge')
  });
});

describe("scooter.dock(station)", () => {
  it("returns a scooter to a station", () => {
    // Arrange
    let newScooter2 = new Scooter(null, 'User1', 1, 1, 25, false);
    // Act
    newScooter2.dock('station2')
    // Assert
    expect(newScooter2.station).toBe('station2')
  });
});

// describe("scooter.charge()", () => {
//   it.skip("charges a scooter", () => {
//     // Arrange
//     // Act
//     // Assert
//   });
// });

// describe("scooter.repair()", () => {
//   it.skip("repairs a scooter", () => {
//     // Arrange
//     // Act
//     // Assert
//   });
// });
