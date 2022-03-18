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



module.exports = router;