const express = require('express');
const app = express();
const axios = require('axios');
const db = require('../db');


//Per inserire i dati degli utenti tramite il login
app.post('/login', (res, req) => {
  let sql = `INSERT INTO user (id, tell, email, nome) 
  VALUES (
    '${req.body.id}',
    '${req.body.tell}',
    '${req.body.email}',
    '${req.body.nome}'
  )`;

    res.statusMessage(200).json({
      status: 200,
      success: true
    });
  
})

//ci sarà una post per aggiungere le mail, id, nome, tell

module.exports = app;
