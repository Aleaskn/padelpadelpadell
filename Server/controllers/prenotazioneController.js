const express = require('express');
const app = express();
const axios = require('axios');
const db = require('../db');


//Per la ricerca di tutte le prenotazioni
app.get('/prenotazione', (req, res) => {
  let sql =  `SELECT campo.giorno, campo.ora FROM  campo 
              INNER JOIN prenotazione
              ON campo.giorno = prenotazione.giorno, campo.ora = prenotazione.ora;

               SELECT user.nome, user.email FROM  user 
               INNER JOIN prenotazione
               ON user.nome = prenotazione.userName, user.email = prenotazione.userMail;

               SELECT struttura.valutazione FROM  struttura 
               INNER JOIN prenotazione
               ON struttura.valutazione = prenotazione.valutazione;

               SELECT * FROM prenotazione`;

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
  let sql = `SELECT campo.giorno, campo.ora FROM  campo 
  INNER JOIN prenotazione
  ON campo.giorno = prenotazione.giorno, campo.ora = prenotazione.ora;

  SELECT user.nome, user.email FROM  user 
  INNER JOIN prenotazione
  ON user.nome = prenotazione.userName, user.email = prenotazione.userMail;

  INSERT INTO prenotazione (id, id_user, id_campo, giorno, ora, userName, userMail) 
  VALUES (
    '${req.body.id}',
    '${req.body.id_user}',
    '${req.body.id_campo}',
    '${req.body.giorno}',
    '${req.body.ora}',
    '${req.body.userName}',
    '${req.body.userMail}'
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