
let router = require('express').Router();

router.get('/', (req, res)=>{
  res.render('layouts/index')
})

module.exports =  router;