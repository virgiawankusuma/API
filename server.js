const fs = require('fs');
const data = fs.readFileSync('model.json');
const models = JSON.parse(data);

console.log(models);