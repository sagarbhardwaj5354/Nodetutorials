const dbconnect=require('./mongodb');
const insert=async()=>{
    //console.log("this is insert function here")
    const db=await dbconnect();
    const result= await db.insertMany(
        [
        {name:'oppo',brand:'oppo5G',price:'60000',category:'mobile phone'},
        {name:'Nokia',brand:'Nokia5G',price:'60000',category:'mobile phone'},
        {name:'Motrola',brand:'motorola5G',price:'60000',category:'mobile phone'}
        ]);
    if(result.acknowledged)
        console.log("The Data is inserted in DB");

}
insert();