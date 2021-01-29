const express = require('express')
const router = express.Router(); //handles specific routes

// Add fruit model
const fruits = require('../models/fruits.js')//could be "../" or "../../"

// Add index route
router.get('/', (req, res) => {
    res.render('index.ejs', {
        //express looks for the folder views to look for index.ejs
        foods: fruits
        // key value pair fruits is data table, foods (left side) is the key for index.ejs
        // veggies: veggies an example
    });
})
//New this renders the html form
router.get('/new',(req,res)=>{
    res.render("new.ejs")
})
//Need to create a new handler: POST gets activated until clicked
router.post('/', (req,res)=>{
    if(req.body.readyToEat ==='on'){
        req.body.readyToEat =true;
    } else{
        req.body.readyToEat =false; 
    };
    //req.body is the payload not related to the html
    //gets the request body and adds it to the database
    fruits.push(req.body);
    res.redirect('/fruits');
})
//Delete 
router.delete('/:index', (req, res) => {
	fruits.splice(req.params.index, 1); //removes one (1) item from the array
	res.redirect('/fruits');  //redirect back to index route
});
//This is the get route for edit
router.get('/:index/edit', (req, res)=>{
	res.render('edit.ejs', //render views/edit.ejs
	 	{ //pass in an object that contains
	 		fruit: fruits[req.params.index], //the fruit object
	 		index: req.params.index //... and its index in the array
	 	}
	 );
});
router.put('/:index', (req, res) => { //:index is the index of our fruits array that we want to change
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
	fruits[req.params.index] = req.body; //in our fruits array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
	res.redirect('/fruits'); //redirect to the index page
});
//show
    router.get('/:index',(req,res)=>{
    // res.send(fruits[req.params.index])
    res.render("show.ejs",{fruit:fruits[req.params.index]})
});

module.exports =router;
