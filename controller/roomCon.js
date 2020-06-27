
const io = require('socket.io-client');
const socket = io.connect();

socket.on('connect',()=>{
    console.log("is that works?");
})
