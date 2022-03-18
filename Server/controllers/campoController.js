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

//Per la ricerca di un campo specifico in una città


module.exports = router;