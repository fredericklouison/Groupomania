const express = require('express');
const router = express.Router();
const comCtrl= require('../Controller/comCtrl');
router.post('/comment/',comCtrl.CreateCom);
router.get('/comment/:id',comCtrl.getAllCom);
router.delete('/comment/:id',comCtrl.Deletecom);
module.exports = router;