import base from '../base'
const URL = {
  site01:'http://api.xitu.io/resources/github',
  site02:'http://api.xitu.io/resources/qianduan',
  site03:'http://api.xitu.io/resources/cnblogs',
  site04:'http://api.xitu.io/resources/csdn',
  site05:'http://api.xitu.io/resources/ithome',
  site06:'http://api.xitu.io/resources/solidot',
}
 
export default {
  getHotData(cb, data) {
    base.postData(URL.site01, data, (res) => {
       if (res.status == 200) {
        cb(eval(res.data));
      } else {
        console.error(res);
      }
    })
  },
  getOtherHot(type,cb, data) {
    base.postData(URL[type], data, (res) => {
       if (res.status == 200) {
        cb(eval(res.data));
      } else {
        console.error(res);
      }
    })
  }
}
