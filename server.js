// Dependencies
const express = require('express');
const app = express();
const PORT = 3000

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('default route')
})

const fruitsController = require('./controllers/animals');
app.use('/animals', fruitsController);

// Listener
app.listen(PORT, () => console.log(`express is listening on port: ${PORT}`));