const modelUser = require('../models/user.js');

exports.getLogin = (req,res)=>{
    const nama = req.body.nama
    const room = req.body.room;
    console.log(nama,room);
    res.redirect('/room/'+room)
};