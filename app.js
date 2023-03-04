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
const productionDetails = require('./controller/productDetails');
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
           
            res.redirect('/product-add');
       }
       
    }).catch((err) => {
        console.log(err);
    });
});

app.get('/product-delete/:id',(req,res)=>{
    Product.delete(req.params.id).then((result) => {
        if(result){
            res.redirect('/product-add');
        }
    }).catch((err) => {
        console.log(err);
    });
})

app.get('/product-update/:id',(req,res)=>{
    Product.getById(req.params.id).then((result) => {
        res.render('./product/product-update',{model:result[0]});
    }).catch((err) => {
        console.log(err);
    });
})

app.post('/product-update',(req,res)=>{
    const products = {
        Id:req.body.Id,
        name:req.body.name,
        price:req.body.price,
        description:req.body.description,
        categoryId:req.body.categoryId,
    };
    Product.Update(
        products.name,
        products.price,
        products.description,
        products.categoryId,
        products.Id
    ).then((result) => {
        if (result) {
            res.redirect('/product-add');
        }
       
    }).catch((err) => {
        console.log(err);
    });
});


app.get('/product-addDetails/:id',(req,res)=>{
    productionDetails.getById(req.params.id).then((result) => {
        res.render('./product/product-addDetails',{model:req.params.id});
    }).catch((err) => {
        console.log(err);
    });
   
});

app.post('/product-addDetails',(req,res)=>{
    const prodcutDetails = {
        productId :req.body.productId,
        productionCountry:req.body.productionCountry,
        productionDate:req.body.productionDate,
        longDescription:req.body.longDescription
    }
    productionDetails.Insert(
        prodcutDetails.productId,
        prodcutDetails.productionCountry,
        prodcutDetails.productionDate,
        prodcutDetails.longDescription)
        .then((result) => {
        if (result) {
            res.redirect('/product-add');
        }
    }).catch((err) => {
        console.log(err);
    });
});


app.get('/product-viewDetails/:id',(req,res)=>{
    productionDetails.getView(req.params.id).then((result) => {
        res.render('./product/product-viewDetails',{model:result[0]});
    }).catch((err) => {
        console.log(err);
    });
})

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
