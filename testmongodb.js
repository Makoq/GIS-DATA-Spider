const mongodb=require("mongodb").MongoClient;
const url="mongodb://localhost:27017";
const dbName="nodeSpider";
const client=new mongodb(url);

client.connect(function(err){
    console.log("connected successful")

    // const db= client.db(dbName);

    // insertDoc(db,function(){
    //     client.close();
    // })
    
})

const insertDoc=function(db,callback,arr){
    const coll=db.collection("testInsert")

    coll.insertMany(arr,function(err,res){
        console.log("insert successful")
        callback(res)
    })
}

module.exports.insertDoc=insertDoc;



 