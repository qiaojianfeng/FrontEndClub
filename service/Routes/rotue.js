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
 * 404
 * 
 * @param {any} app 
 */

function nofind(app) {
    // 404
    app.get('*', function(req, res) {
        res.send('<h1>404</h1>')
    });
}



module.exports = {
    Home,
    nofind
};