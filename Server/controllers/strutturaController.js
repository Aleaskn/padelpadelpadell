const express = require('express');
const axios = require('axios');
const db = require('../db');
const bodyParser = require('body-parser'); 
const router = express.Router();

//Per la ricerca di tutte le strutture 
router.get('/', (req, res) => {
  const sql = `SELECT * FROM struttura`;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.send(result);
      
  });
}); 

//Per la ricerca di una specifica struttura tramite id 
router.get('/:id', (req, res) => {
  const sql = `SELECT * FROM struttura WHERE id = '${req.params.id}' `;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.send(result);

  });

})



//Per la ricerca delle strutture in una determinata regione e in una determinata città
router.get('/regione/:regione', (req, res) => {
  const cNome = req.query.cNome;
  const regione = req.params.regione;
  if (typeof (cNome) == 'undefined') {
    const sql = `SELECT * FROM struttura 
                  INNER JOIN citta ON struttura.id_citta = citta.id 
                  WHERE citta.regione='${regione}'
    `;

    db.query(sql).then(result => {  //mettere controllo sugli errori

      res.send(result);

    });
  } else {
    const sql =
      `SELECT * FROM struttura 
      INNER JOIN citta ON struttura.id_citta = citta.id 
      WHERE cNome = '${cNome}' and citta.regione='${regione}'`;

    db.query(sql).then(result => {  //mettere controllo sugli errori
      res.send(result);
    })
  }
})




module.exports = router;