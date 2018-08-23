const utils = require('../utils/utils');
const assert = require('assert');

//using describe lets us group various tests so that its easier to find and scan them later in terminal
describe("Utils", () => {

    describe("#add", () => {
        it("should add two numbers", () => {
            let res= utils.add(2,3);
            // if (res !== 5)
            // throw new Error(`Value not correct: Expected 5 got ${res}`)

            //using assert
            assert(res === 5);

        });

        it("should asynchronously add two numbers", (done) => {
            utils.asyncAdd(2,3, (sum) => {
                assert.equal(sum, 5);

                //this is required to tell mocha that the test is done and then it will print message
                done();
            });

        });
    });


    describe("#square", () => {
        it("should square the number", () => {
            let res= utils.square(2);
            // if (res !== 4)
            //     throw new Error(`Value not correct: Expected 4 got ${res}`)

            //using assert
            assert.equal(res, 4);

            //check the value returned is number and not string
            assert.notEqual(typeof res, typeof "Name");
        });

        it("should asynchronously square a number", (done) => {
            utils.asyncSquare(2, (sqr) => {
                assert.equal(sqr, 4);
                done();
            });

        });
    });


    describe("#JSobject Validation", () => {
        //deep equals can be used to check the full object
        it("should return an object with key name and value Nishant", () => {
            let checkObj = {
                name: "Nishant"
            };
            assert.deepEqual(utils.getObj(), checkObj)
        });

        it("should set firstName and lastName in user object", () => {
            let user = {
                location: "India",
                age: 26
            };

            let res = utils.setName(user, "Nishant Dubey");

            let expected = {
                firstName: "Nishant",
                lastName: "Dubey",
                location: "India",
                age: 26
            };

            assert(res.hasOwnProperty("firstName") && res.hasOwnProperty("lastName"));
            assert(res.firstName.match(expected.firstName));
            assert.deepEqual(res, expected);

        });
    })


});


