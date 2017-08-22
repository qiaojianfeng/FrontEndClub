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
    URL01: '/api/hotKeys', //百度
}


export default {
    getSearchData(type, cb, params) {
        BaseService.getData(searchURL[type], params).then((res) => {
            cb(res.data || res)
        }).catch((error) => {
            console.log('数据请求失败啦');
            throw new Error(error);
        })


    }
}