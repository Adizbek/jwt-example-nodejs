const fs = require("fs");
const jwt = require('jsonwebtoken');

const key = fs.readFileSync(__dirname + '/keys/jwtRS256.key'); // private key
const cert = fs.readFileSync(__dirname + '/keys/jwtRS256.key.pub'); // get public key

const token = jwt.sign({foo: 'bar'}, key, {expiresIn: '1h', algorithm: 'RS256'});
console.log(token);

jwt.verify(token, cert, {algorithms: ['RS256']}, function (err, decoded) {
    if (err)
        console.log(err);

    console.log(decoded)
});


