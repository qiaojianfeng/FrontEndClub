import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    return response;
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

//设置基础配置
const config = {

    //配置默认请求地址
    baseURL: '',
    //`headers`选项是需要被发送的自定义请求头信息
    // headers: { 'X-Requested-With': 'XMLHttpRequest' }
};



export default {
    //请求数据 
    //`params`选项是要随请求一起发送的请求参数----一般链接在URL后面
    //他的类型必须是一个纯对象或者是URLSearchParams对象
    getData(url, params) {
        return axios({
            method: 'get',
            url: url,
            params: params,
            //解构基础配置
            ...config
        })
    },
    //保存数据请求
    saveData(url, data) {
        return axios({
            method: 'post',
            url: url,
            data: JSON.stringify(data),
            ...config
        })
    },

    //修改数据请求
    updataData(url, data) {
        return axios({
            method: 'put',
            url: url,
            data: JSON.stringify(data),
            ...config
        })
    },

    //删除数据请求
    deleteData(url, id) {
        return axios({
            method: 'delete',
            url: url + id,
            ...config

        })
    }

}