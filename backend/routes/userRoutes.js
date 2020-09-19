const express = require('express');
const multer = require('../middleware/multer-config');
const router = express.Router();
const dbquery= require('../Controller/userCtrl');
router.post('/signup', dbquery.createUser);
router.get('/sigin', dbquery.login);
router.put('/sigin',multer ,dbquery.UpdateUser);
router.delete('/sigin', dbquery.DeleteUser);
module.exports = router;