const express = require('express');
const router = express.Router();
const comCtrl= require('../Controller/comCtrl');
router.post('/comment/',comCtrl.CreateCom);
router.get('/comment/',comCtrl.getAllCom);
router.put('/comment/:id',comCtrl.UpdateCom);
router.delete('/comment/:id',comCtrl.Deletecom);
module.exports = router;