let router = require('express').Router();
let connection = require('../database/conn');
let queries = require('../database/queries/page4');
    

router.get('/page41',(req,res)=>{

    res.render('page4/page41');

})

router.get('/page42',(req,res)=>{

    res.render('page4/page42');

})



router.get('/page43', (req, res)=>{
    connection.query(queries.list, (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.render('page4/page43',{question: result});
        }
    })
});

router.get('/user1', (req, res)=>{
    connection.query(queries.list1, (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.render('page4/user1',{question: result});
        }
    })
});

router.get('/user2', (req, res)=>{
    connection.query(queries.list2, (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.render('page4/user2',{question: result});
        }
    })
});

router.get('/user3', (req, res)=>{
    connection.query(queries.list3, (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.render('page4/user3',{question: result});
        }
    })
});


module.exports = router ; 