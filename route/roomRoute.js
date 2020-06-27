const router = require('express').Router();
const path = require('path');
const roomCon = require('../controller/roomCon.js');

router.get('/room/:roomName',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','view','chatbox.html'));
});
module.exports = router;