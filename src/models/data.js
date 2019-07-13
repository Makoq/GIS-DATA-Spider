const mongoose=require("../lib/mongodb")

var dataItems = new mongoose.Schema({
    sourceSite:{type:String},
    author:{type:String},
    comments:{type:Array},
    contributers:{type:Array},
    createTime:{type:Date},
    detail:{type:String},
    displays:{type:Array},
    lastModifyTime:{type:Date},
    shareCount:{type:Number},
    thumbsUpCount:{type:Number},
    type:{type:String},
    reference:{type:String},
    keywords:{type:Array},
    description:{type:String},
    classifications:{type:Array},
    
    name: {type:String},
    userName:{type:String},
    authorship:{type:Array},
    relatedModels:{type:Array}



  });

exports.dataItems=mongoose.model('dataItem',dataItems)

 