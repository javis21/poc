const express = require("express");

const router = express.Router();

router.get('/page2',(req,res)=>{

    res.render('index');

})


module.exports = router ; 