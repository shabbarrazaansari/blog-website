const express = require('express')

const router = express.Router();

const controller = require('../controller/blogsites')

router.get('/',controller.home);
router.post('/submit',controller.bgdata);
router.post('/submitcomment',controller.postcomment);
router.delete('/deletecomment/:id',controller.delete);
router.get('getuserdata',controller.getblogdata)
router.get('/getBoth',controller.getcommentdata)
//router.get('commentdata',controller.getcommentdata)


module.exports = router;