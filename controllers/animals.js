const express = require('express');
const { fruits, animals } = require('../models/Animals');
const router = express.Router();

// INDEX Route: returns all animals
router.get('/', (req, res) => {
    res.render('animals/index.ejs', { animals: animals });
});

// CREATE Route: new animals
router.get('/new', (req, res) => {
    res.render('fruits/new.ejs');
});

// SHOW Route: returns one item 
router.get('/:id', (req, res) => {
    const animals = animals[req.params.id];
    res.render('animals/show.ejs', { animal: animal });
});

// POST Route:
router.post('/', (req, res) => {
    req.body.extinct = req.body.extinct === 'on' ? true : false
    animals.unshift(req.body);
    res.redirect('/animals');
});

// DELETE Route:
router.delete('/:indexofAnimalsArray', (req, res) => {
    animals.splice(req.params.indexOfAnimalsArray, 1);
    res.redirect('/animals')
});

// EDIT Route:
router.get('/:indexOfAnimalsArray/edit', (req, res) =>{
    res.render('edit.ejs', {animal: animals[req.params.indexOfAnimalsArray], index: req.params.indexOfAnimalsArray})
});

router.put('/:indexOfAnimalsArray', (req, res) => {
    if(req.body.extinct === 'on') {
        req.body.extinct = true;
    } else {
        req.body.extinct = false;
    }
    animals[req.params.indexOfAnimalsArray] = req.body;
    res.redirect('/animals')
})

module.exports = router;