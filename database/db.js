const database = require('mysql2');

database.createConnection({
    host:'localhost',
    user:'root',
    password:'celil123',
    database:'nodejs-eticaret'
}).then(res=>{
    console.log("bağlantı başarılı");
});