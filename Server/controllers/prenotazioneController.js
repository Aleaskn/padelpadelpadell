const express = require('express');
const app = express();
const axios = require('axios');
const db = require('../db');


//Per la ricerca di tutte le prenotazioni
app.get('/prenotazione', (req, res) => {
  let sql = `SELECT * FROM prenotazione`;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.json(result);
      
  });
}); 


//Per la ricerca di una prenotazione specifica
app.get('/prenotazione/:id', (req, res) => {
  let sql = `SELECT * FROM prenotazione WHERE id = '${req.params.id}' `;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.json(result);
      
  });

})

module.exports = app;