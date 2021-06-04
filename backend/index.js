const express = require('express')
const app = express()
const port = 8080
const db = require('./config/db')
const consign = require('consign')


consign()
        .include('./config/passport.js')
        .then('./config/middlewares.js')
        .then('./api')
        .then('./config/routes.js')
        .into(app)


app.db = db

app.listen(port,()=>{
    console.log(`port:${port}`)
})

