const express = require('express');
const router = express();
const axios = require('axios');
const db = require('../db');


//Per la ricerca dei campi 
router.get('/', (req, res) => {
  const sql = `SELECT * FROM campo`;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.send(result);
      
  });
}); 

//Per la ricerca di un campo specifico
router.get('/:id', (req, res) => {
  const sql = `SELECT * FROM campo WHERE id = '${req.params.id}' `;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.send(result);
      
  });

})



//Per la ricerca di un campo in una determinata regione e in una determinata città
router.get('/regione/:regione', (req, res) => {
  const cNome = req.query.cNome;
  const regione = req.params.regione;
  if (typeof (cNome) == 'undefined') {
    const sql = `SELECT * FROM campo 
                  INNER JOIN citta ON campo.id_citta = citta.id 
                  WHERE citta.regione='${regione}'
    `;

    db.query(sql).then(result => {  //mettere controllo sugli errori

      res.send(result);

    });
  } else {
    const sql =
      `SELECT * FROM campo 
      INNER JOIN citta ON campo.id_citta = citta.id 
      WHERE cNome = '${cNome}' and citta.regione='${regione}'`;

    db.query(sql).then(result => {  //mettere controllo sugli errori
      res.send(result);
    })
  }
})

module.exports = router;