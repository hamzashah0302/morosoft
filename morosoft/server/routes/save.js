var express = require('express');
var router = express.Router();
const Items = require('../models/items')

router.post('/', (req,res)=>{
    const data = new Items({ id : req.body.id , name: req.body.name });
    data.save()
    res.send(data)

})
module.exports = router