var http = require('http').createServer(handler);
var fs = require('fs');
var io = require('socket.io')(http)

http.listen(8085);

console.log("已在8085 port啟動");

function handler(request, result){
    fs.readFile(__dirname + '/public/index_08130263.html', function funcname(err, data){
        if(err){
            result.writeHead(404, {'Content-Type' : 'text/html'});
            return result.end("404 Not Found");
        }
    
        result.writeHead(200, {'Content-Type' : 'text/html'});
        result.write(data);
        return result.end();
    });
}

io.sockets.on('connection', func);
function func(socket){
    console.log("connect");
    socket.on('ChangeLED', GetData);
}
function GetData(data){
    console.log("收到來自client端的訊息");
    console.log(data);
}
