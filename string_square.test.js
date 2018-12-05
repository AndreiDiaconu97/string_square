const fetch = require("node-fetch");

test("GET request", async () => {
    let response = await fetch('http://localhost:3000/square?string=');
    let data = await response.json();
    expect(JSON.stringify(data)).toEqual(JSON.stringify({
        result: 0
    }));

    let response = await fetch('http://localhost:3000/square?string=aaa');
    let data = await response.json();
    expect(JSON.stringify(data)).toEqual(JSON.stringify({
        result: 9
    }));

    let response = await fetch('http://localhost:3000/square?string=0');
    let data = await response.json();
    expect(JSON.stringify(data)).toEqual(JSON.stringify({
        result: 1
    }));

    let response = await fetch('http://localhost:3000/square?');
    let data = await response.json();
    expect(JSON.stringify(data)).toEqual(JSON.stringify({
        result: -1
    }));

    let response = await fetch('http://localhost:3000/round?string=aaa');
    let data = await response.json();
    expect(JSON.stringify(data)).toEqual(JSON.stringify({
        result: -1
    }));
});

