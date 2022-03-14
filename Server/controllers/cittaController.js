const express = require('express');
const app = express();
const axios = require('axios');
const db = require('../db');

app.get('/citta', (req, res) => {
  let sql = `SELECT * FROM citta`;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.json(result);
      
  });
}); 


app.get('/citta/:id', (req, res) => {
  let sql = `SELECT * FROM citta WHERE id = ${req.params.id}`;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.json(result);
      
  });

})


module.exports = app;