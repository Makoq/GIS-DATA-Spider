const data=require("../models/data").dataItems

var create=function(obj){

    var dataItems=new data(obj);

    dataItems.save((err,res)=>{
        if(err){
            console.log("Error:"+err)
        }else{
            console.log("ok")
        }

    })

}

module.exports.create=create;