const dbconnect=require('./mongodb');
const update=async()=>{
    console.log("update function is running now")
    const result=await dbconnect();
    const result1=await result.updateOne(
        {name:'Motrola'},{$set:
        {name:'LAVA',price:'10k'}});
        console.log(result1);


}
update();