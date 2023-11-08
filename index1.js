
// // const http=require('http');
// // // const data=require('./data');
// // http.createServer((req,res)=>{
// // //     res.writeHead(200,{'content-type':'application\json'});
// // //     res.write(JSON.stringify(data));
// // //     res.end();


// // }).listen(5100);
// // const fs=require('fs');
// // const input=process.argv;
// // if(input[2]=='add'){
// //     fs.writeFileSync(input[3],input[4])
// // }else if(input[2]=='remove'){
// //     fs.unlinkSync(input[3]);
// // }
// // else{
// //     console.log("invalid choice choice you are enter");
// // }
// const { isUtf8 } = require('buffer');
// const fs=require('fs');
// const path=require('path');
// const dirpath=path.join(__dirname,'crud');
// // for(i=0;i<5;i++){
// //     fs.writeFileSync(dirpath+"/hello" +i+".txt" ,"a simple test file here")
// // }
// // fs.readdir(dirpath,(err,file)=>{
// //     file.forEach(item => {
// //         console.log(item);
//    // });
//    const filepath=`${dirpath}/apple.txt`;
// //    fs.writeFileSync(filepath,'this is our create or insert choice here');
// // fs.readFile(filepath,'Utf8',(err,item)=>{
// //     console.log(item);
// // })  
// //add file here operation  
// // fs.appendFile(filepath,' and file name is apple.txt',(err)=>{
// //     if(!err){
// //         console .log("there is any type of error here")
// //     }
// // })
// //RENAME HERE 
// fs.rename(filepath,`${dirpath}/king.txt`,(err)=>{
//     if(!err){
//      console .log("there is any type of error here")
//     }
// })
let a=10;
b=20;
console.log("this is asyncronous programming");
let waitcontent=new Promise((resolve, reject) => {
setTimeout(()=>{
    console.log("this is asyncronous programming and it will execute after"); 
    resolve(30)
    
},3000)
})
waitcontent.then((data)=>{
    console.log(a+data);
    data.listen(3100);
 })
    
