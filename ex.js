
const express = require('express');


const bodyParser = require('body-parser');

const adminRoutes= require('./routes/admin');

const shoutRoutes = require('./routes/shops')

const  app=  express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(adminRoutes);
app.use(shoutRoutes);


app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found<h1>')
})

app.listen(3500);