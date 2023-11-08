const { response } = require('express');
const {MongoClient}=require('mongodb');
const url='mongodb://127.0.0.1:27017';
const databases='e-com';
const client=new MongoClient(url);
async function dbconnect(){
  let result=await client.connect();
  let db=result.db(databases);
  return db.collection('products');
}
module.exports=dbconnect;