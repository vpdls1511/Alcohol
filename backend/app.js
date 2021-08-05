const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: false}))
app.use('/img', express.static('items/img/alcohol'))
app.use('/api/v1/', require('./route/list'))

app.listen(port, ()=>{
    console.log(`running Alcohol BackendServer http://localhost:${port}/`)
})
