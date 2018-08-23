const signup = require("../spies/app-signup");
const db = require("../spies/db");



/**
 * here we mock the db.saveUser function and expect it to be called when
 * signup.hanldeSignup is called. This is basic way to mock a function
 */
//jst.mock() does this same thing automatically behind the scenes we cna change that automatic behaviour though
// db.saveUser = jest.fn();

// test("calls db.saveUser", () => {
//     let user = {
//       email : "nishant05dubey@gmail.com",
//       password: "password"
//     };
//     signup.handleSignUp(user.email, user.password);
//     expect(db.saveUser).toHaveBeenCalledWith(user);
// });

/**
 * This is another approach of mocking all exported functions of a module
 * then we can use the module functions to check if they have been called ina similar fashion as jest.fn()
 */
//We need to full provide the path (with .js also works here as is shown in official example) extension like this to jest.mock
jest.mock("../spies/db");

describe("Mocking db", () => {

test("calls db.save user from mocked module", () => {
    let user = {
        email : "nishant05dubey@gmail.com",
        password: "password"
    };
    signup.handleSignUp(user.email, user.password);
    expect(db.saveUser).toHaveBeenCalledWith(user);
});
});
