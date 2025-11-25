var express = require('express');
const logger = require('morgan'); // npm install morgan --save
const axios = require('axios'); // npm install axios --save

var app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use(logger('dev'));


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
    res.send(`User id is ${req.params.id}`);
})

app.get('/user', (req, res) => {
    res.send(`User id is ${req.query.id}`);
})

app.post('/user', (req, res) => {
    console.log(req.body.name);
    res.send(req.body);
})

app.get('/musicSearch/:term', async (req, res) => {
    const params = {
        term : req.params.term,
        entity : "album",
    }
    var response = await axios.get('https://itunes.apple.com/search', {params : params});
    console.log(response.data);
    res.json(response.data);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

 