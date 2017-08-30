const express = require('express');

const app = express();
const port = 3001;
//路由配置
const Routes = require('./Routes/rotue');
const API = require('./Routes/API');

//注册API
API.Open(app);
//注册入口
Routes.Home(app);


//设置静态文件
app.use(express.static('./Public'));
var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at http://%s:%s', host, port);
});

//404
Routes.nofind(app);