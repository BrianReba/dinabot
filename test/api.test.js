const request = require("supertest")
const app = require('../app')

describe("Random api", () => {
    test("It should response the GET method with the status 200", async () => {
        const responseApp = await request(app).get('/carlos')
        expect(responseApp.status).toBe(200);
        expect(responseApp.text).toBe("Dinabot Api");
    });

});



