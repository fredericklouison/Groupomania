const express = require('express');
const multer = require('../middleware/multer-config');
const router = express.Router();
const dbquery= require('../Controller/userCtrl');
const auth = require('../middleware/auth');

router.post('/signup',dbquery.createUser);
router.post('/sigin', dbquery.login);
router.put('/update',multer ,dbquery.UpdateUser);
router.delete('/delete/', dbquery.DeleteUser);
module.exports = router;