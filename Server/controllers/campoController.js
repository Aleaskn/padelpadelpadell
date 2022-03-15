const express = require('express');
const app = express();
const axios = require('axios');
const db = require('../db');


//Per la ricerca dei campi 
app.get('/campo', (req, res) => {
  let sql = `SELECT * FROM campo`;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.json(result);
      
  });
}); 

//Per la ricerca di un campo specifico
app.get('/campo/:id', (req, res) => {
  let sql = `SELECT * FROM campo WHERE id = '${req.params.id}' `;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.json(result);
      
  });

})

//Per la ricerca di un campo specifico in una città


module.exports = app;