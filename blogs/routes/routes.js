const express = require('express')
const router = express.Router()


router.route('/blogs')
.get((req,res)=>{
    res.send('this is the blog route')
})

module.exports = router