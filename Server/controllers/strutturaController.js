const express = require('express');
const app = express();
const axios = require('axios');
const db = require('../db');
const bodyParser = require('body-parser'); 

//Per la ricerca di tutte le strutture 
app.get('/struttura', (req, res) => {
  const sql = `SELECT * FROM struttura`;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.json(result);
      
  });
}); 


//Per la ricerca di un struttura specifica
/*app.get('/struttura/:id', (req, res) => {
  const sql = `SELECT * FROM struttura WHERE id = '${req.params.id}' `;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.json(result);
      
  });

})*/


//Per la ricerca di una struttura specifica tramite nome
app.get('/struttura/:id', (req, res) => {
  const sql = `SELECT * FROM struttura WHERE id = '${req.params.id}' `;
  
  db.query(sql).then(result => {  //mettere controllo sugli errori
    console.log(result)
    res.json(result);

  });

})


//Per ricercare di strutture in una determinata regione 
/*app.get('/:regione', (req, res) => {
  const sql = `SELECT * FROM struttura 
  INNER JOIN citta ON struttura.id_citta = citta.id
  WHERE regione ='${req.params.regione}'`;

  db.query(sql).then(result => {  //mettere controllo sugli errori

    res.json(result);

  });
  
})*/



//Per ricercare le strutture in una città
app.get('/:cNome', (req, res) => {
  const struttura = req.query.struttura;
  const cNome = req.params.cNome;
  if (typeof (struttura) == 'undefined') {
    const sql = `SELECT * FROM citta WHERE cNome = '${cNome}' `;

    db.query(sql).then(result => {  //mettere controllo sugli errori

      res.json(result);

    });
  } else {
    const sql =
      `SELECT *
      FROM struttura 
      INNER JOIN citta ON struttura.id_citta = citta.id 
      WHERE nome = '${struttura}' and citta.cNome='${cNome}'`;

    db.query(sql).then(result => {  //mettere controllo sugli errori
      res.json(result);
    })
  }
})


//Per inserire la valutazione della struttura
app.post('/struttura', (req, res) => {
  const sql = `INSERT INTO struttura(valutazione)  
  VALUES (
    '${req.body.valutazione}'
  )`;  //POTREBBE VOLERCI UN MIDDLEWARE PER SAPERE DOVE METTERE LA VALUTAZIONE 
  db.query(sql, (req, res)).then(() => {
    res.status(200).json({valutationOk: true});
   })
   .catch(() => {
    res.status(500).json({valutationOk: false});
  });
})


//Per la ricerca di un struttura specifica in una determinata città


module.exports = app;