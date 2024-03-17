const express = require('express')
const router = express.Router()

router.route('/auth')
.get((req,res)=>{
    res.send('here you will get the login page')
})

router.route('/auth/register')
.get((req,res)=>{
    res.send('here you will get the register page')
})


module.exports = router