const express = require('express');
const app = express();
const fruits =require("./models/fruits.js");
//MIDDLEWARE
app.use((req, res, next) => {
    // console.log('I run for all routes');
    console.log(req.originalUrl);
    next();
});
app.use(express.urlencoded({extended:true}));
app.get('/fruits', (req, res) => {
    res.render('index.ejs', {
        foods: fruits
        // veggies: veggies an example
    });
})
//MIDDLEWARE

//ROOTS
//index
app.get('/fruits',(req,res)=> res.render('index.ejs'));

//New
app.get('/fruits/new',(req,res)=>{
    res.render("new.ejs")
})
//Need to create a new handler: POST
app.post('/fruits', (req,res)=>{
    if(req.body.readyToEat ==='on'){
        req.body.readyToEat =true;
    } else{
        req.body.readyToEat =false; 
    };
    //req.body is the payload not related to the html
    fruits.push(req.body);
    res.redirect('/fruits');
    // console.log(fruits);
    // res.send('saved!')
})

//show
app.get('/fruits/:index',(req,res)=>{
    // res.send(fruits[req.params.index])
    res.render("show.ejs",{fruit:fruits[req.params.index]})
});
// //get route for Awesome
// app.get('/fruits/awesome', (req,res) =>{
//     res.send("fruits are awesome")
// })
// app.get('/fruits/count', (req,res)=>{
//     let fruit = req.query.fruit
//     let count = fruits.filter((val)=>{
//         return val === fruit
//     }).length;
//     res.send(`The number of available ${fruit}/s are ${count}`);

// })



app.listen(3000,()=>{
    console.log("I am listening");
});