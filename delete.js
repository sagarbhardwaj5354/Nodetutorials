const dbconnect=require('./mongodb');
const delet=async()=>{
    console.log('detetion is performed here:..');
    const db= await dbconnect();
    const result= await db.deleteOne({name:'LAVA'});
    console.log(result);
    if(result.acknowledged){
        console.log("THE DATA IS DELETED FROM HERE");

    }
    

}
delet();