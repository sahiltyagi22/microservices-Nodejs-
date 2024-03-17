const express = require('express')
const app = express()

const routes = require('./routes/routes')


app.get('/blogs' ,(req,res)=>{
    res.send("this is the blogs homepage")
})

app.get('/blogs/create' , (req,res)=>{
    res.send("here you can create blogs")
})

app.listen(4000, (req,res)=>{
    console.log('blogs server is up');
})