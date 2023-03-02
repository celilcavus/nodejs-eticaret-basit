const expres = require('express');
var app = expres();



app.get('/',(req,res)=>{
    res.redirect('index');
})

app.listen(3000,()=>{
    console.log("3000 portu dinlemede");
});
