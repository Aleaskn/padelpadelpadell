const express = require('express');
const app = express();
const axios = require('axios');
const db = require('../db');
//const userVerifyId = require('../middleware/userVerifyId'); 
const bodyParser = require('body-parser'); 

//Per la ricerca di tutte le prenotazioni
app.get('/prenotazione', (req, res) => {
  const sql =  `SELECT prenotazione.id, prenotazione.id_campo, user.id, user.uNome, user.email, citta.cNome, campo.timeSlot, prenotazione.giorno, prenotazione.ora, struttura.valutazione FROM prenotazione 
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
  const sql = `SELECT * FROM prenotazione WHERE id = '${req.params.id}'`;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.json(result);
      
  });

})

//Per la ricerca delle prenotazioni in una specifica città
app.get('/prenotazione/:cNome', (req, res) => {
  const prenotazione = req.query.prenotazione;
  const cNome = req.params.cNome;
  if (typeof (prenotazione) == 'undefined') {
    const sql = `SELECT * FROM prenotazione
    INNER JOIN citta ON prenotazione.id_citta = citta.id WHERE cNome = '${cNome}' `;

    db.query(sql).then(result => {  //mettere controllo sugli errori

      res.json(result);

    });
  } else {
    const sql =
      `SELECT prenotazione.id, prenotazione.id_campo, prenotazione.id_citta, prenotazione.id_struttura, prenotazione.id_user, prenotazione.giorno, prenotazione.ora, citta.cNome 
      FROM prenotazione 
      INNER JOIN citta ON prenotazione.id_citta = citta.id 
      WHERE id = '${prenotazione}' AND citta.cNome='${cNome}'`;

      db.query(sql).then(result => {  //mettere controllo sugli errori
      res.json(result);
    })
  }
})


//Per inserire i dati all'interno del db per la prenotazione
app.post('/prenotazione', (req, res) => {
  const sql = `INSERT INTO prenotazione(id, id_citta, id_campo, id_struttura, id_user, giorno, ora) 
  VALUES (
    '${req.body.id}',
    '${req.body.id_citta}',
    '${req.body.id_campo}',
    '${req.body.id_struttura}',
    '${req.body.id_user}',
    '${req.body.giorno}',
    '${req.body.ora}'
  )`;
  
    db.query(sql, (res, res)).then(() => {
      res.status(200).json({prenotazioneEffettuata: true});
     })
     .catch(() => {
      res.status(500).json({prenotazioneEffettuata: false});
    });
    
});


//Per eliminare la prenotazione effettuata
app.delete('/prenotazione/:id', (req, res) => {
  const sql = `DELETE FROM prenotazione WHERE id = '${req.params.id}'`;

  db.query(sql, (res, res)).then(() => {
    res.status(200).json({prenotazioneDelete: true});
   })
   .catch(() => {
    res.status(400).json({prenotazioneDelete: false});
  });

});


module.exports = app;