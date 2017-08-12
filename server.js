var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 80;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query
  var method = request.method

  //从这里开始看，上面不要看

  if(path === '/'){  // 如果用户请求的是 / 路径
    var string = fs.readFileSync('./index.html', 'utf8')  
    response.setHeader('Content-Type', 'text/html;charset=utf-8')  
    response.end(string)   
  }else if(path === '/llz'){  
    var string = fs.readFileSync('./llz.html', 'utf8')  
    response.setHeader('Content-Type', 'text/html;charset=utf-8')  
    response.end(string)   
  }else  if(path === '/llj'){  
    var string = fs.readFileSync('./llj.html', 'utf8')  
    response.setHeader('Content-Type', 'text/html;charset=utf-8')  
    response.end(string)   
  }else  if(path === '/llz_private'){  
    var string = fs.readFileSync('./llz_private.json')  
    response.setHeader('Access-Control-Allow-Origin','http://llj.com')
    response.setHeader('Access-Control-Allow-Methods','POST, GET, OPTIONS, PATCH, DELETE, HEAD')
    response.setHeader('Content-Type', 'application.json')  
    response.end(string)   
  }else  if(path === '/lxxx.js'){ 
    var name = query.name
    var string = fs.readFileSync('./xxx.js','utf8')  
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.end(string.replace('{{name}}',name))   
  }else  if(path === '/style.css'){   
    var string = fs.readFileSync('./style.css', 'utf8')
    response.setHeader('Content-Type', 'text/css')
    response.end(string)
  }else if(path === '/main.js'){  
    var string = fs.readFileSync('./main.js', 'utf8')
    response.setHeader('Content-Type', 'application/javascript')
    response.end(string)
  }else{  
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8') 
    response.end('找不到对应的路径，你需要自行修改 index.js')
  }

  // 代码结束，下面不要看
  console.log(method + ' ' + request.url)
})

server.listen(port)
console.log('监听 ' + port + ' 成功，请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
