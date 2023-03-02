const database = require('sequelize');
const db = new database('nodejs-eticaret','root','celil123',{host:'localhost',dialect:'mysql2'});
try{
db.authenticate();
console.log("bağlantı başarılı");
}
catch{
    console.log("bağlantı başarısız");
}
module.exports = db;