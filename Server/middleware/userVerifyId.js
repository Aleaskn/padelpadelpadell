const express = require('express');
const app = express();
const axios = require('axios');
const db = require('../db');

function del(req, res, next) {
  if(req.query.id === '${req.params.id}'){
    next()
    return
  }
    res.send('Non puoi eliminare una prenotazione che non corrisponde al tuo account')
}