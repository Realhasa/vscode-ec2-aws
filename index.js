const express = require('express');
const path = require('path');
const pug = require('pug');

var app = express();



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.get('/home', (req, res) => {
    const subjects = ['DevOps', 'CC', 'SPM', 'CD', 'CNS', 'cns lab', 'cc lab', 'and this Rial from Bangladesh to save the World'];
    res.render('sample.pug', {'sub': subjects})
})







const port = 4000;
app.listen(port, () => {
    console.log(`Server listen at port ${port} and this Rial's home....`)
})