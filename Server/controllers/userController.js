const express = require('express');
const router = express();
const axios = require('axios');
const db = require('../db');
const bodyParser = require('body-parser'); 

//Per inserire i dati degli utenti tramite il login
router.post('/login', (req, res) => {
  const sql = `INSERT INTO user(id, email, uNome) 
  VALUES (
    '${req.body.id},',
    '${req.body.email},',
    '${req.body.uNome}'
  )`;
    db.query(sql, (req, res)).then(() => {
      res.status(200).json({signUp: true});
     })
     .catch(() => {
      res.status(500).json({signUp: false});
    });
    
});


module.exports = router;
