const database = require('mysql2');

let connect = database.createConnection({
    host:'localhost',
    user:'root',
    password:'celil123',
    database:'nodejs-eticaret'
});
module.exports = connect.promise();