const express = require('express')
const Game = require('../models/gameModel.js')

const router = express();

router.get('/', async (req, res) => {
    try {
        const games = await Game.find();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const game = await Game.findById(id);
        if (!game) {
            return res.status(404).json({ message: 'Game not found' });
        }
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
router.post('/', async (req, res) => {
    const {title, players, description} = req.body

    try {
        const game = await Game.create({title, players, description} )
        res.status(200).json(game)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
router.put('/:id', (req, res) => {
    res.json({mssg: 'Update single game!!'})
})
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const game = await Game.findById(id);
        if (!game) {
            return res.status(404).json({ message: 'Game not found' });
        }
        
        await Game.findByIdAndDelete(id);
        res.status(200).json({ message: 'Game deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router