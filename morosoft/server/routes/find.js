var express = require('express');
var router = express.Router();
app = express()
app.use(express.json());
const Items = require('../models/items')

router.get('/', (req, res) =>{
    Items.find({},(function (err, items) {
            if (err) return res.status(404).json('no data found')
            res.status(200).json(items)
            })
        )
    
})
module.exports = router