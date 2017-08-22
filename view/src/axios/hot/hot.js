import BaseService from '../base'
const URL = '/api/hotArticle'

export default {
    getHotData(callback, params) {
        BaseService.saveData(URL, params).then((res) => {
            callback(res.data || res)
        }).catch((error) => {
            console.log('数据请求失败啦');
            throw new Error(error);
        })
    }

}