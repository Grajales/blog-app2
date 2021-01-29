//Express, Packages
const express = require('express');
const app = express();
// const fruits =require("./models/fruits.js");
const methodOverride = require('method-override');

//MIDDLEWARE STARTS

//Note that the order of the middleware apps matter, since they have dependencies
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));//most of the time is set to true
app.use(methodOverride('_method'));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//since controller has /fruits, this portion is carried on so it does not need to be added in the controller file
//Controllers and Routes
app.use("/fruits", require("./controllers/fruitsController.js"))
app.use("/users", require("./controllers/usersController.js"))
//End Controllers and routes

//MIDDLEWARE ENDS

app.listen(3000,()=>{
    console.log("I am listening");
});
