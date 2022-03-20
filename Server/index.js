const express = require('express');
const app = express();
const axios = require('axios');
const port = process.env.PORT || 3001;
const cors = require('cors');
const db = require('./db');
const bodyParser = require('body-parser');

const cittaController = require('./controllers/cittaController'); 
const strutturaController = require('./controllers/strutturaController');
const campoController = require('./controllers/campoController');
const prenotazioneController = require('./controllers/prenotazioneController');
const userController = require('./controllers/userController');                             

app.use(bodyParser.json());
app.use(cors()); //Per consentire alle nostre API la condivisione di risorse cross-origin



//Collegamenti ai controller
app.use('/citta',(cittaController));

app.use('/struttura',strutturaController);

app.use('/campo',(campoController));

app.use('/user',(userController));

app.use('/prenotazione',(prenotazioneController));


//Per vedere se il server è connesso 
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})