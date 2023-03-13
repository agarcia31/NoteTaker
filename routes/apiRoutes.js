const router = require('express').Router();
const db = require('../db/db');


router.get('/notes', (req, res) => {
  db.getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
  db.addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});


module.exports = router;