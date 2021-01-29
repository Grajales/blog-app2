//Express, Packages
const express = require('express');
const app = express();
const fruits =require("./models/fruits.js");
const methodOverride = require('method-override');
//MIDDLEWARE Starts
//Note that the order of the middleware apps matters, since they have dependencies
app.use((req, res, next) => {
    console.log('I run for all routes');
    // console.log(req.originalUrl);
    next();
});
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use("/fruits", require("./controllers/fruitsController.js"))
//since controller has /fruits, this portion is carried on so it does not need to be added in the controller file
//MIDDLEWARE END 

//ROUTES
//index
// app.get('/fruits', (req, res) => {
//     res.render('index.ejs', {
//         foods: fruits
//         // key value pair fruits is data table, foods (left side) is the key for index.ejs
//         // veggies: veggies an example
//     });
// })


// //Delete 
// app.delete('/fruits/:index', (req, res) => {
// 	fruits.splice(req.params.index, 1); //removes one (1) item from the array
// 	res.redirect('/fruits');  //redirect back to index route
// });
//New this renders the html form
// app.get('/fruits/new',(req,res)=>{
//     res.render("new.ejs")
// })
//Need to create a new handler: POST gets activated until clicked
// app.post('/fruits', (req,res)=>{
//     if(req.body.readyToEat ==='on'){
//         req.body.readyToEat =true;
//     } else{
//         req.body.readyToEat =false; 
//     };
//     //req.body is the payload not related to the html
//     //gets the request body and adds it to the database
//     fruits.push(req.body);
//     res.redirect('/fruits');
// })
// //This is the get route for edit
// app.get('/fruits/:index/edit', (req, res)=>{
// 	res.render('edit.ejs', //render views/edit.ejs
// 	 	{ //pass in an object that contains
// 	 		fruit: fruits[req.params.index], //the fruit object
// 	 		index: req.params.index //... and its index in the array
// 	 	}
// 	 );
// });
//update the index of the fruit we want to update

// app.put('/fruits/:index', (req, res) => { //:index is the index of our fruits array that we want to change
//     if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
//         req.body.readyToEat = true;
//     } else { //if not checked, req.body.readyToEat is undefined
//         req.body.readyToEat = false;
//     }
// 	fruits[req.params.index] = req.body; //in our fruits array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
// 	res.redirect('/fruits'); //redirect to the index page
// });
// //show
// app.get('/fruits/:index',(req,res)=>{
//     // res.send(fruits[req.params.index])
//     res.render("show.ejs",{fruit:fruits[req.params.index]})
// });



app.listen(3000,()=>{
    console.log("I am listening");
});