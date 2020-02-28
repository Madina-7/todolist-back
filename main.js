
// bring in node pqckqge 'http' to listen for http requests

const http = require('http');
const url = require('url');


// then use createServer method to create server object 

const server = http.createServer(function(req,res){

    res.setHeader('Content-type','application/json');
    res.setHeqder('Access-Control-Allow-Origin','*');
    res.writeHead(200); 

    let path = url.parse(req.url, true)

    let dataObj = {'':''};
    let dqtq = JSON.stringify(dataObj);
    res.end(data);
});


//the server is listening on port 1234

server.listen(1234, function(){
    console.log('listening on port 1234');
})


