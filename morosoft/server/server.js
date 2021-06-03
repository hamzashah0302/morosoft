const express = require('express')
const db = require('./db')
const app = express()
app.use(express.json());
const port = 3003;


// SetUp routes 
const home = require('./routes/home')
const save = require('./routes/save')
const find = require('./routes/find')
const Delete = require('./routes/delete')
const update = require('./routes/update')
const login = require('./routes/login')

// app.use('/',home)
app.use('/save', save)
app.use('/find', find)
app.use('/delete', Delete)
app.use('/update', update)
app.use('/',login)

app.listen(port, () => {
    console.log(` app listening at http://localhost:${port}`)
})
