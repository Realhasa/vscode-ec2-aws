const express = require('express');
const path = require('path');
const pug = require('pug');

var app = express();



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.get('/home', (req, res) => {
    const subjects = ['Hello world','DevOps', 'CC', 'SPM', 'CD', 'CNS','prasad', 'cns lab', 'cc lab', 'and this is Rial from Bangladesh to save the World', 'Ameriaca--iran war will be very interesting and soon it will be come ,,, so let"s enjoy'];
    res.render('sample.pug', {'sub': subjects})
})







const port = 4005;
app.listen(port, () => {
    console.log(`Server listen at port ${port} and this Rial's home....`)
})