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



module.exports = router;