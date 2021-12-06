const fs = require('fs');
const data = fs.readFileSync('db.json');
const models = JSON.parse(data);

console.log(models);