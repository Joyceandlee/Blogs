const jwt = require('jsonwebtoken');

module.exports.JWT = (data, keys) => {
    let token = jwt.sign({
        data,
        iat: Date.now()
    }, keys)
    return token;
}

module.exports.DECODE = (token, keys) => new Promise((resolve, reject) => {
    jwt.verify(token, keys, (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})