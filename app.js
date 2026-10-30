require('dotenv').config()

const express = require('express');
const path = require('path');

const middleware_header = require('./middleware/middleware_header');
const Controllers = require('./controller/pageController');
const apiRouter = require('./Routes/apiRoute');

const app = express();

app.set('views', './views'); // specify the views directory
app.set('view engine', 'ejs'); // register the template engine

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.set('views',path.join(__dirname,'views'));

// app.use(middleware_header);

app.get('/',Controllers.Home);

app.get('/about',Controllers.About);

app.get('/users',Controllers.User);

app.get('/contact',Controllers.Contact);

app.use('/api',apiRouter);

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(process.env.PORT,()=>{
    console.log(`Server started at Port ${process.env.PORT}`)
})