const signup = require("../spies/app-signup");
/**
 * jest is new library for testing in place of expect and
 * this example mocks the original function juts like we use mockito in android testing
 * or mock intent in ui testing with espresso
 */
describe("App", () => {

    test("Signup", () => {
        const spy = jest.spyOn(signup, 'handleSignUp');
        const user = signup.handleSignUp("nishant05dubey@gmail.com", "password");
        let expectedUserObj = {
            email: "nishant05dubey@gmail.com",
            password: "password"
        };

        /**
         * toHaveBeenCalled checks if spy was called and toHaveBeenCalled with checks if it was called with arguments
         */
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith("nishant05dubey@gmail.com", "password");
        expect(user).toStrictEqual(expectedUserObj);
        spy.mockRestore();
   })

});