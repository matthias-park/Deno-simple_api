const express = require('express');
const bodyParser = require('body-parser');

const todoRouter = require('./routes/todos');

const app = express();

app.use(bodyParser.json())

app.use((req,res,next) => {
    console.log('some middleware!');
    next();
})

app.use(todoRouter);

app.listen(3000);