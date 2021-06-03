var express = require('express');
var router = express.Router();
const Items = require('../models/items')

router.post('/',async function (req,res){
    try {
        Items.updateOne({id: req.body.id}, {name : req.body.name}, function(err, data){
            if(err){return res.send(err)}
            res.send(data)
        })
    } catch (error) {
        
    }
})

module.exports = router