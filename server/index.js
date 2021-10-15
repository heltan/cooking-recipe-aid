const express= require('express');
const app = express();
const port = 3000;
const mongo = require('../src/mongoDatabase');
const path = require("path");
var cors = require('cors');
app.use(cors());



app.get('/', (req, res) => {
    console.log('you are hitting the get????');
    res.send('you hit me on port 3000')
})
app.listen(3000, ()=> {
    console.log('server listening on port 3000');
});