const expres = require('express');
var app = expres();

//db start
const db = require('./database/db');
//db end

// product start
const prop = require('./controller/product');
// product end

app.set('view engine','ejs');
app.use(expres.static('public'));


//admin panel - start
app.get('/admin',(req,res)=>{
    res.render('admin');
});
//admin panel - end
app.get('/product-add',(req,res)=>{
    res.render('./product/product-add');
});










app.get('/',(req,res)=>{
    prop.getAll().then((result) => {
        res.render('index',{model:result[0]});
    }).catch((err) => {
       console.log(err); 
    });
});






app.listen(3000,()=>{
    console.log("3000 portu dinlemede");
});
