
 
mongoose.connect(config.mongodb,{useNewUrlParser: true})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connected");
  
});

var kittySchema = new mongoose.Schema({
    name: String,

  });

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: 'Silence' });

console.log(silence.name); 

silence.save(function (err, silence) {
    if (err) return console.error(err);
  
  });