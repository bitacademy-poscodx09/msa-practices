const jwt = require('jsonwebtoken');
const dotenv = require("dotenv")

dotenv.config();

//
// sign & verify
//

const options1 = {
    algorithm: 'HS256'
};

const token1 = jwt.sign({id: 1, name: 'kickscar', profileImage: 'profile.jpg'}, process.env.ACCESS_TOKEN_SECRET, options1);
console.log(token1);

const verifyed1 = jwt.verify(token1, process.env.ACCESS_TOKEN_SECRET);
console.log(verifyed1);

console.log("==============================")

const options2 = {
    algorithm: 'HS256',
    expiresIn: '24h' // 24hours  
};
const token2 = jwt.sign({ id: 1, name: 'kickscar', profileImage: 'profile.jpg' }, process.env.ACCESS_TOKEN_SECRET, options2);
console.log(token2);

const verifyed2 = jwt.verify(token2, process.env.ACCESS_TOKEN_SECRET);
console.log(verifyed2);
