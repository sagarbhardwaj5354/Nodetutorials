const express=require('express');
const app=express();
const ferry=(req,res,next)=>{
    if(!req.query.age){
        res.send('<h1>hello you have to enter the age here');
    }
        else if(req.query.age<18){
            res.send('<h1>hello i john:you are not eligible for this:</h1>');
        }
        else{
            res.send('<h1>you are eligible for voting</h1>');
        
        
    
    
        next();
        }

}
app.get('/home',ferry,(req,res)=>{

    res.send("<h1>Hello and welcome</h1>");
    
    
})
app.get('/about',(req,res)=>{
    res.send("<h1>Hello and welcome</h1>");
    
})
app.listen(2200);