const express = require('express')

const router = express();

router.get('/', (req, res) => {
    res.json({mssg: 'Get all games!!'})
})
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get single game!!'})
})
router.post('/:id', (req, res) => {
    res.json({mssg: 'Post single game!!'})
})
router.put('/:id', (req, res) => {
    res.json({mssg: 'Update single game!!'})
})
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete single game!!'})
})

module.exports = router