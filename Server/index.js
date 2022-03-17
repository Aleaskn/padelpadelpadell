const express = require('express');
const app = express();
const axios = require('axios');
const port = process.env.PORT || 3000;
const cors = require('cors');
const router = express.Router();
const db = require('./db');

const cittaController = require('./controllers/cittaController'); 
const strutturaController = require('./controllers/strutturaController');
const campoController = require('./controllers/campoController');
const prenotazioneController = require('./controllers/prenotazioneController');
const userController = require('./controllers/userController');                             


app.use(cors()); //Per consentire alle nostre API la condivisione di risorse cross-origin

//Collegamenti ai controller
app.use('/', [
  require('./controllers/cittaController')
]);

app.use('/', [
  require('./controllers/strutturaController')
]);

app.use('/', [
  require('./controllers/campoController')
]);

app.use('/', [
  require('./controllers/userController')
]);

app.use('/', [
  require('./controllers/prenotazioneController')
]);


//Per vedere se il server è connesso 
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})