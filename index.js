const app = require('express')();
const loginRoute = require('./route/loginRoute.js');
const roomRoute = require('./route/roomRoute.js');
const bodyParser = require('body-parser');
const { count } = require('console');
const server = require('http').createServer(app);
var io = require('socket.io').listen(server);
app.use(bodyParser.urlencoded({extended:false}));
app.use(loginRoute);
app.use(roomRoute);
app.listen(9000);
var countCon = 0;
io.sockets.on('connection', function(socket) {

    console.log('Client connected.');
    countCon++;
    // Disconnect listener
    socket.on('disconnect', function() {
        console.log('Client disconnected.');
    });
});
console.log(countCon);

server.listen(5000);



