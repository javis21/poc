const mysql = require("mysql");
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST ,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
});

exports.register = (req,res ) => {
    console.log(req.body);
    

//     const {    noo ,yess, idkk   } = req.body;


//     db.query('INSERT INTO ans SET ?',{noo:noo , yess: yess  , idkk: idkk},(error,results)=>{

//     if (error){
//         console.log(error);

//     }else {
      
//     }
// });

// -----------
// const answer= req.body;


// db.query('INSERT INTO ans SET ?',answer,(error,results)=>{

// if (error){

// }else {
  
// }
// });





const answer=req.body;


// db.query('INSERT INTO answer SET ?',answer,(error,results)=>{

    
        const list= `SELECT num FROM answer    ORDER BY ID DESC LIMIT 3   `;

   
    var num='SELECT num from answer ORDER BY ID DESC LIMIT 1';
    db.query(num, function (err, dat, fields) {
     
       
       
         console.log(dat[0].num);
    
    num =dat[0].num ;
    num ++;

console.log(num);
console.log(list);
// console.log(dat);


    for (var key of Object.keys(answer)) {
       
       p = answer[key][0]
       q = answer[key][1]
    db.query('INSERT INTO answer SET ?', {num:num , q1:key , q2:p ,q3:q });

    }

});
var sql='SELECT yess,noo,idkk FROM ans ORDER BY ID DESC LIMIT 1';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
   
    res.render('page5', {  data: data});

  });
 


 




}

