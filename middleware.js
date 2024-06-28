const express = require('express')
const app = express;

app.use(function(req, res, next) {
    console.log('a new request is received');
    next()
})


app.listen(8000)