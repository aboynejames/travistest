// just some javascript

var http = require('http');
//var exec = require("child_process").exec;

//var body = '<html><header></header><body><h1>james title</h1></body></html>';


//var server = http.createServer();

function getcall(res) {
	
	
var opts = {
  host: 'www.mepath.co.uk',
  port: 80,
  path: '/',
};


var req = http.get(opts, function(resa) {
 // console.log(res);
 resa.setEncoding('utf8');
  resa.on('data', function(data) {

var  jam = data;	  
	  
   console.log(jam);  
	
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(jam);		
  res.end();

  console.log("after getcall and data collected");  

  
  });
});
	
}


var handleReq = function(req,res){
	 console.log("Request received.");	

/*
exec("find / -name java",
    { timeout: 10000, maxBuffer: 20000*1024 },
    function (error, stdout, stderr) {
	    content =  stdout;
	   // console.log(content);
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(content);		
  res.end();
    });
*/

getcall(res);	

	
	
 
};


http.createServer(handleReq).listen(8888);
 
console.log("Server has started.");
