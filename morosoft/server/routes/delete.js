var express = require('express');
var router = express.Router();
const Items = require('../models/items')


router.post('/' , async function(req, res){
    try {
        await Items.findOneAndDelete({id: req.body.id}, function(err){
            if(err)  {return res.send(err)}
            res.send("data deleted")
        })
        
    } catch (error) {
        console.log(error)
        res.send('Error'+error)
    }
    
})

module.exports = router