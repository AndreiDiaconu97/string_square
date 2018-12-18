const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:3000';

// async/await
test("GET request", async () => {
    let response = await fetch(BASE_URL + '/square?string=');
    let data = await response.json();
    expect(JSON.stringify(data)).toEqual(JSON.stringify({
        result: 0
    }));

    response = await fetch(BASE_URL + '/square?string=aaa');
    data = await response.json();
    expect(JSON.stringify(data)).toEqual(JSON.stringify({
        result: 9
    }));

    response = await fetch(BASE_URL + '/square?string=0');
    data = await response.json();
    expect(JSON.stringify(data)).toEqual(JSON.stringify({
        result: 1
    }));

    response = await fetch(BASE_URL + '/square?');
    data = await response.json();
    expect(JSON.stringify(data)).toEqual(JSON.stringify({
        result: -1
    }));

    response = await fetch(BASE_URL + '/square?string=0&ciao=no');
    data = await response.json();
    expect(JSON.stringify(data)).toEqual(JSON.stringify({
        result: 1
    }));

    response = await fetch(BASE_URL + '/square?result=1&string=0');
    data = await response.json();
    expect(JSON.stringify(data)).toEqual(JSON.stringify({
        result: 1
    }));
});

// promise
test('GET /square?string=hello should return 200 and result property in body (fetch)', () => {
    return fetch(BASE_URL + '/square?string=hello')
        .then(response => {
            expect(response.status).toBe(200);
            return response.json();
        })
        .then(rjson => {
            expect(rjson.result).toBeDefined();
        });
});

// supertest
const request = require('supertest');
const app = require('./app');

test('app module should be defined', () => {
    expect(app).toBeDefined();
});

test('GET /square?string=hello should return 200 and result property in body (supertest)', async () => {
    const response = await request(app).get('/square?string=hello');
    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBeDefined();
});
