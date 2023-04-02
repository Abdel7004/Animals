// Dependencies
const express = require('express');
const app = express();
const PORT = 3000
const methodOverride = require('method-override')

// Controller
const animalsController = require('./controllers/animals');

// Models - Database stuff
const models = require('./models/Animals');

const animals = models.animals

// Controllers - routes
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
// without urlencoded we get req.body undefined
app.use(express.json()); //parse JSON data in the request body
app.use(methodOverride('_method'))

app.use((req,res,next) => {
    console.log('this is my own middleware')
    // middleware does something
    // next tells server to do the next thing in the cycle
    next()
})

// Routes

app.get('/api', (req, res) => {
    res.json({
        models,
        status: 200
    })
})

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.use('/animals', animalsController);

app.get('/*', (req, res) => {
    res.render("404.ejs")
})

// Listener
app.listen(PORT, () => {
    console.log(`express is listening on port: ${PORT}`)
})