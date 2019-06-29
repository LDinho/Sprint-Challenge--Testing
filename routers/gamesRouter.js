const express = require('express');
const router = express.Router();

const gamesData = [
  {
    title: 'Pacman',
    genre: 'Arcade',
    releaseYear: 1980
  },
  {
    title: 'Battle',
    genre: 'Sci-fi',
    releaseYear: 2007
  }
];

router.use(express.json());

router.get('/', (req, res) => {
  res.json(gamesData);
});

router.post('/', (req, res) => {
  const newGame = req.body;
  const { title, genre, releaseYear } = newGame;

  if (title && genre) {
    res.json([
      {
        title: 'Pacman',
        genre: 'Arcade',
        releaseYear: 1980
      },
      {
        title: 'Battle',
        genre: 'Sci-fi',
        releaseYear: 2007
      },
      ...newGame
    ])

    return res.status(200).json(newGame);

  } else {

    res.status(422).json({
      message: 'title and genre fields are required.'
    });
  }


});

module.exports = router;
