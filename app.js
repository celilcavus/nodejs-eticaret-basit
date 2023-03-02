const expres = require('express');
var app = expres();

app.set('view engine','ejs');
app.us(expres.static('public'));


app.get('/',(req,res)=>{
   res.render('index');
})

app.listen(3000,()=>{
    console.log("3000 portu dinlemede");
});
