const express = require('express');
const app = express();
const axios = require('axios');
const db = require('../db');
const bodyParser = require('body-parser'); 


//Per inserire i dati degli utenti tramite il login
app.post('/login', (req, res) => {
  const sql = `INSERT INTO user(id, email, uNome) 
  VALUES (
    '${req.body.id}',
    '${req.body.email}',
    '${req.body.nome}'
  )`;
    db.query(sql, (res, res)).then(() => {
      res.status(200).json({signUp: true});
     })
     .catch(() => {
      res.status(500).json({signUp: false});
    });
    
});


module.exports = app;
