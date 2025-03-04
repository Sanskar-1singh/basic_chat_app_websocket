const express=require('express');
const socketio=require('socket.io');
const http=require('http');
const app=express();
const server=http.createServer(app);
const io=socketio(server);



io.on('connection',(socket)=>{//here socket is object which created whrn new connection is created b/w client and server>>
    console.log('user connected',socket.id);

    socket.on('from_client',()=>{
    console.log('event coming from client');
   })

   socket.on('msg_send',(data)=>{
      console.log(data);

    //io.emit('msg_recieved',data);
    socket.broadcast.emit('msg_recieved',data);
    socket.emit('msg_recieved', data);
})

    //here server will continuouslly emit event which client will recieve  and react on event emit by server>>
    // setInterval(()=>{
    //   socket.emit('from_server');
    // },2000)


})

app.use('/',express.static(__dirname+'/public'));

server.listen(4001,()=>{
    console.log('server started at port 4001');
})