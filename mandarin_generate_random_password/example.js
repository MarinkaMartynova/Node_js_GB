const generate = require('./generator.js');

const password = generate.generateRandomPassword(10);

//Generation of a 10-character password
console.log(password);