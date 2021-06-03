var express = require('express');
app = express()
const authControler = require('../controler/authControler');
app.use(express.json());
var router = express.Router();


router.post('/',authControler.login)

module.exports = router