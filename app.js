const expres = require('express');
var app = expres();

//db start
const db = require('./database/db');
//db end

//setting - start
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//setting - end

// product start
const prop = require('./controller/product');
const productionDetails = require('./controller/product-details');
const Product = require('./controller/product');
// product end

app.set('view engine','ejs');
app.use(expres.static('public'));


//admin panel - start
app.get('/admin',(req,res)=>{
    res.render('admin');
});
//admin panel - end

//Product - start
app.get('/product-add',(req,res)=>{
    Product.getAll().then((result) => {
        res.render('./product/product-add',{model:result[0]});
    }).catch((err) => {
        console.log(err);
    });
});
app.post('/product-add',(req,res)=>{
    const products = {
        name:req.body.name,
        price:req.body.price,
        description:req.body.description,
        categoryId:req.body.categoryId,
    };
    Product.Insert(
        products.name,
        products.price,
        products.description,
        products.categoryId
        ).then((result) => {
       if(result){
            const mesaj  = "işlem başarılı";
            res.redirect('/product-add');
       }
       
    }).catch((err) => {
        console.log(err);
    });
});
//Product - end










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
