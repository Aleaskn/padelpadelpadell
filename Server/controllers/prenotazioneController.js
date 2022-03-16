const express = require('express');
const app = express();
const axios = require('axios');
const db = require('../db');


//Per la ricerca di tutte le prenotazioni
app.get('/prenotazione', (req, res) => {
  let sql =  `SELECT prenotazione.id, prenotazione.id_campo, user.id, user.uNome, user.email, citta.cNome, campo.giorno, campo.ora, struttura.valutazione FROM prenotazione 
              INNER JOIN citta
              ON citta.id = prenotazione.id_citta
              INNER JOIN struttura
              ON struttura.id = prenotazione.id_struttura
              INNER JOIN campo
              ON campo.id = prenotazione.id_campo
              INNER JOIN user
              ON user.id = prenotazione.id_user;`;

   db.query(sql).then(result => {  //mettere controllo sugli errori

    res.json(result);
      
  });
}); 


//Per la ricerca di una prenotazione specifica
app.get('/prenotazione/:id', (req, res) => {
  let sql = `SELECT * FROM prenotazione WHERE id = '${req.params.id}'`;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.json(result);
      
  });

})

app.post('/prenotazione', (req, res) => {
  let sql = `INSERT INTO prenotazione (id, id_campo, id_user, giorno, ora) 
  VALUES (
    '${req.body.id}',
    '${req.body.id_campo}',
    '${req.body.id_user}',
    '${req.body.giorno}',
    '${req.body.ora}'
  )`;
  
    db.query(sql, (res, res)).then(() => {
      res.status(200).json({prenotazione: true});
     })
     .catch(() => {
      res.status(500).json({prenotazione: false});
    });
    
});

//Per eliminare la prenotazione effettuata
app.delete('/prenotazione', (req, res) => {
  let sql = `DELETE FROM prenotazione WHERE id = '${req.params.id}'`;

  db.query(sql, (res, res)).then(() => {
    res.status(200).json({prenotazione: true});
   })
   .catch(() => {
    res.status(400).json({prenotazione: false});
  });

});

module.exports = app;