const express = require('express');
const app = express();
const axios = require('axios');
const db = require('../db');
const { query } = require('../db');


//Per la ricerca di tutte le città 
app.get('/citta', (req, res) => {
  let sql = `SELECT * FROM citta`;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.json(result);

  });
});



//Per la ricerca di un città specifica
app.get('/citta/:id', (req, res) => {
  let sql = `SELECT * FROM citta WHERE id = '${req.params.id}' `;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.json(result);

  });

})


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
      `SELECT citta.id, campo.id, campo.nome, citta.cNome 
      FROM campo 
      INNER JOIN citta ON campo.id_citta = citta.id 
      WHERE nome = '${campo}' and citta.cNome='${cNome}'`;

    db.query(sql).then(result => {  //mettere controllo sugli errori
      res.json(result);
    })
  }
})

module.exports = app;