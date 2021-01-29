const express = require('express');
const app = express();
const fruits =['apple', 'banana','pear'];
// app.get('/somedata',(req,res)=>{
//     res.send('here is your new information');
// });
//get route for Awesome
app.get('/fruits/awesome', (req,res) =>{
    res.send("fruits are awesome")
})
app.get('/fruits/count', (req,res)=>{
    let fruit = req.query.fruit
    let count = fruits.filter((val)=>{
        return val === fruit
    }).length;
    res.send(`The number of available ${fruit}/s are ${count}`);

})
app.get('/fruits/:index',(req,res)=>{
    res.send(fruits[req.params.index])
});


app.listen(3000,()=>{
    console.log("I am listening");
});