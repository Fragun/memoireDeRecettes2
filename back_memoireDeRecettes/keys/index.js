const fs = require('fs')

// pour lire et exporter les clés

module.exports = {
    key: fs.readFileSync(`${__dirname}/jwtRS256.key`),
    keyPub: fs.readFileSync(`${__dirname}/jwtRS256.key.pub`),
}