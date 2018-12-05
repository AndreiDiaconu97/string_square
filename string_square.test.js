const fetch = require("node-fetch");

test("GET request", async () => {
    let response = await fetch('http://localhost:3000/square?string=');
    let data = await response.json();
    expect(JSON.stringify(data)).toEqual(JSON.stringify({
        result: 0
    }));

    response = await fetch('http://localhost:3000/square?string=aaa');
    data = await response.json();
    expect(JSON.stringify(data)).toEqual(JSON.stringify({
        result: 9
    }));

    response = await fetch('http://localhost:3000/square?string=0');
    data = await response.json();
    expect(JSON.stringify(data)).toEqual(JSON.stringify({
        result: 1
    }));

    response = await fetch('http://localhost:3000/square?');
    data = await response.json();
    expect(JSON.stringify(data)).toEqual(JSON.stringify({
        result: -1
    }));

    response = await fetch('http://localhost:3000/square?string=0&ciao=no');
    data = await response.json();
    expect(JSON.stringify(data)).toEqual(JSON.stringify({
        result: 1
    }));

    response = await fetch('http://localhost:3000/square?result=1&string=0');
    data = await response.json();
    expect(JSON.stringify(data)).toEqual(JSON.stringify({
        result: 1
    }));
});

