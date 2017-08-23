import BaseService from '../base'
const URL = {
    debug: 'http://192.168.1.142:3001/api/hotArticle',
    online: '/api/hotArticle'
};
const HOT = BaseService.debug ? URL.debug : URL.online;
export default {
    getHotData(callback, params) {
        BaseService.getData(HOT, params).then((res) => {
            callback(res.data || res)
        }).catch((error) => {
            console.log('数据请求失败啦');
            throw new Error(error);
        })
    }

}