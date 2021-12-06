const express= require('express');
const app = express();
const port = 3000;
const mongo = require('./mongoDatabase');
const path = require("path");
var cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser')
//body parser handles parsing info being sent to server
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('you hit me on port 3000')
})

app.post('/addRecipe', async (req, res) => {
    let recipeData = req.body;
    let id = {id : req.body.title + req.body.author};
    //want to send this to mongo
    await mongo.main('addRecipe', id, recipeData);
});
app.get('/findAll', async (req, res) => {

    let result = await mongo.main('findAll');
    res.send(result)
})
app.listen(3000, ()=> {
    console.log('server listening on port 3000');
});