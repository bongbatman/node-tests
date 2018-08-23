const request = require('supertest');
const assert = require('assert');

let app = require("../app").app;

it('should return Hello World response', (done) => {
    request(app)
        .get("/")
        .expect(404)
        .expect((res) => {
            assert((res.body.name === "Todo App v1.0"));
        })
        .expect({
            error: "Page not found",
            name: "Todo App v1.0"
        })
        .end(done);
});