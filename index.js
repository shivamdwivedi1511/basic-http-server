const express = require("express");
const homepage = require('path')
const app = express();
const port = 1511;

app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(__dirname +'/homepage.html')
})

app.get('/another-api', (req,res)=>{
    res.send('another api call')
})


app.listen(port);
