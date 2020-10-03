const express = require('express');
const multer = require('../middleware/multer-config');
const router = express.Router();
const postCtrl= require('../Controller/postCtrl');

router.post('/create',multer,postCtrl.CreatePost);
router.get('/', postCtrl.getAllPost);
router.get('/like/:id/:user', postCtrl.likePost);
router.get('/dislike/:id/:user', postCtrl.dislikePost);
router.get('/getlike/:id/:user', postCtrl.getlikePost);
router.get('/getdislike/:id/:user', postCtrl.getdislikePost);
router.put('/:id',multer, postCtrl.UpdatePost);
router.delete('/:id', postCtrl.DeletePost);
module.exports = router;