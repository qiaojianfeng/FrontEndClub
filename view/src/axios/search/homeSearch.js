import BaseService from '../base'

/***********************************************
 * URL01 => 百度搜索(默认)
 * URL02 => Google
 * URL03 => 360
 * URL04 => GitHub
 * URL05 => 知乎
 * URL06 => segmentfault
 * URL07 => CSDN
 * URL08 => w3cschool
 * URL09 => MDN
 * URL10 => 简书
 ************************************************/
const searchURL = {
    URL01: 'http://suggestion.baidu.com/', //百度
}

//针对 百度等callback
function callback(d) {
    if (d.s) return d.s
    else {
        return d.result.map(function(item) {
            return item[0]
        });
    }
};

export default {
    getSearchData(type, cb, data) {
        let params = {
            ...data,
            cb: 'callback' //百度jsonp 回调为cb
        }
        BaseService.getData(searchURL[type], params).then((res) => {
            cb(eval(res.data || res));
        }).catch((error) => {
            console.log('数据请求失败啦');
            throw new Error(error);
        })


    }
}