const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://abc:abc@cluster0.hefj1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', function() {
    console.log("DB connected ")
  // we're connected!
});
module.exports =db