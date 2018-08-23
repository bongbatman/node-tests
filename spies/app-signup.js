const db = require("./db");

module.exports.handleSignUp = (email, password) => {
    let user = {
        email: email,
        password: password
    };
    db.saveUser(user);
    return user;
};