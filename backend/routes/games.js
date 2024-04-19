const express = require("express");
const Game = require("../models/gameModel.js");
const {
  createGame,
  getAllGames,
  getGame,
  deleteGame,
  updateGame,
} = require("../controllers/gameController.js");

const router = express();

router.get("/", getAllGames);
router.get("/:id", getGame);
router.post("/", createGame);
router.delete("/:id", deleteGame);

router.put("/:id", updateGame);

module.exports = router;
