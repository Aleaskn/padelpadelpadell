const express = require('express');
const app = express();
const axios = require('axios');
const db = require('../db');


//Per la ricerca di tutte le strutture 
app.get('/struttura', (req, res) => {
  const sql = `SELECT * FROM struttura`;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.json(result);
      
  });
}); 


//Per la ricerca di un struttura specifica
app.get('/struttura/:id', (req, res) => {
  const sql = `SELECT * FROM struttura WHERE id = '${req.params.id}' `;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.json(result);
      
  });

})


//Per la ricerca di un struttura specifica in una determinata città

module.exports = app;