const express= require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    console.log('you are hitting the get')
})
app.listen(3000, ()=> {
    console.log('server listening on port 3000');
});