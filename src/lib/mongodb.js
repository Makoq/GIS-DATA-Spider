const mongodb=require("mongodb").MongoClient;
const url="mongodb://localhost:27017";
const dbName="nodeSpider";
const client=new mongodb(url,{useNewUrlParser:true});

client.connect(function(err){
    console.log("connected successful")

 
    
})

const insertDoc=function(db,arr,callback){
    const coll=db.collection("testInsert2")

    coll.insertMany(arr,function(err,res){
        
        callback(res)
    })
    console.log("insert successful")
}

 