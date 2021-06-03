const mongoose = require('mongoose')

const morosoftSchema = new mongoose.Schema({
    username: String,
    password: String
    });

const Morosoft = mongoose.model('morosoft', morosoftSchema);

module.exports = Morosoft;
