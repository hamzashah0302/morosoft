const mongoose = require('mongoose')

const items = new mongoose.Schema({
    id: String,
    name: String
    });

const Items = mongoose.model('items', items);

module.exports = Items;