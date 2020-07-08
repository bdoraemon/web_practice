var express = require('express');

var app = express(); //创建服务器

app.get('/', function(req, res) { //这里的 ‘ / ’ 就是URL

    res.send("Hello Express!");
})

app.listen(3000, function() {




    }) //创建端口

app.use('/web/', express.static('../../web/')) //公开public目录，此时可通过url直接访问public文件内的内容