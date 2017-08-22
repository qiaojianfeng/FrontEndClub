var fs = require("fs");
var path = require('path');
var resolve = file => path.resolve(__dirname, file);
var html = fs.readFileSync(resolve('../Public/' + 'index.html'), 'utf-8');
/**
 * 首页默认路由
 * @param {any} app 
 */
function Home(app) {
    app.get('/', function(req, res) {
        res.send(html);
    });
}
/**
 * 站内请求接口 api
 * 
 * @param {any} app 
 */
function API(app) {
    app.get('/api/hot', function(req, res) {
        res.send(req);
    });
}

module.exports = {
    Home,
    API
};