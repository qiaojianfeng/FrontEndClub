import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

const config = {
  baseURL: ''
}

// GET
function getData(url, data, cb) {
  axios.get(url, {
      params: data
    })
    .then((response) => {
      cb(response);
    })
    .catch((error) => {
      cb(error);
    });
}


// POST
function postData(url, data, cb) {
  axios.post(url, data)
    .then((response) => {
      cb(response);
    })
    .catch((error) => {
      cb(error);
    });

}

// options
function optionsData(url, data, cb) {
  axios.options(url, data)
    .then((response) => {
      cb(response);
    })
    .catch((error) => {
      cb(error);
    });

}

export default {
  getData,
  postData,
  optionsData
}
