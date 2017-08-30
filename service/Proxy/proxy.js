const Request = require('superagent');
const superagent = require('superagent-charset')(Request);
const searchURL = {
    URL01: 'http://suggestion.baidu.com/', //百度
};
const hotURL = {
    github: 'http://api.xitu.io/resources/github',
    qianduan: 'http://api.xitu.io/resources/qianduan',
    cnblogs: 'http://api.xitu.io/resources/cnblogs',
    csdn: 'http://api.xitu.io/resources/csdn',
    ithome: 'http://api.xitu.io/resources/ithome',
    solidot: 'http://api.xitu.io/resources/solidot',
};
//针对 百度等callback
function callback(d) {
    if (d.s) return d.s
    else {
        return d.result.map(function(item) {
            return item[0]
        });
    }
};
/**
 * 百度关键词搜索
 * 
 * @param {any} fn 
 * @param {any} params 
 */
function homeSearchBaidu(fn, params) {
    let type = params.type || 'URL01';

    superagent.get(searchURL[type])
        .query({
            wd: params.wd || '联系站长哈！！',
            cb: 'callback'
        })
        .charset() //指定编码或者为空，为空为自动模式
        .end(function(err, res) {
            fn(eval(res.text), res.ok, '接口响应错误');
        })
};

function homeArticle(fn, params) {
    var type = params.type || 'github';
    params = params.type == 'github' ? params : {};
    superagent.post(hotURL[type])
        .send(params)
        .charset() //指定编码或者为空，为空为自动模式
        .end(function(err, res) {
            var Data = typeof(res.text) == 'string' ? JSON.parse(res.text) : res.text;
            Data = Data.data || Data;
            fn(Data, res.ok, '接口响应错误');
        })
};
module.exports = {
    homeSearchBaidu,
    homeArticle
}