const express = require('express')
const app = express();

const db = require('./database');

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

const personas = require('../router/personas');
app.use(personas);

app.listen(3000, ()=>{
    console.log('Server is up!');
})