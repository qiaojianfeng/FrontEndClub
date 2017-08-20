import base from '../base'

/***********************************************
 * 1 => 百度搜索(默认)
 * 2 =>  
 ************************************************/
const API01 = 'http://suggestion.baidu.com/';
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
    let url = '';
    switch (type) {
      case 1:
        url = API01
        break;
      case 2:
        url = API01
        break;
    }
    let params = {
        ...data,
        cb:'callback'
    }

    base.getData(url, params, (res) => {
        if(res.status == 200){            
            cb(eval(res.data));
        } else {
            console.error(res);
        }
        
    })
  },
}
