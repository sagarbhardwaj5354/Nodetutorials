//  const express=require('express');
//  const app=express();
//  app.use((re,res,next)=>{
    

//  })
//  app.get('/',(req,res)=>{
//      console.log("hello");
//      res.end();
//  })
//  app.listen(3001),()=>{
//      console.log("server connected");
 //}
//  const express=require('express');
//  const app=express();
//  app.get('',(req,res)=>{
//    app.set('view engine','ejs');
        
//  });
//  app.get('/about',(req,res)=>{
//      res.send(`
//      <input type="text" placeholder="enter user name">
//      <button > Click Me</button>  
//      <a href="/home" >go to home page</a>
//      value="${req.query.name}"`)
//  })
//  app.get('/profile',(_,res)=>{
//    const user={
//       name:'sagar',
//       lname:'Bhardwaj'
//    }
//    res.render('profile',{user});
//  });
//  app.get('/home',(req,res)=>{
//     res.send("<h1>HELLO WORLD1</h1>");
//  })
//  app.listen(5100);
//console.log("hello world here");
//console.log("hello world here");

//......---------DATABASE CONNECTIVITY IN MONGODB...------------
// const { response } = require('express');
// const {MongoClient}=require('mongodb');
// const url='mongodb://127.0.0.1:27017';
// const databases='e-com';
// const client=new MongoClient(url);
// async function getData(){
//   let result=await client.connect();
//   let db=result.db(databases);
//   let collection =db.collection('products');
//   let response=await collection.find({}).toArray();
//   console.log(response);
// }
// getData();


