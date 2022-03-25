const express = require("express");

const router = express.Router();

router.get('/page3',(req,res)=>{

    res.render('page3');

})


module.exports = router ; 