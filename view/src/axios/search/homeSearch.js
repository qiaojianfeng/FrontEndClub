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
    URL01: {
        debug: 'http://192.168.1.142:3001/api/hotKeys',
        online: '/api/hotKeys'
    }

};

export default {
    getSearchData(type, cb, params) {
        const SEARCH = BaseService.debug ? searchURL[type].debug : searchURL[type].online;
        BaseService.getData(SEARCH, params).then((res) => {
            cb(res.data || res)
        }).catch((error) => {
            console.log('数据请求失败啦');
            throw new Error(error);
        })


    }
}