var http=require("http");
var server=http.createServer(function(request,response){
response.writeHead(200,{"content-type":"text/plain"});
response.end("Hello world");
})
server.listen(1234,function(){
	console.log("Server is running in port number 1234");
});
