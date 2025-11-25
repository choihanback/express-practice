var express = require('express');
const logger = require('morgan');

// npm install morgan --save 필요
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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

 