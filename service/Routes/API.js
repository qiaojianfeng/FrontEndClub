var proxy = require('../Proxy/proxy');


/**
 * 站内请求接口 api
 * @param {any} app 
 */
function Open(app) {
    app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });
    //首页搜索引擎代理接口
    app.get('/api/hotKeys', function(request, response) {

        proxy.homeSearchBaidu(function(data, status, msg) {
            response.json(resultsTpl(data, status, msg));
        }, request.query)
    });
    //首页热门文章代理接口
    app.get('/api/hotArticle', function(request, response) {
        proxy.homeArticle(function(data, status, msg) {
            response.json(resultsTpl(data, status, msg));
        }, request.query)
    });
};

/**
 * 接口响应标准格式模板
 * 
 * @param {any} data （数据包）
 * @param {any} status（状态码） 
 * @param {any} msg   （失败信息）
 * @returns 
 */

function resultsTpl(data, status, msg) {
    return {
        data: data,
        status: status ? 1 : 0,
        msg: status ? '' : msg
    }
};

module.exports = {
    Open
};