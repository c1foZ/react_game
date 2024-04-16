const express = require('express')
const Game = require('../models/gameModel.js')

const createGame = async (req, res) => {
    const {title, players, description} = req.body

    try {
        const game = await Game.create({title, players, description} )
        res.status(200).json({ 
            game: game,
            message: 'Successfully added'
        })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getAllGames = async (req, res) => {
    try {
        const games = await Game.find();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getGame = async (req, res) => {
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
}

const deleteGame = async (req, res) => {
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
}

const updateGame = async (req, res) => {
    const { id } = req.params;
    const { title, players, description } = req.body;

    try {
        const game = await Game.findById(id);
        if (!game) {
            return res.status(404).json({ message: 'Game not found' });
        }

        game.title = title;
        game.players = players;
        game.description = description;

        await game.save();

        res.status(200).json({ message: 'Game updated successfully', updatedGame: game });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    createGame,
    getAllGames,
    getGame,
    deleteGame,
    updateGame
}