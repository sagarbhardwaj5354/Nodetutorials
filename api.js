const express=require('express');
const dbconnect=require('./mongodb');
const mongodb=require('mongodb')
const app=express();
app.use(express.json());
//THIS IS READ ONLY DATA FROM THE WEBBROWSER
app.get('/',async (req,res)=>{
    const data=await dbconnect();
   const data1=await data.find().toArray();
    res.send(data1);
    
});
///THE DATA WILL STORED  TO SERVER SIDE USING THIS API
app.post('/',async(req,res)=>{
    const data=await dbconnect();
    let result=await data.insertOne(req.body);
    //console.log(req.body);
    res.send(result);
});

    app.put("/name",async(req,res)=>{
        let data=await dbconnect();
        let result=await data.updateOne({name:req.params.name},{$set:req.body})
        //console.log(req.body);
        res.send({result:"updated"});
    })
    app.delete('/:id',async(req,res)=>{
        let data=await dbconnect();
        let result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
        //console.log(req.body);
        
       // console.log(req.params.id);
        res.send(result);
        if(result.acknowledged){
            console.log("Deleted succusfully from the mongodb");
            console.log(req.params.id);
        }
    })

app.listen(5000);