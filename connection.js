const dbconnect= require ('./mongodb.js');

  //let response=await collection.find({}).toArray();
  //console.log(response);

// dbconnect().then((resp)=>{
//   resp.find({name:"Samsung"}).toArray().then((data)=>{
//     console.warn(data)

//   })
// })
const main=async()=>{
  let data=await dbconnect();
   data=await data.find().toArray();
  console.warn(data);
}
main();
