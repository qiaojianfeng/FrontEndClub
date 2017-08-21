const express = require('express');
const app = express();
const port = 3001;
//路由配置
const routes = require('./Routes/rotue');
//加载入口页面
routes.Home(app);
//设置静态文件
app.use(express.static('./Public'));
var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log(server.address());
    console.log('listening at http://%s:%s', host, port);
});