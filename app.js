const expres = require('express');
var app = expres();

//db start
const data = require('./database/db');

//db end

app.set('view engine','ejs');
app.use(expres.static('public'));




app.get('/',(req,res)=>{
   res.render('index');
   data.db;
})






app.listen(3000,()=>{
    console.log("3000 portu dinlemede");
});
