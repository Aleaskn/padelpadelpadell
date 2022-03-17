const express = require('express');
const app = express();
const axios = require('axios');
const db = require('../db');
const router = express.Router();

//Per la ricerca di tutte le città 
app.get('/citta', (req, res) => {
  res.send('200');
});



//Per la ricerca di un città specifica
app.get('/citta/:id', (req, res) => {
  const sql = `SELECT * FROM citta WHERE id = '${req.params.id}' `;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.send(result);

  });

})


//Per ricercare i campi in una determinata regione
app.get('/:regione', (req, res) => {
  const sql = `SELECT * FROM campo 
  INNER JOIN citta ON campo.id_citta = citta.id
  WHERE regione ='${req.params.regione}'`;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.send(result);

  });

})


//Per la ricerca di un campo in una città & la ricerca dei campi in una città specifica
app.get('/:cNome', (req, res) => {
  const campo = req.query.campo;
  const cNome = req.params.cNome;
  if (typeof (campo) == 'undefined') {
    const sql = `SELECT * FROM citta WHERE cNome = '${cNome}' `;

    db.query(sql).then(result => {  //mettere controllo sugli errori

      res.json(result);

    });
  } else {
    const sql =
      `SELECT *
      FROM campo 
      INNER JOIN citta ON campo.id_citta = citta.id 
      WHERE nome = '${campo}' and citta.cNome='${cNome}'`;

    db.query(sql).then(result => {  //mettere controllo sugli errori
      res.json(result);
    })
  }
})

module.exports = app;