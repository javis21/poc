const express = require("express");

const router = express.Router();

router.get('/page31',(req,res)=>{

    res.render('page31');

})


module.exports = router ; 