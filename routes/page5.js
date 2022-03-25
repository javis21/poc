const express = require("express");

const router = express.Router();

router.get('/page5',(req,res)=>{

    res.render('page5');

})


module.exports = router ; 