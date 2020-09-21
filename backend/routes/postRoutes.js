const express = require('express');
const multer = require('../middleware/multer-config');
const router = express.Router();
const postCtrl= require('../Controller/postCtrl');
router.post('/create',multer,postCtrl.CreatePost);
router.get('/', postCtrl.getAllPost);
router.get('/:id', postCtrl.getOnePost);
router.put('/:id',multer, postCtrl.UpdatePost);
router.delete('/:id', postCtrl.DeletePost);
module.exports = router;