var socket=io();
let btn=document.getElementById('btn');
let inputmsg=document.getElementById('newmsg');
let msgList=document.getElementById('msglist');


btn.onclick=function exec(){
    socket.emit('msg_send',{
        msg:inputmsg.value
    })
}


socket.on('msg_recieved',(data)=>{
    let list=document.createElement('li');
    list.innerText=data.msg;
    msgList.appendChild(list);
})

// btn.onclick=function exec(){
//     socket.emit('from_client')
// }
// socket.on('from_server',()=>{
//     console.log('collected new msg from server');
//     const div=document.createElement('div');
//     div.innerText='new event from server';
//     document.body.appendChild(div);
// })