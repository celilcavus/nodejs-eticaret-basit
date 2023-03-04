const database = require('mysql2');

let connect = database.createConnection({
    host:'localhost',
    user:'root',
    password:'', // mysql db password
    database:'' // mysql db name
});
module.exports = connect.promise();