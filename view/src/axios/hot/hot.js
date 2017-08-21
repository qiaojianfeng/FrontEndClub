import BaseService from '../base'
const URL = {
    site01: 'http://api.xitu.io/resources/github',
    site02: 'http://api.xitu.io/resources/qianduan',
    site03: 'http://api.xitu.io/resources/cnblogs',
    site04: 'http://api.xitu.io/resources/csdn',
    site05: 'http://api.xitu.io/resources/ithome',
    site06: 'http://api.xitu.io/resources/solidot',
}

export default {
    getHotData(callback, params) {
        BaseService.saveData(URL.site01, params).then((res) => {
            callback(res.data || res)
        }).catch((error) => {
            console.log('数据请求失败啦');
            throw new Error(error);
        })
    },
    getOtherHot(type, callback, params) {
        BaseService.saveData(URL[type], params).then((res) => {
            callback(eval(res.data || res))
        }).catch((error) => {
            console.log('数据请求失败啦');
            throw new Error(error);
        })
    }

}