const https = require('https');

let username = 'sanchezgregory';

// http://www.useragentstring.com/apges/useragentstring.php
const chromeAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36";

let options = {
    host: 'https://api.github.com',
    path: 'users/' + username,
    method: 'GET',
    headers: {"user-agent": chromeAgent}
};

console.log(options);

let request = https.request(options, (response) => {
    let body = '';
    response.on('data', (out) => {
        body += out;
    });

    response.on('end', (out) => {
        let json = JSON.stringify(body);
        console.log(json);
    });
});

request.on('error', (e) => {
   console.log(e)
});

request.end();