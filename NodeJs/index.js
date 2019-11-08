//1. call mysql package

const mysql= require('mysql');

//2. call express package

const express= require('express');

//3. call body-parser package

const bodyparser = require('body-parser')

//4. instance a new express application

var app= express();

//5. Enable json request

app.use(bodyparser.json());

//6. Create mysql database connection

var connectionDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'market'
    });
//7. Validate mysql connection

connectionDB.connect((err)=>{
    if(!err)
        console.log(' ::: Succesfull connection to Data Base');
    else
        console.log('DB connection failed \n Error: ' + JSON.stringify(err,undefined,2));
});


//8. Run server

app.listen(3000,()=>console.log('Server is running at port 3000'));

//9. Get all users

app.get('/list_users',(req,res)=>{
    connectionDB.query('SELECT * FROM users',(err,rows,fields) =>{
        if(!err){
            console.log(rows);
            res.send(rows);
        }else{
            console.log(err);    
        }
    });

});


//10. Get an users

app.get('/list_users/:id',(req,res)=>{
    connectionDB.query('SELECT * FROM users WHERE id = ?',[req.params.id],(err,rows,fields) =>{
        if(!err){
            console.log(rows);
            res.send(rows);
        }else{
            console.log(err);    
        }
    });

});

//11. Delete an users

app.delete('/list_users/:id',(req,res)=>{
    connectionDB.query('DELETE * FROM users WHERE id = ?',[req.params.id],(err,rows,fields) =>{
        if(!err){
            console.log(' the user has been deleted');
        }else{
            console.log(err);    
        }
    });

});
