const config=require("../config/default")
const mongoose=require("mongoose");
 
mongoose.connect(config.mongodb,{useNewUrlParser: true})

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // we're connected!
  console.log("connected");
  
});

module.exports=mongoose;
