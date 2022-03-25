let router = require('express').Router();
let connection = require('../database/conn');
let queries = require('../database/queries/question');

router.get('/list', (req, res)=>{
    connection.query(queries.list, (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.render('templates/question',{question: result});
        }
    })
});




router.get('/edit/:id', (req, res)=>{
    connection.query(queries.question(req.params.id),(err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.render('templates/edit',{question: result});
        }
    })
});

router.post('/edit/:id', (req, res)=>{
    // idname: req.params.idname,
    let data={
        id: req.params.id,
        idname: req.body.idname,
        name: req.body.name,
        question: req.body.question,
        
    }

    connection.query(queries.edit(data),(err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect('/question/list')
        }
    })
});


router.get('/delete/:id', (req, res)=>{
    connection.query(queries.delete(req.params.id),(err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect('/question/list')
        }
    })
});

router.get('/add', (req, res)=>{
    res.render('templates/add');
});


router.post('/add', (req, res)=>{

    let data={
       
        idname: req.body.idname,
        name: req.body.name,
        question: req.body.question,
    }

    connection.query(queries.add(data),(err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect('/question/list')
        }
    })
})







module.exports =router;