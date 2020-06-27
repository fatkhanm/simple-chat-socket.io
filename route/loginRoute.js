const express = require('express');
const path = require('path');
const loginCon = require('../controller/loginCon.js');

const router = express.Router();

router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','view','login.html'));
});
router.post('/login',loginCon.getLogin);

module.exports = router;
