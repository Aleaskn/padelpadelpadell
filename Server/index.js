const express = require('express');
const app = express();
const axios = require('axios');
const port = process.env.PORT || 3000;
const cors = require('cors');
const router = express.Router();

/*  const cittaController = require('../controllers/cittaController');
const strutturaController = require('../controllers/strutturaController');
const campoController = require('../controllers/campoController');
const prenotazioneController = require('../controllers/prenotazioneController');
const userController = require('../controllers/userControllers');
const userVerifyId = require('../middleware/userVerifyId');                              */


app.use(cors()); //Per consentire alle nostre API la condivisione di risorse cross-origin

//router.route("/").axios.get(cittaController).post(cittaController);

app.get('/citta', (req, res) => {
  res.send("Welcome to Porto Recanati!")
})







app.listen(port, () => {
  console.log(`Listening at http//localhost:${port}`)
})