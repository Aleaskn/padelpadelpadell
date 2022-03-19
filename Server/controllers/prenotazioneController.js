const express = require('express');
const router = express();
const axios = require('axios');
const db = require('../db'); 
const bodyParser = require('body-parser'); 


//Per la ricerca di tutte le prenotazioni
router.get('/', (req, res) => {
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

    res.send(result);
      
  });
}); 


//Per la ricerca di una prenotazione specifica
router.get('/:id', (req, res) => {
  const sql = `SELECT * FROM prenotazione WHERE id = '${req.params.id}'`;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.send(result);
      
  });

})

//Per la ricerca delle prenotazioni in una specifica città
router.get('/giorno/:giorno', (req, res) => {
  const sql = `SELECT * FROM prenotazione 
  WHERE giorno = '${req.params.giorno}'`;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.send(result);
      
  });

})


//Per inserire i dati all'interno del db per la prenotazione
router.post('/add', (req, res) => {
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
router.delete('/del/:id', (req, res) => {
  const sql = `DELETE FROM prenotazione WHERE id = '${req.params.id}'`;

  db.query(sql, (res, res)).then(() => {
    res.status(200).json({prenotazioneDelete: true});
   })
   .catch(() => {
    res.status(400).json({prenotazioneDelete: false});
  });

});


module.exports = router;